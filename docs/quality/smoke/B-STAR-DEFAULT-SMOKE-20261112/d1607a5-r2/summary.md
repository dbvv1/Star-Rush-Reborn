# B-STAR-DEFAULT-SMOKE-20261112 · d1607a5-r2 两入口完整整局与连续帧耗

固定 base：`d1607a57410c9bcdf1c0a9f24ece4ad238151485`（短 `d1607a5`，tree `131fc3f0fa8b3b1813df6bca3fe65f1b60b376ff`）。
本轮结果分支在开工前的 tip：`5257d5c089bda540aa1ad5c9ecd0a143a3991b94`（上一轮 `2cad4837` 失败证据仍保留在 `../2cad4837/`，未改写）。

## 结论

| 入口 | scope | passed | 进程退出 | cleanupErrors | 页面/控制台/请求错误 |
|---|---|---|---|---|---|
| `/road`（default，attempt-2） | full-race | true | 0 | `[]` | `[]` / `[]` / `[]` / `[]` |
| `/road?environment=coast-space-v1`（attempt-1） | full-race | true | 0 | `[]` | `[]` / `[]` / `[]` / `[]` |

两入口均以真实时间自动试驾到玩家结果页，`fullRace.closure.kind=player-finish-snapshot`，结果后另观测 ≥1 秒终态；重开、推进、暂停、返回菜单均通过（`restartAndReturn=true`）。本结果交负责人接收，不代表已决定换默认或品质增长。

## 源与运行环境

- 结果分支 tip `5257d5c` 早于固定 base `d1607a5`；为使交付树可复现本次运行，已把 base 中下列 5 个源码/文档路径的内容应用到工作树并列入本单元交付，其余受版本管理的源码与 base 相同。
- 源码身份：工作树中 `tests/smoke-full-race.mjs`、`tests/smoke-full-race.test.mjs`、`docs/browser-smoke.md`、`AGENTS.md`、`README.md` 的 blob 与固定 base `d1607a5` 逐一相同（hash 见 `artifact-hashes.json`）。工作树只额外保留旧的 `2cad4837` 证据目录；构建生成的 `dist/`、`worker/` 为本地构建产物，未列入交付。`assets/sky/manifest.json` 是受版本管理的源文件，不是构建产物：交付/提交副本已恢复为 base 内容，blob `80489b92c32c6867ee0c4c4660c459f112ff77dd` 与 `git rev-parse d1607a5:assets/sky/manifest.json` 相同，459 字节、14 个 LF、0 个 CRLF（纯 LF 行尾）。运行 `npm test` 时 `tests/sky-panorama.test.mjs` 会调用 `assets/sky/prepare.py`，其 `write_text` 重写该文件（本机 Windows 下为 CRLF 行尾），因此验证后工作树会把它显示为已修改；核对源码身份前先执行 `git restore --source=d1607a5 --worktree -- assets/sky/manifest.json` 恢复。`npm run build`（`assemble.py` → `build.mjs`）只读取、不重建该文件。
- 运行：Node `v22.23.2`、npm `10.9.8`、Playwright `1.64.1`、Chromium `156.0.8078.4`（`executablePath=playwright-bundled`）。本机接受 Node 22.23.2，未升级 Node。
- 依赖：复用本机已存在的依赖树，未安装或升级。根 `package-lock.json` SHA256 `4bfa549f6b3b5b17f4dce128a9b087660bd04210de9cfe9b9cc87c44dc06c83d`，`experiments/rapier-road-comparison/package-lock.json` SHA256 `d7ea6f76c6a71a38b03e75e89e7b7183928f28d496c733858af81b851e1cded4`，两处 `npm ls --depth=0` 版本与锁文件一致。
- 两入口同一 Chromium/SwiftShader、1280×720、DPR 1、`coast-reborn`、竞速、`high`、`seed73121`，只使用 loopback Worker 与内存 SQLite，不访问生产、不播放音频。
- 启动参数（请求与实际 argv 已由 CDP `Browser.getBrowserCommandLine` 核验，`actualArgvVerified=true`）：`--no-sandbox --enable-unsafe-swiftshader --use-angle=swiftshader --enable-automation`；`headless=true`、`chromiumSandbox=false`。
- WebGL2 原始 renderer：`ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)`。这是软件 WebGL2，不记作硬件 GPU 验收。

## 实际执行命令与时间（UTC）

进程环境只设 `STAR_RUSH_DRIVING_MODEL=road`；未设其他 `STAR_RUSH_*` 覆盖。

| 命令 | 开始 | 返回 | 退出 |
|---|---|---|---|
| `node tests/smoke-run.mjs --full-race --path /road --timeout-ms 900000`（attempt-1） | 2026-11-12T19:36:20Z | 2026-11-12T19:36:29Z | 1 |
| 同上，加 `MSYS_NO_PATHCONV=1`（attempt-2） | 2026-11-12T19:36:54Z | 2026-11-12T19:44:29Z | 0 |
| `node tests/smoke-run.mjs --full-race --path '/road?environment=coast-space-v1' --timeout-ms 900000`（attempt-1，含 `MSYS_NO_PATHCONV=1`） | 2026-11-12T19:45:31Z | 2026-11-12T19:50:53Z | 0 |

说明：本机执行席是 Git Bash。Git Bash/MSYS 会把以 `/` 开头的参数改写成 Windows 路径，`/road` 实际变成 `C:/Program Files/Git/road`，因此第一次在解析参数阶段失败，浏览器未启动。该首跑按规则保留在 `default/attempt-1/`；随后以 `MSYS_NO_PATHCONV=1` 原样复跑一次得到通过结果。这是 shell 参数传递问题，不是 smoke 脚本缺陷，未修改脚本逻辑；任务给出的 PowerShell 命令不受影响。

