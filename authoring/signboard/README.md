# 路边转向牌：作者源与局部二改

取正式 `32b2d3a` 的原创 `signBoard` 与 engine 几何，导出前核固定摘要；不使用外部素材或旧壁画。候选参数现由 [assets/signboard/styles.json](../../assets/signboard/styles.json) 供离线导出和正式构建共同消费，`STAR_RUSH_SIGNBOARD_VARIANT=navy-v2` 可接入原场景转向牌；默认 baseline 不变。

- baseline：原粉色箭条、原半径。
- navy-v1：只把箭条改为深蓝 `#415873`，几何、面板与立杆不变。
- navy-v2：在已看过的 v1 作者图上，只把箭条半径从 `.055` 加至 `.075`，保留颜色和拓扑；希望缩小显示时轮廓更实。左右方向一起检查。

```sh
node authoring/signboard/export.mjs
blender --background --factory-startup --threads 2 --python-exit-code 1 --python authoring/signboard/render.py
blender --background outputs/signboard-author/comparison.blend --threads 2 --python-exit-code 1 --python authoring/signboard/verify.py
```

Node 24、Blender 4.3.2；产物仅在被忽略的 `outputs/signboard-author/`，不提交截图或 `.blend`。导出器验证索引与有限值、v1 只改色、v2 只改箭条几何且面板／立杆不变；保存后重开验证顶点、索引、颜色和对象身份。六个候选各 482 顶点、524 三角形，数量不增加。

CPU 作者图采用固定相机与粗糙材质近似，不是游戏截图，也不复刻 Three toon、雾或驾驶镜头。已目视深蓝比原粉箭条分离更明显，v2 轮廓更厚；此结论仅限作者图。默认画面、碰撞、赛道和驾驶未修改，候选仅通过显式构建开关启用。下一步仍须在可运行的游戏浏览器里以实际距离、运动、光照看同一局部候选后决定是否默认启用；不能据离线图宣布 brief 的完整实机制作链完成。

## 定位真实场景消费者

`node authoring/signboard/consumer.mjs` 在离线 Node VM 执行摘要锁定的正式 `chunkMesh → decorateChunk → scenicProp`，只追加对象身份，不修改几何或放置规则；沿正式固定种子遍历三条赛道。每块牌的实际 Float32 网格与原始 `signBoard` 逐项比对，世界矩阵、左右方向和赛道距离写到忽略提交的 `outputs/signboard-author/consumers.json`。回归：`node --test authoring/signboard/consumer.test.mjs`。

| 赛道 | 左／右数量 | 第一块牌的赛道距离 |
|---|---|---|
| 汐见海岸 | 12／7 | 405 m，chunk 10，左转 |
| 花见坂 | 8／3 | 525 m，chunk 13，左转 |
| 星跃训练场 | 12／0 | 245 m，chunk 6，左转 |

这些是原场景对象定位，不是候选已接入或玩家视线可见的证明。此前场景作者工具只取前六个 chunk，不含这些牌；开局截图也不能代替此局部的实机比较。后续验收须到对应路段，另查运动中的辨识度、遮挡与方向；不因训练场没有右转牌就删除右向候选。
