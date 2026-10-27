# 固定源景观：海岸岩体与训练场低植被

海岸岩体只用于公路模式（`/` 与 `/road`） 汐见海岸远景；`/legacy` 街机入口和另外两条赛道继续原山体。两个岩体合入现有 landscape 网格，Three 与 Canvas 读取同一组几何，不增加运行时模型下载或纹理。

- 来源：[Kenney Nature Kit 2.1](https://kenney.nl/assets/nature-kit)，作者 Kenney。
- 许可：[CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)，原包许可证见 [LICENSE.txt](LICENSE.txt)。
- 源件（仅统一 LF 行尾并去除行尾空白，几何内容不改）：`source/rock_largeA.obj`、`source/rock_tallB.obj`。仅取形状；不用原 MTL／贴图，颜色由 `scenery.js::coastalBackdrop` 指定。
- 官方包 SHA-256：`fa7974a0d342bfe63c38664ba9f8ec1a4aab8ea25f099bdc56870e33588c4d9d`。仓库两个 OBJ 的固定哈希与生成一致性由 `tests/coastal-landscape.test.mjs` 检查。

## 重建与修改

在仓库根运行 `python3 assets/landscape/convert.py`，生成 `coastal-rocks.js`。转换仅保留三角面与位置，归一为宽／深各 1、底部 y=0、最高 y=1，保源绕序；两个源件都保留全部非退化三角面（largeA 80 面、tallB 172 面）。运行时按面重算法线，将朝上的高处表面着草色，不另叠盖板。改变源件后应重新检查法线、轮廓、来源哈希和实际镜头，不直接放宽测试。

布局在 `scenery.js::coastalBackdrop`：较近的低岬角与较冷的远岛分层，保留海平线缺口；尺寸是完整宽／高／深，按赛道长短轴拉开距离，largeA 脚部倒角埋入海面以下、tallB 底部落在海面以下。合并几何不参与赛道、碰撞或驾驶，灯光、阴影图和镜头沿用原配置。

官方包内原始 OBJ SHA-256：largeA 为 `60e4896f0bb0077ce820aa842e48a4f50d089a0d39e38d56cbf1bd7286882136`，tallB 为 `990a5f9641a350369bd1f8477476c3152fd4867db48bde91612958f8fd6e39cf`。

## 训练场低植被

公路模式的星跃训练场在原樱树和护栏外添加间断的低植物簇，保留原山体、建筑、道路、光照和镜头。花见坂、汐见海岸与全部街机场景不变。

同一 Kenney Nature Kit 2.1 官方包中的 `plant_bushDetailed.obj` 提供分枝叶片，保留全部 104 个非退化三角面；不用原贴图或 MTL。比较包内 `tree_default`、`tree_detailed`、`tree_oak`、`tree_plateau` 等实际预览后，没有替换原樱树：这些源树的整块树冠不能解决当前重复球冠的问题。

- 源件只统一 LF、去行尾空白和末尾空行，保留最后一个换行；几何未修改。官方原始字节 SHA-256 为 `f657029e99a52f6933389c8d445699d352102990af574cfe190f4ec746de0b7d`，仓库源件为 `be40d35b392db76f68c7235a1c2ba0452a37fe441d93929ef42918bdb91f4a11`。
- 重建仍运行 `python3 assets/landscape/convert.py`。既有海岸数组保持不变，生成文件附加 `trainingVergeData`，沿现有打包入口读取，不新增模型加载器。原 OBJ 可直接导入 DCC；转换标准化坐标、保留索引与绕序，运行时重算法线。
- `scenery.js::trainingVerge` 按道路坐标排列两组间断植物，中心距护栏至少约 3.8 米，最高约 0.7 米，不挡路标、不参与碰撞。相对第一版将植物缩至 65%、收紧组内间距，避免正常驾驶尺度下的巨叶感；源件与原道具随机消费保持不变。
- 每个训练场 chunk 合并一份植物网格；整个赛道 23 份，由既有 circuit 缓存保存。共 46,800 个植物三角面。路版脚本增加 3,101 字节、gzip 增加 1,102 字节，没有新增纹理；目标硬件帧率仍需实测。

`tests/training-verge.test.mjs` 检查来源哈希、缺件／退化面拒绝、重建一致性、植物净空、原道具与随机流，以及全部六种实际赛道／驾驶组合的原景观字节。
