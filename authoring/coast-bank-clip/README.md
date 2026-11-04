# 标准路段外岸保护裁切（CPU 适配）

把固定源公路标准件 `road.glb` 已知的近邻岸坡重叠缺口做成独立 CPU 适配，供后续场景接入。本目录只提供 helper、固定源导入脚本、测试、最小 CPU 样本和说明；不修改 `engine`/`render`/`scenery`/`circuit`/`coastal-space`、原 `asset-pipeline/content-set`、`road-materials`、capture、smoke、build 或默认场景，也不改当前空间候选与截图基线。

固定源：仓库对象库中的 commit `ab2655930996b9d81f5fb35469669c72b7be28e1`，`asset-pipeline/content-set/`。道路标准件原长 24 m、沥青宽 16 m、连岸 44 m；本目录只补源说明里明确未做的近邻路段保护裁切，不重做原曲线映射或标准件。

## 固定源与侧带

`build-sideband.py` 先按固定 commit 抽取 content-set，再用原 `build.py` 重放到临时目录，要求 `outputs/base/road.glb` 字节完全一致（SHA-256 `9eb6a584…ebd9a`，276056 字节，2202 三角），然后才生成侧带。生成时只包装 `build.py::make_road` 的 `levels` 循环对 `Producer.quad` 的调用；原导入道路仍走 `Producer.triangle`，标线归 `marking`，均不进入外岸。

侧带 `bank-triangles.json` 记录：

- 固定 commit，以及 `build.py`、`recipe.json`、`adapter.mjs`、源 `roadStraight.glb`、输出 `road.glb` 的路径与 SHA-256；
- 重放结论 `byteIdentical: true` 与输出哈希；
- 96 个外岸 quad、192 个外岸三角的逐项记录（循环顺序、稳定 id、side/segment/strip、family、family 内序号、原 GLB/adapter 三角索引）；
- 三角索引签名 `vertexIndexSignature`（对引用三角的三个 Uint32 顶点索引按顺序做 SHA-256）。

### 三角布局

| primitive（`Producer.output` 的 sorted family 顺序） | 三角数 | 外岸 |
|---|---:|---|
| `asphalt` | 162 | 否 |
| `foliage` | 420（324 源肩 + 96 外岸） | 局部 324–419，adapter 全局 486–581 |
| `gravel` | 972 | 否 |
| `marking` | 8 | 否 |
| `soil` | 96（全部外岸） | adapter 全局 1562–1657 |
| 合计 | 1658 | 192 |

侧带记录按 `levels` 循环顺序（先 `side=-1` 后 `side=1`，各 12 个 x 段 × 4 条带）写入，但保留的是映射后的 adapter 三角索引；因此 `triangles` 数组不是数值升序。`records` 与 `triangles` 一一对应。

源哈希漂移、侧带索引错配、签名不符、重建输出与固定输出不一致都会拒收。`clip.mjs` 同时比对内置固定哈希和固定签名，避免接受了“索引被改但签名重算过”的侧带。

## 接口

```js
import {clipOuterBank, verifyBankSideband} from './clip.mjs';

const {parts: clipped, stats} = clipOuterBank(parts, bankTriangleIds, protectedCorridors);
```

- `parts`：原 `adapter.mjs::decodeStandardPart` 的输出，`sourceData` 为 stride 10（位置/法线/色/旧 gloss 槽），`sourceIndices` 为三角索引。可选地先经原 `bendRoadParts` 弯折。
- `bankTriangleIds`：上述哈希绑定侧带对象。
- `protectedCorridors`：`{id, points: [[x, z], ...], halfWidth}` 数组。`halfWidth` 省略时默认 8；必须为有限正数。`id` 必须为非空且不重复的稳定字符串。坐标必须与传入的 `parts` 处于同一坐标系：helper 把每个顶点按 `sourceData` 局部位置加 `part.pivot` 后，再与走廊在 XZ 上比较。
  - 按下面建议顺序先经 `bendRoadParts` 弯折时，走廊用**弯折后的世界 XZ**（`bendRoadParts` 返回 `pivot: [0, 0, 0]`，顶点已写成世界坐标）。
  - 不 bend 时，走廊用标准件局部坐标加 `part.pivot`，也就是模块在场景中未经弯折的放置坐标。固定路段 `road-and-graded-shoulder` 的 `part.pivot` 为 `[0, 0, 0]`，所以 `sample.mjs` 和 `sample-corridors.json` 直接使用局部 XZ；它们属于未 bend 的用法。

