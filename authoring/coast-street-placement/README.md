# 海岸街屋刚体放置适配

把固定源的三栋海岸住宅标准件（`house-a` / `house-g` / `house-m`）接到当前
`circuitRoad(s)` 道路帧，输出显式房屋 ID 与刚体矩阵，并按 1 m 道路折线计算
世界 XZ 包围盒净空。只在 Node.js / CPU 与命令行运行；不接入 `scenery.js`、
渲染、碰撞或默认入口，也不修改现有场景。

## 固定源

| 文件 | 上游位置（提交 `ab2655930996b9d81f5fb35469669c72b7be28e1`） | sha256 |
|---|---|---|
| `fixed-source/street.glb` | `asset-pipeline/content-set/outputs/base/street.glb` | `a542129f...73637c958` |
| `fixed-source/manifest.json` | `asset-pipeline/content-set/outputs/base/manifest.json` | `3a431f87...f4d4c75c80` |
| `fixed-source/upstream-adapter.mjs` | `asset-pipeline/content-set/adapter.mjs` | `31a9e59f...b363299` |
| `fixed-source/contract.json` | 本目录记录的固定源合同 | — |

三栋已归一：脚底 `y=0`，门朝本地 `-Z`，沿街轴为 `+X`，道路横向为 `+Z`；
A/G/M 的 pivot 分别为 `[-10,0,0]`、`[0,0,2]`、`[10,0,0]`，共 3317 个三角形。
`fixed-source/contract.json` 记录每个 part 的顶点数、三角形数、局部包围盒和
规范化 mesh sha256；`verifyFixedSource()` 每次运行都会重新解析 GLB 并核对。
manifest 的 `budget.uniform_scale = 6.0` 是上游 `build.py` 的源到米换算；这里
直接使用已导出的米制 GLB，放置矩阵不再乘任何比例。

模型来自 Kenney City Kit Suburban 2.0，CC0；许可全文见
`fixed-source/LICENSE-suburban.txt`。

### 道路帧样本合同

`fixed-source/coast-280-720.frames.json` 是从当前 master `circuit.js` 的
`circuitRoad(s)` 按 1 m 记录的 280–720 m 帧（`p`/`h`/`T`/`R`/`curv`/`slope`，共
441 帧）；报告取其中的 320–680 m，两侧各留 40 m，覆盖行端净空窗口——窗口现在
包含 `8 m + setback` 的要求距离，不再只覆盖房屋自身横向尺寸。样本记录的
`base_ref` 是采集时的 git 提交，由 `capture-fixed-sample.mjs` 从 `HEAD`
（或 `--base-ref <rev>`）解析并写入，同时记录 `circuit.js` 的 sha256；重录要求
已跟踪工作区干净，且指定提交的 `circuit.js` 必须与工作区一致。测试会读取
`base_ref` 提交里的 `circuit.js` blob 核对 sha256，而不是比对复制的提交字面量，
因此无关提交不会误报，滞留旧 `base_ref` 会失败。`sample-road.mjs` 里有与 master
逐位一致的只读副本 `coastRoad(s)`，测试会同时加载真实 `engine.js`/`circuit.js`
（仅读取）核对 fixture、副本和 master 三者一致。`circuit.js` 一旦变化，该测试会失败。
`report-coast.mjs` 则直接用这份样本帧构造 `sampleRoad`，报告可在不加载
`circuit.js` 的情况下复现。

## 接口

```js
placeStreet(parts, sampleRoad, centerS, side, setback) -> result
shiftSetback(result, sampleRoad, delta) -> result
```

```js
import fs from 'node:fs';
import {parseStreetStandard, placeStreet} from './adapter.mjs';
import {coastRoad} from './sample-road.mjs';
const parts = parseStreetStandard(fs.readFileSync('fixed-source/street.glb'));
const result = placeStreet(parts, coastRoad, 400, 1, 4);
for (const house of result.placements) console.log(house.id, house.matrix);
```

- `parts`：`parseStreetStandard(bytes)` 解析出的固定源 part 数组。
- `sampleRoad(s)`：当前 `circuitRoad(s)`；返回 `{p:[x,y,z], h, T, R, curv, slope}`。
  `T`/`R` 为水平单位基，`p[1]` 才是高度。坏帧统一抛 `invalid_frame`，都带
  `station` 和 `reason`：放置帧错误另有 `houseId`、`phase='placement'`；净空折线帧
  错误只有 `phase='clearance'`（无 `houseId`）。
- `centerS`：样段中心弧长，米。
- `side`：仅 `-1` 或 `+1`。
- `setback`：非负米，道路净空在 8 m 基准之外追加的距离。

每栋房：

1. 站位 = `centerS + part.pivot.x`；只按该站位查询一次道路帧。
2. 本地 `+X` 映射到 `side*T`，本地 `+Z` 映射到 `side*R`，`+Y` 保持向上。
   这是单次刚体 yaw + 平移；3×3 部分严格正交、行列式为 1，不缩放、不倾斜、
   不沿弯道拉伸墙檐。
