# B-STAR-QUALITY-CAPTURE-20261106 两版海岸同机位拍摄

状态：**六条拍摄命令全部 exit 0，六个机位双拍与跨档门槛通过，比较器通过**。品质评分留给后台非作者盲评；本文件与其中任何图都不是“更好”的结论。

## 结果

- 12 张场景原图：前版 `811646e8` 与整层地形版 `7e87d4c3` 各 3 个固定机位，每机位 2 次独立上下文重复。
- 6 条 capture 命令（每档 3 条）实际退出码均为 0；每条 `report.passed=true`、`capturePassed=true`、`cleanExitBaseline=true`、`errors=[]`。
- 每机位两次独立运行的状态投影与 PNG 逐字节一致（`assertEquivalent(...,{pixels:true})`）。
- 全部图为 1280×720、WebGL2、SwiftShader 软件渲染，非纯背景；无页面错误、无 4xx/5xx 请求失败。
- 比较器 `comparison.json`：`comparisonPassed=true`；`coast-chase`、`coast-full-bend` 两版像素不同，`academy-depth` 两版逐像素相同（训练场不应用海岸地形，作为跨档像素回归控制）。
- 两档同机位车辆、相机、seed/t/tick/input、renderer、画质与时钟状态逐项一致；只有场景像素按预期变化。
- `capturePassed`（6/6）、`cleanExitBaseline`（6/6）与父 Node 退出（6/6 `exitCode=0, signal=null, waited=true`）分别记录，互不替代。

## 固定条件

- 源码：`811646e8a69bf9803a1de2218b882ab28b4b1f42` / tree `f11e318d3fc19785db094fd18b4e3160f22c6827`；`7e87d4c32d5014612fcb7a8af8bc49d266d7238c` / tree `66fe4f58e9c69e8a7a511ec888e4243e197d9681`。两棵独立检出在构建前 tracked clean，按 Git 原始字节检出、未做 CRLF 转换；构建只改动列出的生成物，源文件字节不变。
- 构建：既有 Node v24.22.1、Python 3.13.5 与两锁匹配的已装依赖；未安装、升级或修改依赖与锁文件。固定构建开关逐项相同（`DRIVING_MODEL=road`、`COAST_FLOW=baseline`、`SIGNBOARD_VARIANT=baseline`、`SKY=kenney`、`COAST_AMBIENCE=off`、`RAIL_SOURCE=kenney`、`DRIVING_AUDIO=procedural`、`CANVAS_HOUSE_ANCHORS=off`）。重新构建的 bundle／Worker SHA-256 与冻结值精确匹配，没有复用旧 `dist`。
- 浏览器：Chrome for Testing 156.0.8078.4（Playwright revision 1248），headless，实际 argv 含 `--no-sandbox`、`--enable-unsafe-swiftshader`、`--use-angle=swiftshader`、`--enable-automation`。
- 渲染器原串：`ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)`；vendor `Google Inc. (Google)`。
- 拍摄规格：1280×720／DPR 1、高画质、Mint Comet、road-v2、练习 circuit、无幽灵、静音、60 Hz 虚拟时钟、原 120 Hz 物理、12 次不推进状态预热；每机位 1 帧、两轮独立上下文。拍摄输入由游戏内 `road-tour` 回放，不模拟键鼠。
- 两档 URL 均带 `environment=coast-space-v1`，不含 `handling`；不启 power-tires，不与默认场景混比。

| 顺序 | 机位 | 查询（接 `BASE`） | tick | 相机 | 前版 PNG SHA-256 | 整层版 PNG SHA-256 | 双拍一致 |
|---|---|---|---|---|---|---|---|
| 1 | `coast-chase` | `/road?environment=coast-space-v1&shot=coast-chase&seed=73121&t=28&frames=1&input=road-tour` | 1680 | 原追尾 camMode 0，后距 8.5 m／高 4.5 m，FOV 62° | `003403b8b778f2e7e230caafe7c0d459f15308baf30c6fb37844146ef3eca7f8` | `8f2976170748660d02db8d1680dcfa4b86116b88cdd9871899b5d499c913ee5b` | 是 |
| 2 | `coast-full-bend` | `/road?environment=coast-space-v1&shot=coast-full-bend&seed=73121&t=28&frames=1&input=road-tour` | 1680 | 样条 eye(480,130,100)、target(460,-55,0)，FOV 58° | `6c68f4771675d572aa0e1c9e3efd2b09d7db2ed65e77d0c1307ba9059028fef2` | `e0f003f83897272b122a88ba2d683045d8946c1a25cb42c7cca7a4b49a702cd3` | 是 |
| 3 | `academy-depth` | `/road?environment=coast-space-v1&shot=academy-depth&seed=95276&t=14&frames=1&input=road-tour` | 840 | 原追尾 camMode 0，后距 8.5 m／高 4.5 m，FOV 62° | `dccde987e46690022df7649825731d26a19f048c99a945f9510abcf2a495053a` | `dccde987e46690022df7649825731d26a19f048c99a945f9510abcf2a495053a` | 是 |

