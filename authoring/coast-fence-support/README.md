# 海岸围栏刚体支撑放置（保守候选）

在**原完整海岸地形**上为 `assets/coast-verge/verge.glb` 里的两根长围栏寻找可安全落地的刚体位置。
只做 Node.js／CPU 候选搜索与文件报告：不接 `scenery.js`、渲染、碰撞、相机、默认入口，
不修改地形、已有灌木、街屋或源资源，也不产生截图、GPU 或浏览器验证。

这是**保守拒绝**方案：整块足印只按最小地形高度落地，高差超过 0.18 m、落水、
道路／街屋／已有物件净空不足或越界的位置直接拒绝并记录原因。它不声称任意坡面都能放，
也不通过拉伸、倾斜、翻面或改地形来救活候选。

## 固定源

| 项 | 值 |
|---|---|
| 文件 | `assets/coast-verge/verge.glb` |
| SHA-256 | `0479af55bd3bcc937739aa49648ce4ecc41d739279d548af28ead8df7b433d15` |
| 字节数 | 150500 |
| 许可 | 植物几何见 `assets/coast-verge/LICENSE.txt`；两根 Suburban 围栏见 `assets/coast-verge/FENCE-LICENSE.txt`（CC0） |

源文件同时含六簇灌木和两根围栏。本目录只消费 `fence--4.8` / `fence-4.8` 两个 mesh
（各 852 顶点、284 三角形，pivot 均为 `[0,0,0]`，底部 `y=0`），六簇灌木不在本单元范围，
源文件不复制、不改写、不重传。解码复用
`authoring/coast-street-placement/fixed-source/upstream-adapter.mjs` 的
`decodeStandardPart`；地形范围复用根目录 `coast-verge-runtime.mjs` 的
`vergeTerrainRange`，没有第二套 decoder 或地形采样。

## 接口

```js
planFenceSupports(parts, model, sampleRoad, samples, rows)
  -> {schema, matrixAppliesTo, constants, parts, rows, accepted, rejected, summary}
```

- `parts`：`decodeFenceParts(bytes)` 解析出的两个围栏 part。函数校验恰好两根、名称唯一、
  `sourceData` 为 stride 10 的有限顶点、`sourceIndices` 为三角形索引。
- `model`：完整海岸模型，至少含 `bounds`（`x0/x1/z0/z1/step`）、`vertices`、
  `street.instances[].placement.bbox`、`verge.instances[].bbox`。报告与测试用
  `report.mjs` 的 `loadCoastalModel()` 在裸 VM 中只读加载现有游戏脚本构造真实模型。
- `sampleRoad(s)`：当前 `circuitRoad(s)`，每行只在 `s` 查询一次；坏帧抛 `invalid_frame`。
- `samples`：真实道路采样帧数组，至少两帧；每对相邻帧的线段都参与净空检查。
- `rows`：`{s, side, setback}` 数组。`s` 为有限米制站位，`side` 只能是 `-1`/`+1`，
  `setback` 为有限非负米。相同 `s|side` 重复、`NaN`/无穷、非法 side 或负 setback
  一律在放置前抛 `FenceSupportError`（`invalid_center` / `invalid_side` /
  `invalid_setback` / `invalid_row` / `invalid_rows` / `duplicate_row`），
  不会静默截断后继续生成半套场景。

最小可运行示例。把下面这段保存成**本目录**（`authoring/coast-fence-support/`）下的
`.mjs` 文件，例如 `snippet.mjs`，再从本目录执行 `node snippet.mjs`：

```js
import fs from 'node:fs';
import {decodeFenceParts, planFenceSupports} from './plan.mjs';
import {loadCoastalModel} from './report.mjs';

// 用 import.meta.url 解析源文件，与当前工作目录无关。
const source = new URL('../../assets/coast-verge/verge.glb', import.meta.url);
const {model, sampleRoad, samples} = loadCoastalModel();
const parts = decodeFenceParts(new Uint8Array(fs.readFileSync(source)));
const result = planFenceSupports(parts, model, sampleRoad, samples, [
  {s: 320, side: -1, setback: 24},
]);
console.log(result.summary);
```

`loadCoastalModel()` 返回真实完整海岸模型和它的道路帧／采样源（`{model, sampleRoad, samples}`）；
`sampleRoad` 就是当前 `circuitRoad(s)`，`samples` 就是实际 `circuitSamples`，不需要手工拼接。
`./plan.mjs`、`./report.mjs` 的导入按模块自身位置解析，但示例文件必须放在本目录才能真正解析到这两个模块。

### 刚体合同

每根围栏每行只应用一次 yaw + 平移，矩阵为列主序 4×4，直接作用于
`part.sourceData`（不再叠加 pivot，pivot 仅用于解释源坐标）：

- 本地 `+X` → `side*T`，本地 `+Z` → `side*R`，`+Y` 保持世界向上；
- 3×3 部分严格正交、行列式为 1，单位轴长不变，无缩放、拉伸、翻面或倾倒；
- 水平落点 = 该行道路帧 `p + side*setback*R`；
- 水平足印遍历**全部源顶点**（不是只取包围盒角点），垂直方向只整体平移：
  `bottom = min(足印覆盖地形单元顶点高度) - 0.02 m`，
  `matrix[13] = bottom - min(源顶点 y)`，因此底边恰好嵌入最低点 2 cm。

