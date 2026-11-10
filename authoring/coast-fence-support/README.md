# 海岸围栏刚体支持候选

目标：使既有 CC0 围栏无需拉伸也能检查落地条件。不是运行时接入或已验收内容。

从仓库根执行：

```sh
node authoring/coast-fence-support/report.mjs
node --test authoring/coast-fence-support/test.mjs
```

固定源、父版本和每个矩阵/拒绝原因在 report.json。20 行、两根围栏共 40 候选：原未证明版本接受 0；补齐下述包络后接受 13，27 项拒绝，20 项住宅净空失败，10 项地形高差失败，原因可重叠。没有为获得非零结果放宽条件。

做法：复用 decoder 和 vergeTerrainRange；矩阵直接乘 sourceData 局部坐标，列主序，源 XZ pivot 只应用一次，原局部最低 Y 归零后落到整足印网格最低高度减 0.02m。仅 yaw 与平移，无缩放/倾倒。保守世界 AABB 覆盖实际旋转足印，可能多拒绝，不能漏验。道路全段 12m、住宅 1m、灌木/已接收围栏/旧布景 0.5m；地形整格顶点高差不超过 0.18m，水位沿既有 -0.65m 门槛。

失败反例：只查中心或两端会漏掉中间阶差；NaN 净空比较可能悄悄通过，因此非法证据抛错。测试包含内点台阶、源 pivot 非零、边界与非法输入。

采用路径：dot-B 先补原装饰全环、所有随机位置/缩放组合的保守 swept AABB，将完整证明作为调用方契约。只有确实完成该证明才能传 model.fenceSceneryCoverage='complete-conservative' 和显式 fenceSceneryBounds 数组；标签自身不是证明。运行时 model 仍没有此证据；本离线报告已由下述生成器补齐。然后重新搜索并人工确认组织效果，才可接既有 coast 开关；不能删除旧物件促使通过。原拍摄槽恢复后还须硬件同机位图、普通浏览器门槛和非作者盲评。当前不改默认/模拟/运行时，不占拍摄槽、不部署，分数和内容覆盖不变。

验证：作者 CPU 7 项通过；完整根测试与构建另记录在交付回执。CPU 结果不代表画面、性能或玩家体验通过。

## 旧布景净空的可复核证明

`scenery-bounds.mjs` 锁定 scenery / engine / circuit 和 quad 的源哈希，限定 coast-reborn circuit、重建赛道和 47 个 chunk。旧 `decorateChunk` 的随机输入仅房屋横向位置 `16.5 + 2r` 与统一缩放 `0.9 + 0.25t`；距离 s、朝向、资产及分支不依赖随机值。每个世界顶点 XZ 是 r、t 的仿射函数，因此各坐标极值被四个二维角点包含。每栋房屋随机数独立也不影响逐物包络。强制保留 sceneryClear 可能过滤的物件，且不执行旁置替换，宁可多拒绝，不漏旧布景。全环 425 个物件包含站台、电车、鸟居、路灯、标牌等固定件。

Float32 矩阵可能舍入；固定实现的坐标小于 2000m、旋转与缩放系数小于 2、网格小于 30m，外扩 1mm 覆盖矩阵存储误差。超出坐标包络或源哈希改变直接拒绝，需重新证明。测试中间值只是回归，不代替上述仿射证明。

重新运行原 20 行 / 40 候选：**13 接受、27 拒绝**，住宅 20、坡差 10、旧布景 6，原因可重叠。源和矩阵详见 report.json；这 13 件仍只是离线摆放候选，未接游戏、未渲染、未计入内容覆盖，不是本机另分支所报 16 件。

```sh
node --test authoring/coast-fence-support/scenery-bounds.test.mjs authoring/coast-fence-support/test.mjs
node authoring/coast-fence-support/report.mjs
```
