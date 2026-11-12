# 浏览器烟测

需要 Node.js 24、Python 3、已安装的 Playwright Chromium，以及允许该浏览器运行的隔离执行环境：

```sh
npm ci
npx playwright install chromium
npm run smoke
```

本轮云端软件 WebGL2 配置保留全部 Playwright 默认参数，设 `chromiumSandbox:false`，并要求实际 Chromium argv 同时包含 `--no-sandbox`、`--enable-unsafe-swiftshader`、`--use-angle=swiftshader`。这是专用于三个案例自有页面的浏览器配置，不修改外层执行沙箱，不适合作为通用网页浏览配置。只允许 HTTP loopback 预览或 `smoke-launch.mjs` 列出的三个 HTTPS 网站；每次上下文进一步限制为本次预览的单一源，拒绝重定向、跨源请求和 WebSocket，禁用 service worker。

默认用 Playwright 对应浏览器；也可用 `STAR_RUSH_SMOKE_CHROMIUM=/usr/bin/chromium` 指定当前环境已安装的绝对路径。旧 `STAR_RUSH_SMOKE_CLOUD_NO_SANDBOX=1` 兼容保留，不再是开启本轮配置的必要条件。启动失败不会换浏览器、增加绕过参数或切换 Canvas；遇到 `socket() EPERM`、证书错误或访问拒绝，保留失败并停止相应浏览器动作。

`npm run smoke` 首先运行现有生产构建，然后把 `dist/server/index.js` Worker 放到 `127.0.0.1` 随机空闲端口。SQLite 只在内存中应用项目迁移，不连接生产 D1，不创建用户账户或凭据、不上传成绩；浏览器只允许访问这个测试源。结束时关闭浏览器、服务器和数据库。

单个 1280×720 Chromium 页面使用默认赛道和默认构建开关，完成：

- 加载真正构建产物，要求无初始化错误、无 Canvas 降级且 WebGL2 上下文有效。
- 点击开始，等倒计时结束，按 W 至速度超过 5 km/h，并确认比赛计时推进。
- 输出赛中整页截图和仅画布截图；画布截图隐藏 HUD 等兄弟节点，避免文字冒充场景像素。要求足够色彩变化而非纯背景。
- 将 console error、未捕获页面异常、失败请求及 HTTP 4xx/5xx 作为失败；warning 单独记录。

结果写入忽略提交的 `outputs/smoke/`：`report.json`（成功或失败）、`race.png`、`canvas.png`（到达截图阶段才存在）。每次先清理上次截图；非零退出即失败。入口在构建前即作废上次通过报告并清理旧截图；构建失败或浏览器模块加载失败会写入当前失败阶段，且不会伪报浏览器已运行。未完成的运行保持 `passed: false`。截图与像素检查只证明默认场景能够渲染，不替代三赛道试玩、性能基准、画面审美、手感或听感验收；API 全流程继续由 `npm test` 覆盖。

## 已存在云浏览器的同桌面预览

`npm run smoke:serve` 使用与自动 smoke 相同的生产 Worker、项目迁移和内存 SQLite，只在 loopback 随机端口启动服务，不启动或重配浏览器。读取输出的 `STAR_SMOKE_LOOPBACK`，在同一已授权云桌面的现有浏览器里打开；Ctrl+C 关闭服务与内存库。命令应运行在该浏览器可访问的执行环境，不能假定不同 exec 会话共享 loopback。

此入口用于真实界面检查，不自动执行断言，也不产出通过报告。必须分别记录实际渲染模式、开局／输入／计时、截图与控制台范围；页面进入 Canvas 兼容模式不算 WebGL2 smoke 通过。不得用它在另一执行环境重试被明确拒绝的浏览器启动或扩大网络监听。

### 启动参数核实

smoke 与 capture 的共享启动参数显式包含 `--enable-automation`，这是 CDP `Browser.getBrowserCommandLine` 读回实际 argv 的前置，不能依赖 Playwright 默认提供。原三项启动参数与 Playwright 默认参数保留，实际 argv 同时核自动化参数；报告区分请求配置和实际验证。`DEBUG=pw:browser` 原始日志仅留本地，避免公开可执行路径和调试地址。软件 WebGL2 可以验证功能及同机位图，不记作硬件 GPU 验收。

