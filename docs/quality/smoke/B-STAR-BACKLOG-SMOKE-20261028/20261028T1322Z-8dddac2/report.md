# Star-Rush 积压整合版本串行无头 smoke

- 任务：B-STAR-BACKLOG-SMOKE-20261028（本文件只记录本轮真实结果）
- run-id：`20261028T1322Z-8dddac2`
- 源码：commit `8dddac2ce5cd7941a2eb64cceeeb04ef1e17831a`，tree `ef27a5020b2249899c6b1f7a40003e737eb166ae`；开始与结束时 tracked 工作树均 clean
- 浏览器：本机 Playwright 1.64.1 已安装 Chromium 156.0.8078.4（revision 1248，chromium headless shell），headless，sandbox 请求开启；实际 argv 无 `--no-sandbox`、`--enable-unsafe-swiftshader`、`--use-angle=swiftshader`、`--disable-gpu`
- 运行环境：Node v24.22.1（本机已存在的便携运行时）、npm 10.9.8、Python 3.13.5
- 时间：依赖准备 13:21:52Z–13:22:26Z（两处 `npm ci` 合计约 30 秒）；构建 13:22:29Z–13:22:34Z；smoke 13:23:10Z–13:28:36Z（约 5 分 26 秒）
- 外部超时（shell／Bash 工具）：根 `npm ci` 560／600 秒，rapier `npm ci` 300／360 秒，构建 300／320 秒，smoke 1200／工具默认；均未触发。任务卡的依赖准备 10 分钟总预算按两次串行 `npm ci` 分别计时，并未合并成单一 600 秒命令执行。
- 命令：`npm run smoke:backlog -- outputs/backlog-smoke-20261028T1322Z-8dddac2`（`DEBUG=pw:browser` 仅用于本地进程退出证据）

## 结果

单一 smoke 命令退出码 0，`report.passed=true`，`cleanupErrors=[]`。五个入口按固定顺序串行执行：

| 入口 | query／参数 | report.passed | renderer 分类 | 实际 renderer（原串） | 去重量化颜色桶数（含背景，r/g/b 各取高 5 位） |
|---|---|---|---|---|---|
| default | (none) | true | software | ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver) | 2103 |
| road | (none) | true | software | ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver) | 2167 |
| legacy | (none) | true | software | ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver) | 1510 |
| rapier | (none) | true | software | ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver) | 866 |
| coast-chase shot | `?shot=coast-chase&t=0` | true | software | ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver) | 2117 |

每个入口都实测到有效 WebGL2 上下文（`canvas.getContext('webgl2')` 非空且未丢失）；脚本对 1280×720 截图按 r/g/b 各取高 5 位去重得到颜色桶数（含背景），五个入口均大于 100，说明画面不是纯背景；`errors=[]`（无 pageerror、console error、HTTP ≥400、requestfailed）。截图见 `screenshots/`。

固定源 `tests/backlog-smoke.mjs` 内的逐入口断言都实际执行并通过：

- `/`、`/road/`、`/legacy/`：`#loading.done` 出现且 `#error` 不可见 → 点击 `#startBtn`，等待 welcome 与倒计时隐藏 → 按住 W 直到 `#speed` > 5 km/h → 暂停后 `#paused` 可见且 `#raceTime` 在两次采样间不变 → 继续后 `#paused` 隐藏且时间重新推进 → 暂停并 `#restartPause`，倒计时重新出现并结束 → 再加速到 > 5 km/h → 暂停后 `#pauseHome` 返回大厅（welcome 可见、paused 隐藏）→ 再点 `#startBtn` 重新开局。
- `/rapier/`：`window.rapierComparison.snapshot().ticks > 1` → 按住 W 直到 `#speed` > 2 → `#pause` 后 `paused=true` 且 250 ms 内 ticks 不变 → 恢复后 ticks 继续增长 → `#reset` 后 `s≈170`、水平速度 < 1，ticks 继续推进 → `#exit` 后 `closed=true`，并回到正式游戏（`#loading.done`）。
- `/?shot=coast-chase&t=0`：`window.__shot.ready === true`。

## 结论／下一步

- 本轮只证明固定 commit `8dddac2`／tree `ef27a50` 在 headless 软件 WebGL（SwiftShader）下的功能门槛；可作为把该提交合入默认分支、并在 `/rapier` 旁置试玩上更新的依据，不构成 GPU 或手感结论。
- 默认公路入口与海岸环境音（默认 off）均未改动；`/rapier` 仍为旁置入口。
- 下一步：dot-B 核对本目录产物后，将 `result_branch`（固定 commit `8dddac2`）合入默认分支并部署，再更新 `/rapier` 旁置试玩；本任务不合 master、不部署。真 GPU 下同一五入口复跑与人工手感／音效验收另行安排、单独记录。
- 若需要 GPU 结论或要改默认入口，不得引用本报告。

## renderer 说明

- 本轮 Chromium 在 headless 下自动使用了 SwiftShader 软件 WebGL，五入口分类均为 `software`。脚本未强制软件渲染（argv 无 swiftshader／use-angle／disable-gpu 开关），失败后也没有切换 renderer 或浏览器；这是本机 headless 环境实际给出的 renderer，原串保留在上表。
- 因此本轮不能作为 GPU 证据，不据此判断画面或 Rapier 手感更好。海岸环境音保持默认 off，本轮未启用、未听辨；Rapier 仍是旁置入口，默认公路入口未变。