行按 `(s, side, 输入下标)` 稳定排序后逐行评估；同一行的两根围栏互相检查，
后续行还会检查此前**已接受**的围栏足印。整个结果不依赖 RNG 或时间，
同一输入连续两次 `JSON.stringify` 逐字节相同。

### 接受条件

按下面的顺序判定，先命中的原因写入 `rejected[].reason`／`detail`：

| 原因 | 条件 |
|---|---|
| `outside` | 变换后足印的 world XZ 超出 `model.bounds` |
| `road` | 足印到 `samples` 全部相邻道路线段的最短距离 `< 12 m` |
| `house` | 足印到 `model.street.instances` 全部街屋 world XZ 包围盒的最短距离 `< 1 m` |
| `water` | 整个足印覆盖单元的地形最低点 `< -0.65 m`（干地余量；实际海面顶为 -0.82 m） |
| `slope` | 整个足印覆盖单元的地形高差 `> 0.18 m` |
| `fence` | 到同行另一根围栏或此前已接受围栏的足印距离 `< 0.5 m` |
| `bush` | 到 `model.verge.instances` 已有灌木足印的距离 `< 0.5 m` |

距离与地形都用保守口径：足印是全部源顶点的 world XZ 包围盒，街屋／灌木用其已记录
包围盒，地形用 `vergeTerrainRange` 的整格取值（遍历足印接触的所有网格单元顶点）。
这些包围盒只会高估尺寸、低估净空，因此“接受”是安全方向的结论；越界、相交或无法
证明净空时宁拒绝，不删除、不移动任何旧物件。

返回值：

- `accepted[]`：`partId`、`row`、`inputIndex`、`station`、`matrix`、`bottom`、
  `terrain:{min,max}`、`clearance:{road,house,fence,bush}`、`bbox`；
- `rejected[]`：同样的 `partId`/`row`/`inputIndex`、`terrain`（能算时）、
  `clearance`（能算时）、`matrix:null`、`reason`、`detail`；
- `summary`：行数、每行 part 数、接受／拒绝数。

## 固定输入与当前结果

固定候选：真实 coast `s = 320,360,…,680`（10 个站位）× 双侧（20 行）× `setback = 24 m`，
共 40 个 part 候选。`report.mjs` 生成
`out/coast-fence-320-680.json`（含源 SHA、源 mesh 摘要、模型规模、逐项结果和原因）。

本次实际运行（CPU）：

| 项 | 结果 |
|---|---|
| 候选 part | 40 |
| 接受 | 16 |
| 拒绝 | 24：`house` 20、`slope` 4 |
| 接受行 | `side=-1` 的 320/360/440/480/520/560/600 行两根都接受；400/-1 与 640/+1 只接受一根；其余行两根都拒绝 |
| 接受部分最小道路净空 | 18.343 m |
| 接受部分最小街屋净空 | 4.795 m |
| 接受部分最小围栏间距 | 1.314 m |
| 接受部分最小灌木间距 | 1.168 m |
| 接受部分最大地形高差 | 0.170 m |
| 接受部分最低地形高度 | 0.056 m |

拒绝原因：`side=+1` 的 320–600 行以及 `640/-1`、`680/-1` 被已接受街屋挡下
（`house`，净空 0–0.503 m）；`400/-1`、`640/+1`、`680/+1` 的另外几根因整格地形
高差 0.239–0.502 m 被 `slope` 拒绝。
这不是“失败”：按当前阈值，这些位置确实不能安全落地。没有为了凑非空结果放宽阈值；
也没有道路、水面或灌木拒绝项。候选行是 40 m 间隔的独立取样，不是连续围栏布局，
接进场景前仍需使用方决定行间连接与最终构图。

## 运行

```sh
cd authoring/coast-fence-support
node --test test.mjs
node report.mjs
```

测试只用 Node.js／CPU，不启动 GPU、浏览器、桌面或拍摄槽。覆盖：固定源与两 fence 身份、
源字节不变、平地接受与刚体矩阵、`side=-1`、两次 JSON 逐字节一致、斜坡、阶差、水面、越界、
12 m 道路边界、街屋碰撞、灌木碰撞、围栏互撞、重复行、NaN／非法字段，以及真实源 + 实际
完整海岸模型的 20 行一次运行与模型／源不被修改。

## 未验证与边界

- 未接入 `scenery.js`、渲染、碰撞、地图或默认入口；没有场景截图、硬件 GPU、普通浏览器、
  完整 smoke、性能或非作者盲评。本目录结果不构成品质分、覆盖或默认可发布。
- 净空是 2D 足印包围盒口径，不是 3D 三角面碰撞；街屋／灌木包围盒偏保守，会拒绝一些
  实际有间隙的位置。地形只按整格顶点范围，不检查格内三角面的非平面起伏。
- 未生成行间连接段、支撑柱或连续围栏；固定行是候选搜索，不是最终布局。
- 只验证固定源这两根围栏；六簇灌木和其余源内容维持原状。