2026-11-04 的一次云端 Star 实拍尝试在导航前失败：实际启动行已含三项参数，Chromium 的进程单例 socket 返回 `EPERM`，随后 `SIGABRT`；Node 非零退出、预览已关闭，没有 PNG。此项是执行环境限制，不是 WebGL2 或像素通过证据。未重试或修改外层沙箱。

本机固定机位失败后的这项参数修复仅完成 CPU 参数组装回归；真实 CDP、WebGL2 与 PNG 尚待验证，原调用退出与 Node 24 前置仍须先核清。协议依据：[Browser.getBrowserCommandLine](https://github.com/ChromeDevTools/devtools-protocol/blob/master/pdl/domains/Browser.pdl)（2026-11-04 核实）。

## 完整公路比赛与全程帧耗

原 `npm run smoke` 继续只验开局。完整入口为 `npm run smoke -- --full-race --path /road --timeout-ms 900000`，可用 `--path '/road?environment=coast-space-v1'` 指定已有整层候选，其他 query 拒绝；构建开关沿用调用环境。只接受公路入口，不接受拍摄模式、虚拟时钟或 `/legacy`。需要 WebGL2 的运行仍按游戏细则 §7 串行安排；本入口不会解决未知占用、桌面离线或浏览器启动限制。

该入口使用现有菜单选择汐见海岸、竞速、high 固定画质，点击自动试驾，按真实时间运行至结果。浏览器新上下文固定 1280×720／DPR 1；不注入终点、不跳 tick、不修改 AI。报告核对实际服务 bundle 的 SHA256 与本地生产公路产物，记录入口、renderer 原始字符串与 Chromium 版本；开局与结束均核 starSideStatus 的实际候选状态、WebGL2、warnings 和 tick 推进，静默回退不通过。比较不同构建需分别保留 outputs/smoke，不能覆盖前一轮。

`report.json.fullRace` 保存从首次倒计时观察到结果观察之间的完整逐帧 `fromMs/toMs/phase`，包括慢帧；`frameCadence` 给出全程 mean、p50、p95、p99、max 和超过 50ms 的样本数。它测量真实浏览器 rAF 调度间隔，不是 GPU timer 或纯渲染 CPU 耗时，也不将软件渲染结果称为硬件性能。样本必须首尾覆盖、相邻连续；隐藏页面、暂停、返回菜单、改画质和错误覆盖层均失败。超时仍保留已收集样本与未完成状态；失败不产出通过结论。

当前观察器以玩家冲线、四条最终名次与 HUD 一致、玩家时间与本机新记录一致为支持路径，随后验证重开、暂停与返回菜单。当前运行时在玩家冲线时停止全局物理并生成最终名次；此时未到终点的对手保留“未完赛”，没有随后独立推进的对手截止阶段。观察器额外读取至少一秒的终态：结果面板保持显示、物理 tick 冻结、排名和存档不变，记录为 `fullRace.closure.kind=player-finish-snapshot`；合法对手 DNF 可过这一路径，不冒称所有对手自然完赛。结果后观察不混入倒计时至首次结果的帧耗。玩家 DNF 仍缺自然截止观察证据，不能仅凭终局标签通过。旧报告没有 closure 样本，不能靠重新计算或本次 CPU 测试追认为通过。

同档、同 viewport、同赛道、同起止区间和同 renderer 的新旧运行才能比较帧耗。保留原始长帧并核 p95/p99/max 与错误状态，平均 FPS 不能代替尾延迟。工具只给出整局功能与帧耗证据，不自动决定“无明显劣化”或换默认。自动试驾不代表真人驾驶手感、听感或视觉盲选。

CPU 回归：`node --test tests/smoke-full-race.test.mjs tests/smoke-run.test.mjs`。覆盖正常结果、缺参数、非法/虚拟拍摄入口、缺终点、采样断裂/非法时值、DNF、名次/存档不符、超时部分收据及真实序列化观察器；通过不等于浏览器整局已运行。
