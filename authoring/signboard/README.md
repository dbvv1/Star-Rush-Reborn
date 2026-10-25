# 路边转向牌：作者源与局部二改

离线候选，尚未接入生产场景。取正式 `32b2d3a` 的原创 `signBoard` 与 engine 几何，导出前核固定摘要；不使用外部素材或旧壁画。

- baseline：原粉色箭条、原半径。
- navy-v1：只把箭条改为深蓝 `#415873`，几何、面板与立杆不变。
- navy-v2：在已看过的 v1 作者图上，只把箭条半径从 `.055` 加至 `.075`，保留颜色和拓扑；希望缩小显示时轮廓更实。左右方向一起检查。

```sh
node authoring/signboard/export.mjs
blender --background --factory-startup --threads 2 --python-exit-code 1 --python authoring/signboard/render.py
blender --background outputs/signboard-author/comparison.blend --threads 2 --python-exit-code 1 --python authoring/signboard/verify.py
```

Node 24、Blender 4.3.2；产物仅在被忽略的 `outputs/signboard-author/`，不提交截图或 `.blend`。导出器验证索引与有限值、v1 只改色、v2 只改箭条几何且面板／立杆不变；保存后重开验证顶点、索引、颜色和对象身份。六个候选各 482 顶点、524 三角形，数量不增加。

CPU 作者图采用固定相机与粗糙材质近似，不是游戏截图，也不复刻 Three toon、雾或驾驶镜头。已目视深蓝比原粉箭条分离更明显，v2 轮廓更厚；此结论仅限作者图。生产参数、碰撞、赛道和驾驶均未修改。下一步仍须在可运行的游戏浏览器里以实际距离、运动、光照看同一局部候选后决定是否接入；不能据离线图宣布 brief 的完整实机制作链完成。