首跑真实首错（阶段：build 成功后的参数解析；浏览器未启动；进程已清理）：

`Error: path must be / or /road with optional query`

## 两入口整局语义与结果

两入口的 `fullRace.violations=[]`、`frames` 首尾覆盖 `startMs..endMs`、相邻连续，隐藏/暂停/返回菜单/改画质/错误覆盖层均未出现。

| 字段 | default | coast-space-v1 |
|---|---|---|
| `starSideStatus` 开局/结束 | `space=false,power=false,backend=webgl2,warnings=[]`；ticks 0→13635 | `space=true,power=false,backend=webgl2,warnings=[]`；ticks 0→13632 |
| `initialLap` | `LAP 1 / 1 · 剩余 1877 m` | `LAP 1 / 1 · 剩余 1877 m` |
| 玩家结果 | `已完赛`，`01:53.63`，`POS 2 / 4` | `已完赛`，`01:53.60`，`POS 2 / 4` |
| 最终名次 | 1. Aoi / AI `01:52.91`；2. 玩家 `01:53.63`；3. Haru / AI `未完赛`；4. Rin / AI `未完赛` | 1. Aoi / AI `01:52.91`；2. 玩家 `01:53.60`；3. Haru / AI `未完赛`；4. Rin / AI `未完赛` |
| 本地纪录 | 1 条：`coast-reborn`/`circuit`/`seed 73121`/`distance 1876`/`timeMs 113625`，与结果时间差 ≤10ms | 1 条：`coast-reborn`/`circuit`/`seed 73121`/`distance 1876`/`timeMs 113600`，与结果时间差 ≤10ms |
| 终态观测 | `player-finish-snapshot`，样本 6，`startMs=endMs=323633.6`，ticks 恒为 13635 | `player-finish-snapshot`，样本 5，`startMs=endMs=268210.6`，ticks 恒为 13632 |
| `restartAndReturn` | true | true |

生产语义是玩家冲线时停止全局物理并冻结比分；两名对手保留 `未完赛`，未伪造对手时间、未改比赛逻辑、不要求对手继续收尾或自然截止。

## 连续帧耗（rAF 调度间隔）

同一 renderer/viewport/赛道/画质，两入口相邻时间段（19:36–19:51Z）分别整局采集；这是浏览器 rAF 间隔，不是 GPU timer 或硬件性能，不能用平均 FPS 冒充。

| 指标 | default | coast-space-v1 |
|---|---|---|
| samples | 1482 | 1376 |
| durationMs | 308104.4 | 264956.1 |
| meanMs | 207.90 | 192.56 |
| p50Ms | 200 | 183.4 |
| p95Ms | 450 | 366.6 |
| p99Ms | 1483.3 | 800 |
| maxMs | 4599.8 | 3599.9 |
| over50Ms | 1098 | 1125 |

两档均为软件 WebGL2 长帧环境；墙钟时长还受主机负载影响，不能由本表直接得出“候选更优/默认劣化”的结论，也不作为换默认依据。

## 构建与产物

- `servedBundleSha256`（两入口相同）：`9768d3fd6dd9bc529c45c5c53d7ccca68b0204e9ad136ca8137d21a6e0125259`。脚本已断言实际服务 bundle 与本地 `dist/client/road/game.js` 的 SHA256 一致；该值与源码身份分开记录。
- 画布像素：default 量化色 1930、主色占比 0.4079；coast 量化色 1914、主色占比 0.4088，均满足非背景场景像素检查。
- 清理回执：两入口 `cleanupErrors=[]`，即 browser、loopback server、内存 database 三步关闭均无错误；进程退出码如上表。
- 控制台 warning（非错误，未计入失败）：`THREE.WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`；`starSideStatus.warnings` 两入口均为 `[]`。

## 支持性 CPU 验证

- `node --test tests/smoke-full-race.test.mjs tests/smoke-run.test.mjs`：14/14 通过，退出 0。
- `npm test`（项目原入口）：201/201 通过，退出 0，耗时约 146s；自动驾驶三条赛道均 finished，API 全流程通过。

## 证据文件

`artifact-hashes.json` 列出本目录全部产物的 SHA256。结构：

- `default/attempt-1/`：首跑参数失败报告（保留首错类型与阶段，已去除本机绝对路径）。
- `default/attempt-2/`：通过报告、赛道截图、画布截图、退出码与起止 UTC。
- `coast-space-v1/attempt-1/`：通过报告、赛道截图、画布截图、退出码与起止 UTC。

## 未验证与限制

- 未在 Node 24 或真实 GPU 下重跑（本机按要求使用 Node 22.23.2 与软件 WebGL2）。
- 自动试驾不代表真人驾驶手感、听感或视觉盲选；本证据不决定换默认，也不记品质或覆盖增长。
- 生成产物 `dist/`、`worker/` 在本机被 `npm run build` 刷新但未列入交付清单；复核时按同一命令重建。`assets/sky/manifest.json` 不是构建产物，交付/提交副本与 base 逐字节相同（纯 LF）；只有运行 `npm test`（`tests/sky-panorama.test.mjs` 执行 `assets/sky/prepare.py`）时才会被重写为 CRLF 行尾，核对源码身份前用 `git restore --source=d1607a5 --worktree -- assets/sky/manifest.json` 恢复；`npm run build` 只读取、不重建。