表中 PNG 哈希为两轮共用的文件 SHA-256；每张图的 RGBA 哈希、URL 参数、seed/t/tick、相机与车辆状态、sideStatus、renderer、UTC 时间在 `manifest.json` 逐图列出。

每条命令的固定形式为 `node --import TOOL/windows-hide.mjs TOOL/capture.mjs SOURCE OUTPUT SHOT COMMIT`；`OUTPUT` 为 `outputs/B-STAR-QUALITY-CAPTURE-20261106/<commit8>/<shot>`，`COMMIT` 为该档完整 SHA。工具与源目录的完整本机路径不进入公开副本。

## 构建 identity

| 档 | road bundle SHA-256 | Worker SHA-256 | 实际下发 bundle |
|---|---|---|---|
| `811646e8` | `25b2ce33b6867bd75d098d84a9abc9f9655c52543dfc466e0021e62de2f72a94` | `132dd430016081c3bfd176ffee4af082fa024d1b9aba38fbc8954f61b000e86f` | 与本地构建一致 |
| `7e87d4c3` | `9768d3fd6dd9bc529c45c5c53d7ccca68b0204e9ad136ca8137d21a6e0125259` | `6be5af90f6c97b34c44f804e5e94ba3c4d53c335bf2398001d02842bac389132` | 与本地构建一致 |

构建命令、真实退出与 UTC、环境开关、生成物差异与依赖版本见 `build-records.json`；本轮实际使用的捕获包文件 SHA-256 见 `capture-package-hashes.json`。

## sideStatus

每张图的 `window.starSideStatus` 均为 `space=true`、`power=false`、`warnings=[]`、`backend=webgl2`，`ticks` 为实际推进计数（>0）。缺失或候选回退会使 capture 直接失败，URL 参数或 PNG 存在不作为替代证据。

## 限制

- 本轮只证明固定 commit/tree 在 headless 软件 WebGL2（SwiftShader）下的固定机位双拍门槛，不是硬件 GPU、整局流程、驾驶手感、声音或画面判优的结论。
- 每机位只有 1 帧、重复 2 次，不是完整序列；没有人工视觉验收。
- `comparison.json` 的 `qualityScore` 仍为 `pending independent blind review`。盲评由后台非作者进行；在盲评前不写品质分、不改默认版。
- 硬件画面、手感与听感仍属待人工验收项。
- 未改游戏源码、配置、锁文件或正式素材；未部署、未触碰旧任务或旧失败目录。

## 公开副本与脱敏

本目录是公开脱敏副本，不是未修改的原始日志：

- 实际预览 origin 统一替换为 `BASE`，保留路径与全部查询参数。
- 浏览器/进程 PID、完整 argv、可执行文件路径、本机绝对路径与用户名已移除；保留原始 renderer/vendor 原串、Chromium 版本、规定参数、全部 SHA-256、真实退出码与 UTC 时间。
- 原始 PNG 字节未转码；逐帧 JSON 未改动；`report.json` 除上述脱敏外保留 `capturePassed`、`cleanExitBaseline`、`previewClosed`、`browserProcess` 退出事实与 `errors=[]`。
- `receiver-exit.json` 为脱敏副本，保留 `waited/exitCode/signal/startedAt/endedAt`，已去除 PID。

## 文件

- `manifest.json`：逐图与逐机的固定 commit/tree、构建与下发 SHA-256、URL 参数、seed/t/tick、相机与车辆、sideStatus、renderer/浏览器、文件与 RGBA 哈希、UTC、退出汇总。
- `comparison.json`：比较器输出；两 coast 机位像素不同，`academy-depth` 逐像素相同。
- `build-records.json`、`capture-package-hashes.json`：构建记录与实际捕获包摘要。
- `<commit8>/<shot>/`：每机位两轮 `.png`、逐帧 `.json`、`report.json` 与 `receiver-exit.json` 脱敏副本。