## 构建 identity

脚本在 smoke 前后分别核对并断言了同一份 commit/tree 与 tracked 工作树 clean，且下列文件 SHA-256 在前后完全一致：

| 文件 | SHA-256 |
|---|---|
| `dist/server/index.js`（Worker） | `8e53e17094d3e91d79055550467bb8362eb6b80a12b8821d30f9afafe4d0b8a6` |
| `dist/client/game.js`（正式入口） | `f20656157a4bdbf6cc0496dedb39c45e173fe29bd045ce247c970dfa2d4a5519` |
| `dist/client/road/game.js`（公路入口） | `f20656157a4bdbf6cc0496dedb39c45e173fe29bd045ce247c970dfa2d4a5519` |
| `dist/client/legacy/game.js`（legacy 入口） | `2ba14d66548a0a2a202fffd3dd6de625f899919464849cec99cd43a8e0413d01` |
| `dist/client/rapier/comparison.js`（Rapier 旁置） | `c997da359e8747d4a41bf1dd6936de8d601315b7c3e331965701aceb121d6dc6` |
| `tests/backlog-smoke.mjs`（脚本） | `1ef9c1291045189c1c159bdbd18c56bd39da7a721e5098e5b7600b3e76898a60` |

## 串行、进程与清理

- 预检：GPU 适配器为 GameViewer Virtual Display Adapter、NVIDIA GeForce RTX 5070、AMD Radeon(TM) Graphics；未采样逐卡利用率。接收端状态里本任务在 running，另有 A-PARALLEL-REVIEW-SOURCES-20261028 的 reader worker（node PID 5884，未观察到浏览器或 GPU 进程）。
- 没有可复用的共用 GPU 锁或锁根：接收端根、work 根、run 根与 worktree 下均未发现锁文件；本轮没有获取／抢占／释放任何锁。没有把 Git 状态当作进程退出证据。
- 预检未发现 chromium／chrome-headless-shell／headless_shell／Playwright 进程，也没有 3000、4173、4174、5173、5174、7702、8080、8000、8757 监听。已存在的 msedge／msedgewebview2／chrome 根进程没有 `--headless`、`--remote-debugging` 或 Playwright 临时 profile 标志，属用户进程，未触碰。
- 本任务自有链路：smoke node PID 86920（父 111832 `cmd.exe`，祖父 99668 `node.exe`；父／祖父命令行未采样，进程已退出）；唯一浏览器 PID 49572（`chrome-headless-shell.exe`，父为 86920），13:23:17.133Z 启动，13:28:36.701Z 以 `exitCode=0, signal=null` 退出，消失在 13:28:36.475Z–13:28:38.268Z 采样区间。整条命令只启动这一个 Chromium，五入口在其中串行。
- 预览服务是 smoke node 内的 `node:http` 服务，监听 loopback 端口 4009，没有独立预览进程；结束后复查端口 4009 无监听。86920、49572、111832、99668 在 13:29:50Z 复查时均已不存在；`browserDisconnected=true`、`browserConnected=false`、`serverListening=false`、`serverAddress=null`。完整时间见 `process-evidence.json` 与 `logs/browser-excerpt.log`。
- 没有共用 GPU 槽可归还；跨任务 GPU 独占未知。

## 安全与脱敏

- 实际 argv 审计：`--headless` 在，`--no-sandbox`／`--enable-unsafe-swiftshader`／`--use-angle=swiftshader`／`--disable-gpu` 均不在。
- 公开副本去掉了本机绝对路径、完整 argv、临时 Chromium profile 路径和本机运行时路径；renderer 原串未改写。本目录 `screenshots/*.png` 是本次运行 `route-0..4.png` 的公开字节副本（SHA-256 一一相同），`report.json` 是原始 report 的公开字节副本。完整 DEBUG browser 日志在本地被忽略的 `outputs/smoke-20261028T1322Z-8dddac2.log`（完整 argv 与临时 profile 路径只出现在该日志中，临时 profile 已在 smoke 结束时清理）；原始 report 与 `route-0..4.png` 在 `outputs/backlog-smoke-20261028T1322Z-8dddac2/`；两者均不公开。
- 截图只包含游戏页面，没有桌面或浏览器外壳截图；不含机器用户名或凭据。

## 限制

- 表中“颜色桶数”是脚本对截图 r/g/b 各取高 5 位后的去重桶数，包含背景像素，不是“非背景颜色数”；要得到非背景颜色数需改脚本排除背景并重跑。
- smoke 通过只是功能门槛，不代表画面或手感更好，也不据此更换默认入口或判定 Rapier 手感。
- 本轮 renderer 为 SwiftShader 软件 WebGL，未验证真 GPU 下的同一 smoke；不把它记作 GPU 结果。
- 未验证：逐 GPU 利用率、跨任务全局 GPU 独占；smoke node 父／祖父进程的命令行（进程已退出，无法补采）。
- 海岸环境音未启用、未听辨；本卡不证明其完整混音更好。
- 未合 master、未部署、未改网站版本，未改案例源码、锁文件或脚本。