3. 横向原点 = `side * (baseOffset + part.pivot.z)`。`baseOffset` 三栋共享，
   `pivot.z` 保留原始纵深差（A/M 0 m，G +2 m），`side` 同时决定方向和门的朝向。
4. 底部 pivot（本地原点 `y=0`）落在该站位 `p[1]`；坡地上不要求每个底点贴地，
   不加地基。
5. 本地门面为 `-Z`，变换后门面法线正对道路；结果里 `frontDotRoad` 为点积，
   正常应接近 1。

### 净空

`baseOffset` 的标称值把最近的前墙面放到 `8 m + setback`：

```text
nominal = 8 + setback - min(part.pivot.z + localMinZ)
```

弯道上 yaw 后的世界轴对齐包围盒会额外贴近折线，因此 `placeStreet` 用确定性
不动点搜索扩大共享 `baseOffset`，直到每个**实际网格顶点凸包**得到的世界 XZ
包围盒与**每一段 1 m 道路折线**的最短距离都达到 `8 m + setback`。弯道行额外
留 1 cm 拟合余量，但该余量只覆盖 1 m 折线离散误差，不是所有站位的一般性保证：
`shiftSetback` 不重新拟合 `baseOffset`，急弯处纯 R 轴平移仍可能低于新要求
（见 510/-1 反例），调用方必须检查 `result.ok` 与 `violations`。净空窗口按
每栋的 `pivot.x`、局部网格凸包水平半径和 `8 m + setback` 计算，覆盖所有可能
落在要求距离内的折线段；`shiftSetback` 按新的 6 m 要求重新计算窗口，不复用
4 m 的窗口。

距离按矩形与线段计算：线段穿过包围盒或端点落在盒内记 0；不是只看轴心或
采样点。无法满足时结果 `ok=false`，`violations` 逐栋给出 `houseId`、原因、
实测值、要求和最近折线站位。

结果包含：

```text
{ schema, centerS, side, setback, requiredClearance, nominalBaseOffset,
  baseOffset, window, clearance, ok, violations,
  placements: [{ id, station, pivot, matrix, bbox, clearance, clearanceAt, frontDotRoad }] }
```

`matrix` 为列主序 4×4，与 `engine.js` 的 `transform()` 一致；可直接用于后续接线。
它作用于 `part.sourceData` 的网格坐标（本地原点在房屋底心），**不**再叠加
`pivot`：`pivot.x` 已用于选站，`pivot.z` 已折进横向偏移。结果里的 `pivot`
是该局部原点（底心）的世界位置。

### 4 m -> 6 m 二改

`shiftSetback(result, sampleRoad, delta)` 只把每栋沿其**同一站位**的 R 轴平移
`delta` 米，3×3 线性部分、网格、材质和尺寸逐位不变；`baseOffset`、净空要求
和逐栋净空同步更新。测试逐元素比较旋转/缩放并检查平移只含 R 分量。

这是平移合同，不是一般性净空保证。`shiftSetback` 不重新拟合 `baseOffset`，急弯
处 4 -> 6 m 可能返回 `ok=false`：实测 `centerS=510`、`side=-1`（fixture 与
`coastRoad` 结果一致）在 4 m 时放置成功、house-m 道路净空 12.010 m；平移到
6 m 后 house-m 为 13.967 m，最近段 station 514，低于要求的 14 m。该站位在任务
要求的 320–680 m 样段内，只是不在报告的 20 行（每 40 m 一行）里。要一般性保证
需提高拟合余量或重新拟合 `baseOffset`，但那会改变纯 R 平移合同和报告数值；
当前语义要求调用方检查每次 `shiftSetback` 的 `ok` 与 `violations`。

## 文件

| 文件 | 作用 |
|---|---|
| `adapter.mjs` | `placeStreet`、`shiftSetback`、帧校验、包围盒/折线净空 |
| `sample-road.mjs` | master `circuitRoad` 的只读副本、fixture/直线测试道路 |
| `fixed-source-contract.mjs` | 固定源哈希、mesh 摘要、合同核对 |
| `capture-fixed-sample.mjs` | 从当前 `circuit.js` 重录 280–720 m 帧样本，并写入 git `base_ref` |
| `report-coast.mjs` | 生成 320–680 m CPU 放置与净空报告 |
| `test.mjs` | 25 项测试 |
| `fixed-source/` | 固定源 GLB、manifest、上游 adapter、合同、帧样本、许可 |
| `out/coast-320-680.json` | 当前海岸样段的 CPU 放置与净空结果 |

## 运行

```sh
cd authoring/coast-street-placement
node --test test.mjs
node report-coast.mjs
```

