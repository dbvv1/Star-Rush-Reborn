# 海岸街屋布局筛选（保守足印合同）

在 `../coast-street-placement/adapter.mjs` 的 `placeStreet` / `shiftSetback` 结果上，
按**同排**和**当前排对全部已接受排**的房屋 world XZ 凸多边形做相交与最小间距筛选。
只做 Node.js／CPU 与文件处理；不接入 `scenery.js`、渲染、碰撞、地图或默认入口，
也不修改固定源、原 adapter、原报告和原测试。

已有 `placeStreet` 只验证房屋到道路的净空。本目录补的是房屋之间的保守足印检查：
整行接收或整行拒收，不删单件凑数，不移动、缩放或拉伸任何房屋。这是 2D 凸足印合同，
不是完整 3D 三角面碰撞。

## 输入与来源

- 固定源、合同、1 m 道路帧样本全部复用
  `../coast-street-placement/fixed-source/`；每次运行先用 `verifyFixedSource()` 核对
  `street.glb`、manifest、上游 adapter、帧样本和许可的字节哈希及三栋房屋的
  mesh sha256。本目录不复制 GLB、`.blend` 或第二份放置算法。
- `fixed-source/` 只是字节与样本目录，里面的东西不能直接 `import`。加载函数在
  `../coast-street-placement/fixed-source-contract.mjs`（`verifyFixedSource`、
  `loadCoastFrameSample`）和 `../coast-street-placement/sample-road.mjs`
  （`createFixtureSampleRoad`、`loadMasterCircuit`）。
- 道路使用两份只读来源交叉核对：记录样本
  `coast-280-720.frames.json`（经 `createFixtureSampleRoad`）和 master
  `circuit.js` 的真实 `circuitRoad`（经 `loadMasterCircuit` 在裸 VM 中只读加载）。
  20 行的站位都是整数米，两份来源给出逐字节一致的布局结果。
- 三栋固定件仍为 `house-a` / `house-g` / `house-m`，pivot 分别为
  `[-10,0,0]`、`[0,0,2]`、`[10,0,0]`，底部在 `y=0`，门朝本地 `-Z`。

## 接口

```js
planStreetRows(parts, sampleRoad, rows, minGap = 0.5) -> {accepted, rejected}
checkPlacedStreetRows(parts, placedRows, minGap = 0.5) -> {accepted, rejected}
inspectStreetRowPairs(parts, placedRows, minGap = 0.5) -> {rows, pairs}
```

`inspectStreetRowPairs` 只供报告和人工复核使用：它报告给定排之间的**全部**足印对，
不做接收/拒收，也不依赖最终 accepted 集。

### 最小用法

如果你已经有一批自己的 `{centerS, side, setback}` 行，第一步就是下面的调用。
它在固定源上返回 `accepted` 1 行、该行 3 个 placement：

```js
import {verifyFixedSource, loadCoastFrameSample} from '../coast-street-placement/fixed-source-contract.mjs';
import {createFixtureSampleRoad} from '../coast-street-placement/sample-road.mjs';
import {planStreetRows} from './layout.mjs';

const {parts} = verifyFixedSource();                       // 返回 {parts}
const road = createFixtureSampleRoad(loadCoastFrameSample().frames);  // 返回 {frames}
const {accepted, rejected} = planStreetRows(parts, road, [
  {centerS: 320, side: 1, setback: 4},
]);
```

- `verifyFixedSource()` 返回 `{contract, manifest, parts, fileHashes, mergedBounds}`；
  布局只用其中的 `parts`。
- `loadCoastFrameSample()` 返回含 `frames`（441 个 1 m 帧）的样本对象；
  `createFixtureSampleRoad(frames)` 必须传入这个 `frames`，产出 `sampleRoad(s)`。
- 要换真实道路，用 `loadMasterCircuit(仓库根目录).circuitRoad` 作为 `sampleRoad`；
  它只在裸 VM 中只读加载仓库根的 `engine.js` / `circuit.js`。
- 要筛自己的行，直接照上面的示例调用 `planStreetRows` 即可，不必先重跑报告。

### inspectStreetRowPairs

`inspectStreetRowPairs(parts, placedRows, minGap)` 返回 `{rows, pairs}`：

- `rows[]` 每项 `{row, inputIndex, roadOk}`：`row` 是 `{centerS, side, setback}`，
  `inputIndex` 是该排在其 `placedRows` 数组中的原始下标，`roadOk` 即原结果的 `ok`。
- `pairs[]` 是给定排之间的全部房屋对（同排与跨排），每项字段：