每条折线相邻两点构成一条宽 `2 * halfWidth` 的矩形带：

- 不做端帽、不做圆角延伸；段端在两点处垂直截断；
- 相邻矩形带允许重叠；按 `id` 码元序、段号升序依次处理，结果与传入数组顺序无关；
- 零长段、非有限坐标、非法 `halfWidth`、重复 `id`、点数不足都拒绝；
- 与三角求差是精确的 XZ 凸多边形差集，不是采样点距离，也不是包围盒或颜色猜测。

`clipOuterBank` 只处理侧带列出的 192 个外岸三角：

- 其余三角原样保留顶点 id 和顺序，所以沥青、标线、护栏、非岸肩部逐字节不变；未相交时整个 part 逐字节不变。
- 相交三角在 XZ 平面按矩形带差集切成凸片，再从凸片三角化；新边界顶点的位置、法线、颜色按原三角平面的重心坐标插值，法线归一化。
- 保留原三角绕序；输出检查有限值、非退化面积和“面法线与顶点法线同向”，拒绝反向面。
- 只移除/细分，绝不移动原顶点、扩赛道或外移模型。输入 `parts` 不被修改；返回新 `parts` 数组和 `stats`。

建议接入顺序（侧带绑定 bend 前原 GLB，原 `bendRoadParts` 保持三角顺序）：

1. `decodeStandardPart(roadGlb)`；
2. `verifyBankSideband(parts, sideband)`（可选，`clipOuterBank` 内部也会校验）；
3. `bendRoadParts(parts, sample, centerS)`；
4. `clipOuterBank(bentParts, sideband, protectedCorridors)`。

调用者必须自行排除当前 24 m 标准段和前后紧邻标准段，只传其他近邻段。本 helper 不会根据名字或位置猜哪些走廊是当前段。

走廊与 `parts` 的坐标系不一致时不会报错：矩形可能整体落空（`stats.affectedTriangles` 为 0，所有 part 原样返回），也可能切到错误区域。接入后先核对 `stats.affectedTriangles`、`stats.removedTriangles` 和 `stats.partsTouched` 是否命中预期外岸，再继续。

`stats` 包含 `corridors`、`corridorSegments`、`bankTriangles`、`affectedTriangles`、`unchangedBankTriangles`、`removedTriangles`、`clippedTriangles`、`addedTriangles`、`inputBankArea`、`outputBankArea`、`partsTouched`。面积是 XZ 投影面积，仅用于 CPU 差异核对。

## 检查

```sh
# 固定源重放 + 侧带一致性（需要 git 对象、Python 3 和 Pillow）
python3 authoring/coast-bank-clip/build-sideband.py --check

# 四类真实 road.glb 场景、坏输入/缺分区、bend 顺序、半宽二改
node --test authoring/coast-bank-clip/clip.test.mjs

# 最小 CPU 样本（读取固定对象库，输出统计，不写文件）
node authoring/coast-bank-clip/sample.mjs
```

`sample.mjs` 不调用 `bendRoadParts`，样例走廊按固定路段自身的局部 XZ 给出；把该样例用于已弯折的模块时，走廊必须改成弯折后的世界坐标。

`build-sideband.py` 不带 `--check` 时重写 `bank-triangles.json`；写出固定为 UTF-8/LF（Windows 上也不转换换行），`--check` 按字节比较。正文的固定哈希和签名常量在脚本与 `clip.mjs` 中各有一份，漂移会显式失败。

测试和样本通过 `git show <commit>:<path>` 读取固定对象，不把 road.glb/adapter 复制进本目录。若本机仓库没有该 commit 对象，先从公开远端取到含该 commit 的分支（如 `relay/b-sr-content-set-001`）再运行；缺对象时脚本会报明确错误，不会退回到当前 master 的其它道路。

