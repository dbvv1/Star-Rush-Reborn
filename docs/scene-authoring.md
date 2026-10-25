# 场景作者工具：原几何的局部二改

`tests/scene-authoring.mjs` / `.py` 把海岸赛道的一段原场景导入 Blender，验证“作者源 → 保存重开 → 局部修改 → 映射回源参数”这条链。它是离线工具，不进入游戏构建和发布。

```bash
node --max-old-space-size=400 tests/scene-authoring.test.mjs --blender
node tests/scene-authoring.mjs baseline
node tests/scene-authoring.mjs candidate
blender --background --factory-startup --threads 2 --python-exit-code 1 --python tests/scene-authoring.py -- create
blender --background outputs/scene-authoring/baseline.blend --threads 2 --python-exit-code 1 --python tests/scene-authoring.py -- verify
blender --background outputs/scene-authoring/baseline.blend --threads 2 --python-exit-code 1 --python tests/scene-authoring.py -- render
blender --background outputs/scene-authoring/baseline.blend --threads 2 --python-exit-code 1 --python tests/scene-authoring.py -- revise
```

逐条执行，不并发运行 Blender。去掉第一条的 `--blender` 只检查源文件和 JS 提取映射。需要已有的 Node 24 与 Blender 4.3.2，不下载资源；产物写入被忽略的 `outputs/scene-authoring/`。

## 输入与身份

- 输入锁定提交 [07e1839](https://github.com/dbvv1/Star-Rush-Reborn/tree/07e18395bff8a172f7d552ccae0f6cefe7458fce) 的六个源文件摘要，不一致或缺失时拒绝执行。
- 提取 `chunkMesh` 的 0–240m 六块（60 个对象、17 个共享 mesh），沿用海岸原 seed 和随机消费顺序。对象 ID 由 `chunk/key/s/l` 派生：缩放可以保住身份，移动 `s/l` 不保证。
- 保存重开后核对位置、索引、顶点色、mesh 绑定和变换；法线由 Blender 重算。

## 渲染参数

CPU、640×360、8 samples、seed 0、2 threads、关闭降噪。相机取原 `sceneFrame` 静止状态，FOV 60、16:9。材质用粗糙 Principled 近似色块，没有复刻 Three toon 着色、天空雾、车和玩法实体，所以画面是作者参考，不是游戏截图。

## 已做的一次二改

把 `coast/chunk/2/cherry0/90/-12.5` 的缩放从 0.92 改为 0.65，其余 59 个对象不变，变化能映射回原 `place` 参数。85m 视点露出更多站台，60m 视点差别小。证据不足以改生产场景，没有采用。