| 字段 | 含义 |
|---|---|
| `sameRow` | 两栋是否在同一排 |
| `rows` | 两排快照 `[{centerS, side, setback}, ...]` |
| `houseIds` | 两栋房屋 ID，顺序与 `rows` 对应（`houseIds[0]` 属于 `rows[0]`） |
| `overlap` | `true` 表示相交、包含或保守判为边界接触；`false` 表示分离 |
| `overlapDepth` | `overlap:true` 时为非负 SAT 最小穿透量（米）；仅由边段距离判为接触时为 0 |
| `boundaryContact` | 是否属于边界接触容差范围（穿透量不超过 1e-9 m，也包含数值近接触） |
| `distance` | `overlap:false` 时为两多边形全部边段的最短距离；重叠时为 `0` |
| `minGap` | 本次检查的最小间距门槛 |
| `pass` | **`false` 即该对不合格**；`true` 表示分离且距离不小于 `minGap` |
| `code` | 不合格原因：`footprint-overlap` 或 `footprint-gap`；合格为 `null` |
| `measured` / `required` | 对应实测值与门槛 |

判断某一对是否失败只看 `pairs[].pass`；`overlap:false` 且 `distance` 小于 `minGap`
时 `code` 为 `footprint-gap`。`roadOk:false` 的排仍以 `roadOk:false` 出现在 `rows`
里，也不会跳过 pair 检查：它们的足印照常参与全部房屋对计算，只是道路状态单独标出，
不会因为道路不合格就静默消失。

### planStreetRows

`rows` 每项 `{centerS, side, setback}`：

- `centerS`：有限数，米。
- `side`：只能是 `-1` 或 `+1`。
- `setback`：有限非负米。
- 相同 `centerS` 与 `side` 的组合只能出现一次；重复直接抛 `duplicate_row`。
- `minGap`：有限非负米，默认 `0.5`。

`planStreetRows` 只做四件事：校验行、按 `centerS` 升序和 `side`（-1 在 +1 前）
稳定排序、每行调用一次 `placeStreet(parts, sampleRoad, centerS, side, setback)`、
把全部结果交给 `checkPlacedStreetRows`。它不实现第二份放置或足印算法。
传入的 `rows` 数组不会被修改。

### checkPlacedStreetRows

接收 `placeStreet` 或 `shiftSetback` 的既有结果，**不会重新放置**，也不接受
`sampleRoad` 参数。它校验并保留原矩阵、`ok` 和 `violations`，然后执行与
`planStreetRows` 相同的足印筛选。`placedRows` 为结果数组；数组顺序会被稳定排序，
`inputIndex` 是该项在传入数组中的原始下标（`planStreetRows` 会把该值映射回调用方
`rows` 数组的原始下标）。
每排必须完整包含传入 `parts` 的全部 ID，且每个恰好一次；不能靠删去单栋让一排通过。
这个要求来自 `parts` 的实际 ID 集合，不写死为三栋。
调用方应传入未经篡改的原 adapter 结果。这里校验结构和 `ok`/`violations` 的一致性，
不重新采样道路，也不替人为改写的净空数值重新认证道路安全。

### 返回

```js
{
  accepted: [{
    row: {centerS, side, setback},
    inputIndex,
    ok: true,                 // 原 placeStreet 的道路状态
    violations: [],           // 原 violations
    requiredClearance, clearance, nominalBaseOffset, baseOffset,
    placements: [/* 原 placement：id, station, pivot, matrix, bbox, clearance, clearanceAt, frontDotRoad */]
  }],
  rejected: [{
    row: {centerS, side, setback},
    inputIndex,
    houseIds,                 // 涉及的原因房屋 ID，字典序
    reasons: [/* 见下 */],
    source: {ok, violations, requiredClearance, clearance}  // 原结果状态
  }]
}
```

接受项的 `placements` 是原 `placeStreet` / `shiftSetback` 结果对象，矩阵与道路净空
逐位不变。拒收项不保留矩阵副本，只保留 `row`、房屋 ID、原因和数值。

原因代码与数值：

| code | 触发 | 数值字段 |
|---|---|---|
| `road-clearance` | 该行原结果 `ok=false`，整行拒收，不再做足印检查 | `measured` < `required`，附 `at`（最近折线站位） |
| `footprint-overlap` | 凸多边形相交、包含或边界接触 | `measured`/`overlapDepth` 为 SAT 最小穿透（0 表示边界接触），`required` 为 0 |
| `footprint-gap` | 不相交，但全部边段最短距离小于 `minGap` | `measured`/`distance` 为最短距离，`required` 为 `minGap` |

原因还带 `houseIds`、`rows`（两排快照）、`sameRow` 和 `message`。数值保留完整
浮点精度，便于复算；显示用消息里给 6 位小数。

### 校验与错误

