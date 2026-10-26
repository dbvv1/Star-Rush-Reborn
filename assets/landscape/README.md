# 海岸远景岩体

只用于 `/road` 汐见海岸远景；默认街机入口和另外两条赛道继续原山体。两个岩体合入现有 landscape 网格，Three 与 Canvas 读取同一组几何，不增加运行时模型下载或纹理。

- 来源：[Kenney Nature Kit 2.1](https://kenney.nl/assets/nature-kit)，作者 Kenney。
- 许可：[CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)，原包许可证见 [LICENSE.txt](LICENSE.txt)。
- 源件（仅统一 LF 行尾并去除行尾空白，几何内容不改）：`source/rock_largeA.obj`、`source/rock_tallB.obj`。仅取形状；不用原 MTL／贴图，颜色由 `scenery.js::coastalBackdrop` 指定。
- 官方包 SHA-256：`fa7974a0d342bfe63c38664ba9f8ec1a4aab8ea25f099bdc56870e33588c4d9d`。仓库两个 OBJ 的固定哈希与生成一致性由 `tests/coastal-landscape.test.mjs` 检查。

## 重建与修改

在仓库根运行 `python3 assets/landscape/convert.py`，生成 `coastal-rocks.js`。转换仅保留三角面与位置，归一为宽／深各 1、底部 y=0、最高 y=1，保源绕序；两个源件都保留全部非退化三角面（largeA 80 面、tallB 172 面）。运行时按面重算法线，将朝上的高处表面着草色，不另叠盖板。改变源件后应重新检查法线、轮廓、来源哈希和实际镜头，不直接放宽测试。

布局在 `scenery.js::coastalBackdrop`：较近的低岬角与较冷的远岛分层，保留海平线缺口；尺寸是完整宽／高／深，按赛道长短轴拉开距离，largeA 脚部倒角埋入海面以下、tallB 底部落在海面以下。合并几何不参与赛道、碰撞或驾驶，灯光、阴影图和镜头沿用原配置。

官方包内原始 OBJ SHA-256：largeA 为 `60e4896f0bb0077ce820aa842e48a4f50d089a0d39e38d56cbf1bd7286882136`，tallB 为 `990a5f9641a350369bd1f8477476c3152fd4867db48bde91612958f8fd6e39cf`。