仅当 `circuit.js` 有意变化时重录帧样本（先把改动提交，使已跟踪工作区干净；
也可用 `--base-ref <rev>` 指定提交）：

```sh
node capture-fixed-sample.mjs
```

若改动影响海岸线形（例如 `COAST_POINTS`、`TRACK_SCALE` 或采样/插值），还要先
同步 `sample-road.mjs` 里的 `COAST_POINTS`/`coastRoad` 手写只读副本——它不是
自动生成的。`capture-fixed-sample.mjs` 会在每个 station 比较 live `circuitRoad`
与该副本，发现漂移就抛 `Replica ... drift`；不更新副本时 capture 只适用于与
海岸线形无关的 `circuit.js` 变化。`test.mjs` 也会同时核对 fixture、副本与
master 三者逐位一致，副本未对齐会直接失败。

重录会改变 `fixed-source/coast-280-720.frames.json` 的 sha256 和字节数，需要
同步 `fixed-source/contract.json` 里 `source.files.coast_frame_sample` 的
`path`（如改名）、`sha256` 和 `bytes`，然后重跑 `node report-coast.mjs`，让
`out/coast-320-680.json` 的 `circuitFrameSampleSha256`/`circuitFrameSample`
与样本同步，最后重跑 `node --test test.mjs`。`base_ref` 由采集脚本写入，不要
手工保留旧值。

## 当前 CPU 结果

`out/coast-320-680.json` 覆盖 320–680 m，每 40 m 一个站位、左右两侧共 20 行，
每行三栋房。setback 4 m 的 20 行全部满足道路净空 ≥12 m；由 `shiftSetback`
得到的 6 m 行全部满足 ≥14 m，旋转/尺寸逐元素保持。

这些 `ok`/`violations`/净空数字只表示**到道路中心折线的净空**，不检查房屋
之间。用 `out/coast-320-680.json` 的矩阵变换实际 GLB 顶点复核：同一行三栋房
在 setback 4 m 和 6 m 下各有 12/20 行的 world XZ 包围盒相交；按实际网格 XZ
凸包算，4 m 有 8/20 行、6 m 有 9/20 行相交。最差的是 `centerS=600`、`side=-1`
的 house-g 与 house-m：凸包 SAT 穿透约 5.25 m（4 m）/5.50 m（6 m），两栋高度
区间也重叠（约 2.00–6.61 m 与 2.00–6.43 m），实际网格分别有 217/263 对三角面
相交。原因是同一行 ±10 m 中心线站位加共享横向偏移，在急弯处会压缩排距。
样例行是 40 m 间隔的独立取样，不是连续场景布局；这些矩阵也不代表已采用到
游戏。若要把这些行作为布局使用，必须先做同排（及相邻行）房屋凸包/AABB
相交检查，或调整站位/间距。

640 行 house-m（station 650）与 680 行 house-a（station 670）只在 `side=+1`
时 world XZ 包围盒相交：setback 4 m 时两栋无三角面相交，实际网格 3D 最小距离
约 0.856 m；setback 6 m 时 XZ 投影凸包距离为 0、SAT 穿透约 0.231 m，高度区间
也重叠，实际网格三角面已经相交（不再有正间距；仅按顶点/棱边距离约 0.011 m）。
`side=-1` 的对应行包围盒不相交。

| 项 | 结果 |
|---|---|
| setback 4 m 最小道路净空 | 12.010 m |
| setback 6 m 最小道路净空 | 14.005 m |
| 4 m / 6 m 道路净空违规行 | 0 / 0 |
| 6 m 旋转保持 | 20/20 行 |
| 网格 sha256 | 放置前后不变 |

逐栋净空按 280–720 m 全部 1 m 折线取真实最小值；例如 680 m、side +1、
setback 6 m 的 house-a 为 14.150 m（最近段在 station 663）。

## 未验证与边界

- 未接入 `scenery.js`、渲染、碰撞、地图或默认入口；没有游戏截图、GPU 或浏览器验证，
  也不声称场景已采用该放置。
- `clearance`/`ok`/`violations` 只覆盖房屋 world XZ 包围盒到道路中心折线的
  净空，不检查同排或相邻行房屋之间是否相交。按 `out/coast-320-680.json` 复核，
  同排三栋的 world XZ 包围盒在 4 m 和 6 m 下各有 12/20 行相交，实际网格 XZ
  凸包在 4 m 有 8/20 行、6 m 有 9/20 行相交；最差 `600/-1` 的 house-g 与
  house-m 凸包穿透约 5.25 m/5.50 m，且实际三角面已经穿插。这些行若作为布局
  使用，必须先增加同排/相邻行相交检查或调整站位/间距。净空也不含地形起伏、
  路肩宽度或建筑互相遮挡；包围盒口径本身偏保守。
- 只验证固定源这三栋标准件；其它 part 组合需自行核对 pivot 与门朝向假设。