本模块自己的校验错误抛 `StreetLayoutError`，它继承 `StreetPlacementError`，带 `code`
和细节。`planStreetRows` 调用 `placeStreet` 时的帧/部件错误由原 adapter 原样抛出
`StreetPlacementError`（例如 `invalid_frame`、`invalid_parts`），调用方按 `code`
处理即可。

| code | 场景 |
|---|---|
| `invalid_rows` | `rows` / `placedRows` 不是数组 |
| `invalid_row` | 行不是对象 |
| `invalid_center` | `centerS` 不是有限数 |
| `invalid_side` | `side` 不是 -1 / +1 |
| `invalid_setback` | `setback` 不是有限非负数 |
| `invalid_min_gap` | `minGap` 不是有限非负数 |
| `duplicate_row` | 重复的 `centerS` + `side` 组合 |
| `invalid_parts` | parts 为空、重名、网格长度/坐标非法、足印凸包少于 3 点 |
| `invalid_result` | 结果结构、`ok`/`violations` 不一致、缺少/未知/重复房屋、净空字段非法等 |
| `invalid_matrix` | 矩阵不是有限列主序 4×4，底行为 `[0,0,0,1]`，Y 轴不为 `[0,1,0]`，X/Z 轴不水平/不单位/不正交/非右手系 |

矩阵的 16 个槽位都必须存在且为有限数，包括 Y 平移和仿射底行；稀疏数组不合格。
矩阵必须保持 `placeStreet` 产出的刚体 yaw + 平移形式；筛选不修复坏矩阵。

## 足印判定

1. 每栋房屋取 `localXZHull(part)` 的真实局部 XZ 凸包点，用该 placement 的原 4×4
   矩阵变换到世界 XZ：
   `wx = m0*x + m8*z + m12`，`wz = m2*x + m10*z + m14`。
   不使用轴心，也不只用轴对齐包围盒。
2. 同排任两栋、当前排与所有已接受排任两栋，先用分离轴（SAT）判断凸多边形是否
   相交。相交、包含、边界接触都拒收。分离轴上的微小间隔不超过 1e-9 m 时，
   保守按数值接触处理，避免旋转和平移的舍入误差把接触误判成分离。
3. SAT 判为分离时计算两多边形**全部边段**的最短距离；距离不超过 1e-9 m 也按
   边界接触拒收，即使 `minGap=0`。其余距离直接与 `minGap` 比较：计算值小于
   门槛拒收，等于或大于门槛通过，不减去容差。理论上恰好达标但浮点计算值略低于
   门槛的情况也保守拒收；接触容差只扩大拒收范围，不主动降低最小间距要求。
4. 一行内或跨排只要出现一个失败原因，整行拒收，不尝试删单栋凑三栋。拒收行不会
   加入 accepted，后续行只与已接受排比较。
5. 评估顺序固定：`centerS` 升序、`side` -1 在 +1 前、原始下标兜底。相同输入没有
   墙钟、随机数或缓存副作用，`JSON.stringify` 两次结果字节一致。

## 报告与当前结果

`report.mjs` 生成 `out/coast-layout-320-680.json`（LF 换行，两空格缩进）：

- 320–680 m，每 40 m 一行，双侧，共 20 行。
- setback 4 m 与 6 m 分别独立执行 `planStreetRows`（6 m 是重新放置，不是平移）。
- 另外把 4 m 的 20 个 `placeStreet` 结果逐行 `shiftSetback(+2)`，再整批交给
  `checkPlacedStreetRows`，并记录每行平移前后的道路净空与旋转保持。
- 固定样本与真实 `circuit.js` 的 `circuitRoad` 各跑一遍，20 行结果逐字节一致。
- 510/-1 不在 40 m 网格上，单独做道路净空回归。
- 600/-1 同排、640/+1 与 680/+1 邻排另做直接足印检查；检查直接来自各自
  `placeStreet` 结果，不依赖最终 accepted 集。

当前结果（本报告）：

| 项 | setback 4 m | setback 6 m | 4 m 平移 +2 m |
|---|---|---|---|
| 接收 / 拒收 | 10 / 10 | 10 / 10 | 10 / 10 |
| 接收行最小道路净空 | 12.010 m | 14.010 m | 14.008 m |
| 交叉核（样本 vs 真实 circuitRoad） | 逐字节一致 | 逐字节一致 | — |

三种筛选的接收集在当前样本上恰好相同：`320/1, 360/1, 400/1, 440/1, 480/1,
520/1, 560/1, 600/1, 640/-1, 680/-1`。这是三次独立筛选各自的结果，**不能**据此
说纯 R 平移对所有足印都通过；报告里分别列出三批，并保留 `setComparison` 的说明。

主要拒收数值：