`clip.test.mjs` 覆盖：

1. **无相交**：走廊远离岸坡；所有 part 的 `sourceData`/`sourceIndices` 与输入逐字节相同，输入未被修改。
2. **回头弯近邻**：U 形走廊同时穿过两侧岸坡；外岸三角被移除/细分，沥青、标线、护栏和非岸肩部保持原三角；输出有限、无零面积、无反向面；裁切后每个外岸派生三角与每条保护带的 XZ 面积交叠为零（按三角与矩形的精确凸多边形交计算，不用重心或采样点），并含三个负例：完全未裁切的原路段、只恢复一个原重叠三角的局部残留、以及重心在保护带外但边跨入带内的薄片，都必须被该断言拒绝；非有限输出顶点也显式拒绝；重复运行结果相同。
3. **边界切线**：保护矩形边界与外岸三角边重合时，交集面积为零，三角保持原样，不产生退化薄片。
4. **坏帧/缺分区**：零长段、NaN/Infinity、非法半宽、重复 id、点不足拒绝；侧带越界、错三角、缺记录、缺 part、计数漂移、源哈希/重放哈希漂移、索引重排拒绝；`bendRoadParts` 的非法 frame 在裁切前拒绝。
5. **bend 顺序**：原 `bendRoadParts` 前后 `sourceIndices` 逐字节相同，侧带签名仍通过，bend 后可裁切。
6. **半宽 8 → 8.5 m**：两次裁切都只改外岸；非岸沥青/标线/护栏保持；8.5 m 的外岸剩余面积更小；两次结果的外岸派生三角与保护带的面积交叠都为零；模块端缝（`x = ±12`）与海侧边（`z = ±22`）三角在该测试走廊下保持原样。

实际运行结果：7 个测试全部通过；固定源重放与 `outputs/base/road.glb` 字节一致。`sample.mjs` 的样例走廊从 1658 个三角中保留 1614 个，192 个外岸三角中 80 个受影响（56 个整块移除、24 个细分出 36 个新三角），外岸 XZ 面积 499.696 → 358.565 m²。

## 半宽 8 → 8.5 m 的逐项影响

- 只有外岸三角的裁切边界向岸内侧多推 0.5 m；外岸剩余面积只会减少，不会增加。
- 沥青、标线、护栏和非岸肩部不参与裁切，顶点 id 与顺序不变。
- 新边界点由原三角平面插值，仍与原三角形共面；未被切到的岸坡三角保持原顶点，因此与相邻未裁切三角的公共边不变。
- 模块端接缝：测试走廊限制在 `x ∈ [-4, 4]`，`x = ±12` 的接缝三角在 8 和 8.5 m 下都保留。若调用者把走廊延伸到接缝，裁切只会切掉该处外岸并留下开放边，本 helper 不补端帽；按任务约定调用者应排除当前段和前后紧邻标准段。
- 海面相接：外岸最外条带为 `|z| ∈ [19.8, 22]`；测试走廊在 8.5 m 时最远到 `|z| = 19.5`，因此 `|z| = 22` 的海侧边及其相邻条带在两种半宽下都不变。若走廊跨过海侧边，裁切会在岸坡上留下开放边界，不生成侧墙或封口；是否由海水/地形/邻段遮挡属于后续接入验收，本卡不声明已处理。

## 边界与未验项

- 仅本机后台命令行、CPU 与文件处理；未开浏览器/GUI/GPU，未接 Three、未改正式场景，未生成新 3D 资产。
- 未验证实机岸坡外观、接缝遮挡、海水衔接、碰撞或驾驶；这些需要后续场景接入和人工/实机验收，不能由本文的 CPU 测试替代。
- 侧带固定在该 commit 的 `build.py`/`recipe.json`/`road.glb`；换源、改配方或改标准件需要重新生成侧带并更新固定哈希与签名。源哈希或索引对不上时脚本和 helper 都会拒收，不静默降级。
- 本目录没有引入新素材；固定 content-set 的来源与许可见原目录的 `sources.json` 和 license 文件（Kenney CC0）。
