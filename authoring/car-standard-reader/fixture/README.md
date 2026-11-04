# 固定车辆标准件夹具

本目录是 `authoring/car-standard-reader/run.mjs` 的只读输入副本，原始字节来自公开仓库
`dbvv1/Star-Rush-Reborn` 的提交 `ab2655930996b9d81f5fb35469669c72b7be28e1`
（分支 `relay/b-sr-content-set-001`），未做任何修改。

| 文件 | 提交内路径 | SHA-256 |
|---|---|---|
| `car.glb` | `asset-pipeline/content-set/outputs/base/car.glb` | `b822c2da8cb6fd1ef1f2f012fe308cb470e4dcf8c4fcf4a519217c44068cde21` |
| `manifest.json` | `asset-pipeline/content-set/outputs/base/manifest.json` | `3a431f8780c716b2f94803e8652f24a309c37943e6432986a9876f97d4c75c80` |
| `adapter.mjs` | `asset-pipeline/content-set/adapter.mjs` | `31a9e59f476ba705382731b4d91a1d51bea252f00a05590b20ebd9c76b363299` |

重建方式（在仓库根执行）：

```sh
git show ab2655930996b9d81f5fb35469669c72b7be28e1:asset-pipeline/content-set/outputs/base/car.glb > car.glb
git show ab2655930996b9d81f5fb35469669c72b7be28e1:asset-pipeline/content-set/outputs/base/manifest.json > manifest.json
git show ab2655930996b9d81f5fb35469669c72b7be28e1:asset-pipeline/content-set/adapter.mjs > adapter.mjs
```

`adapter.mjs` 与 `car.glb` 只用于本次离线 CPU 接线核查；不是新的生产适配器。
`car.glb` 的车源为 Kenney Car Kit 3.1（CC0-1.0，<https://kenney.nl/assets/car-kit>），
来源与许可见固定提交的 `asset-pipeline/content-set/sources.json` 与
`source/car/License.txt`；本批标准件由该源经固定 recipe 重建，未引入新的受限素材。