- `320/-1` 4 m：house-g 与 house-m 同排足印距离 0.353 m，小于 0.5 m。
- `440/-1` 4 m：house-a/g 穿透 1.493 m，house-g/m 穿透 3.168 m。
- `520/-1` 4 m：house-a/g 穿透 4.887 m，house-a/m 穿透 0.360 m，house-g/m 穿透
  3.797 m。
- `600/-1` 4 m：house-a/g 穿透 1.114 m，house-g/m 穿透 5.248 m；6 m 分别为
  1.417 m、5.500 m。
- `640/+1`、`680/+1` 在 4 m 时先因同排相交被拒收（640 的 house-g/m 穿透 0.048 m；
  680 的 house-a/g 与 house-g/m 穿透 1.214 m、0.760 m）。

640/+1 与 680/+1 的**邻排**检查不受上述拒收影响：4 m 时无相交，最近一对
（640 的 house-m 与 680 的 house-a）距离 0.856 m，满足 0.5 m；6 m 时同一对
穿透 0.233 m，纯平移后已相交。这正是要单独检查、不能只看最终 accepted 集的原因。

510/-1 道路回归：4 m 时 `ok=true`，最小净空 12.010 m；纯 +2 m 平移后
`ok=false`，house-m 在 station 514 的净空为 13.967 m，低于 14 m。该行不在 40 m
网格上，因此不影响上表的 20 行结论。

## 验证

2026-11-05 独立云端复验（Node.js 24）：

| 检查 | 结果 |
|---|---|
| `node --test authoring/coast-street-layout/test.mjs` | 34 项通过，0 失败 |
| `node --test authoring/coast-street-placement/test.mjs` | 原 25 项通过，0 失败 |
| `npm test` | 177 项通过，0 失败、0 跳过；后续来源选择、客户端、API 和入口检查全部完成，退出 0 |
| `npm run build` | 根生产构建通过，退出 0；没有部署 |

新测试覆盖：直线、440/680 左右弯、双侧、同排/相邻排/非相邻排、相交/相离/包含/
仅接触（含旋转、平移、跨排与零门槛）、亚纳米门槛差、重复行、缺字段/NaN/Infinity、
矩阵全部 16 项稀疏/非有限校验、完整部件集合及不同件数、坏矩阵、`ok=false` 整行拒收、输入不被修改、
排序稳定、真实 20 行非空接受集、接受行独立复算至少 0.5 m、网格/文件/manifest
哈希不变、公开报告按运行时 homedir、路径/地址中的账户名、drive-letter 路径与
POSIX 家目录路径（/Users、/home、/root）校验，4 m→6 m 平移整批复查、
510/-1 回归、报告确定性与已提交 JSON 一致。
0.5 m 门槛没有为凑接受集而放松。

未运行：浏览器、截图、GPU、smoke、音频和任何场景接入；本目录是纯 CPU/文件合同。

## 文件

| 文件 | 作用 |
|---|---|
| `layout.mjs` | `planStreetRows`、`checkPlacedStreetRows`、`inspectStreetRowPairs`、凸足印几何与校验 |
| `report.mjs` | 20 行、双 setback、平移复查、510 回归和指定排检查的 CPU 报告 |
| `test.mjs` | 34 项测试 |
| `out/coast-layout-320-680.json` | 当前海岸 20 行的布局筛选结果（公开相对路径） |
| `README.md` | 本文件 |

## 运行

```sh
cd authoring/coast-street-layout
node report.mjs
node --test test.mjs
```

上面的 `report.mjs` 只用来重跑固定的 20 行报告。要筛自己的行，直接用“接口 → 最小用法”
里的示例调用 `planStreetRows`，不必先重跑报告。

`report.mjs` 会读取 `../coast-street-placement/fixed-source/` 和根目录的
`engine.js` / `circuit.js`（只读），并重写 `out/coast-layout-320-680.json`。
若 `circuit.js` 的海岸线形或固定源发生变化，原 `coast-street-placement` 的采集
与合同核对会先失败；本目录不维护第二份道路或模型来源。

## 边界与未验证

- 这是保守的 2D XZ 足印合同：不同高度但 XZ 投影相交的房屋也会被拒收；屋顶、
  檐口和地形的 3D 关系不参与。它不冒充完整 3D 三角面碰撞。
- 足印来自真实 mesh 的 XZ 凸包，比轴对齐包围盒更贴近实际，但仍是凸包近似；
  凹形立面的凹口不会体现，因此偏保守。
- 20 行是每 40 m 的独立取样，不是连续场景布局；接收行只是候选，未接入游戏，
  也不表示画面、手感或场景质量已改善。
- 报告只断言各批自己的 accepted 集；4 m、6 m 和平移复查的接受集相同不构成
  “纯 R 平移普遍安全”的证明，510/-1 就是道路净空反例。
- 只验证固定源三栋标准件；其它 part 组合需要自行核对 pivot、门朝向和足印凸包。
