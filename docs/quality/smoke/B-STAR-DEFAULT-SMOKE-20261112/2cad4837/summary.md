# 默认 `/road` 整局 smoke 交回摘要

任务：B-STAR-DEFAULT-SMOKE-20261112（两入口完整整局与连续帧耗）
源码基线：`2cad4837e6a759183f24c662b39ea1653b0e6bfe`（等于 base_ref）
证据目录：`docs/quality/smoke/B-STAR-DEFAULT-SMOKE-20261112/2cad4837/`

## 结论

- 默认入口 `/road` 的整局 smoke **未通过**：`report.json.passed=false`，真实 Node 退出码 **1**。
- 本卡状态应为 **blocked**。默认入口不切换、不部署。
- 失败发生在结果校验阶段，不是页面崩溃或 WebGL 不可用：比赛已真实跑完并产生结果，`validateFullRace` 因“玩家冲线快照没有观察到对手自然截止”而抛错。
- Haru / Rin 的“未完赛”是合法 DNF，不是 AI 品质失败或驾驶回归结论；不要据本报告判定 AI 退化。
- 由于默认入口失败，按卡片第 3 步立即停止，候选入口 `/road?environment=coast-space-v1` 未运行。

## 运行清单

| 项 | 值 |
|---|---|
| HEAD | `2cad4837e6a759183f24c662b39ea1653b0e6bfe` |
| HEAD tree | `9874db36d0143dc495028d06e1463acee8ecab1f` |
| Node | `v22.23.2`（**与本卡及 AGENTS.md 要求的 Node.js 24 不一致**） |
| npm | `10.9.8` |
| Playwright | `1.64.1` |
| Chromium | `156.0.8078.4`（Playwright 随附，headless） |
| 视口 | `1280×720`，DPR `1` |
| 开始 UTC（整卡） | `2026-11-12T03:59:04.676Z`（`started-utc.txt`） |
| 报告开始 UTC | `2026-11-12T04:01:11.140Z`（`report.json.startedAt`） |
| 报告结束 UTC | `2026-11-12T04:05:30.561Z`（`report.json.finishedAt`） |
| 交回 UTC | `2026-11-12T04:05:30.788Z`（`default/returned-utc.txt`） |
| 工作树（运行时开始） | 未由工具单独落盘（unknown）；卡片步骤 1 由运行方核对为干净 |
| 工作树（交回前实测） | 除本证据目录未跟踪外，tracked 差异为空；构建改写的 `dist/` 已还原到 HEAD |

运行环境为 Windows Git Bash。浏览器只用 headless Chromium 软件 WebGL（SwiftShader），未开可见窗口，未模拟键盘鼠标。

## 实际命令与退出

重跑命令（默认入口，产生本证据）：

```sh
MSYS_NO_PATHCONV=1 npm run smoke -- --full-race --path /road --timeout-ms 900000
```

- `tests/smoke-run.mjs` 收到的实际参数为 `--full-race --path /road --timeout-ms 900000`；`report.json.options` 记录 `{"fullRace":true,"timeoutMs":900000,"path":"/road"}`。
- Git Bash 默认会把 `/road` 转换成 Windows 绝对路径。首轮未设 `MSYS_NO_PATHCONV`，`/road` 被改写成 Git Bash 安装目录下的 Windows 绝对路径（`<Git>/road`），随后构建在 `experiments/rapier-road-comparison` 阶段因该目录缺少 `three` / `@dimforge/rapier3d-compat` 依赖而失败（Node exit=1，浏览器未启动；首轮仅留下构建阶段的 `report.json`，未纳入本证据）。重跑前按 `experiments/rapier-road-comparison/package-lock.json` 就地安装该实验目录依赖（锁文件未修改；精确安装命令未落盘，属未完整记录项），并阻止路径转换后重跑。
- 重跑真实 Node 退出码：**1**（`default/node-exit.txt`，内容 `1`）。
- 未启动第二个浏览器。

## 默认入口结果（`default/report.json`）

- `scope=full-race`，`passed=false`，`browser=Chromium`，`actualArgvVerified=true`，`playwrightDefaultsPreserved=true`。
- 启动参数：`--no-sandbox --enable-unsafe-swiftshader --use-angle=swiftshader --enable-automation`。
- WebGL2 有效：`WebGL 2.0 (OpenGL ES 3.0 Chromium)`；raw renderer 为 `ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)`。
- 入口候选状态：开局 `space=false, power=false, backend=webgl2, warnings=[], ticks=0`；结束 `space=false, power=false, backend=webgl2, warnings=[], ticks=13682`，tick 有推进。
- 连续帧：`fullRace.frames` 共 **1233** 帧，覆盖 `2838.4 ms → 250411.9 ms`（约 **247.6 s**），首帧 `countdown`、末帧 `finished`，相邻 `fromMs/toMs` 连续，`violations=[]`。
- 结果：
  - 事件“已完赛”，玩家 `POS 2 / 4`，1 圈用时 `01:54.02`，初始圈 `LAP 1 / 1 · 剩余 1877 m`。
  - 排名：1. Aoi / AI `01:52.91`；2. 车手848（你）`01:54.02`；3. Haru / AI `未完赛`；4. Rin / AI `未完赛`。
  - 新存档恰好 1 条：`coast-reborn` / `circuit` / seed `73121` / `timeMs=114017` / `distance=1876`。
- 错误：`consoleErrors=[]`、`pageErrors=[]`、`requestFailures=[]`、`httpErrors=[]`、`cleanupErrors=[]`。
- `warnings` 顶层有 1 条 Three.js 提示（`PCFSoftShadowMap` 已移除，改用 `PCFShadowMap`）；两端的 `raceCandidate.warnings=[]`。
- `servedBundleSha256 = 9768d3fd6dd9bc529c45c5c53d7ccca68b0204e9ad136ca8137d21a6e0125259`。这是本次 smoke 当次构建的服务产物哈希，与报告内“服务 bundle == 本地 `dist/client/road/game.js`”断言一致。运行后为保持工作树干净已把 `dist/` 还原到 HEAD；HEAD 跟踪的 `dist/client/road/game.js` 的 SHA256 是 `7e82cffce610c18afaa7399814553ea9a4d970621f417f8d5c4e53c377cc7544`。读者拿 HEAD 的 tracked `dist` 核对会得到后者，这是预期的“旧产物 vs 当次构建”差异，不是证据不一致。

## 失败定性

失败为 `AssertionError [ERR_ASSERTION]: missing rival closure evidence: player-finish snapshot does not observe a rival deadline`，位置在：

- `validateFullRace`（`tests/smoke-full-race.mjs` 的对手收尾断言），由
- `runFullRace`（同文件）调用，冒泡到
- `tests/smoke.mjs` 的完整整局分支。

原因是当前工具只有玩家冲线时的结果快照，没有可观测的对手自然截止/最终结算证据；只要存在 DNF（本局为 Haru、Rin），就按设计明确失败。DNF 本身合法，这条失败说明**工具观测缺口**，不说明整局无法跑完、AI 品质失败或帧耗异常。按卡片要求，保存 `failure` 与部分 `fullRace` 后交回，不修改工具、不补造 `frameCadence`。

## 未运行 / 未产出

断言在 `runFullRace` 内先抛出，`tests/smoke.mjs` 中排在它之后的步骤都没有执行：

| 项 | 状态 | 原因 |
|---|---|---|
| 候选入口 `/road?environment=coast-space-v1` | **未运行** | 默认入口 exit=1，按卡片第 3 步停止；未启动第二个浏览器。目录内 `coast-space-v1/status.txt` 记录同一事实。 |
| `frameCadence`（samples/durationMs/meanMs/p50Ms/p95Ms/p99Ms/maxMs/over50Ms） | **未产出** | `validateFullRace` 抛错，`report.frameCadence` 赋值得不到执行；原始 `fullRace.frames` 已保留，但未转成帧耗汇总。 |
| `race.png`、`canvas.png`、`pixels` | **未产出** | 截图与像素检查写在 `runFullRace` 返回之后，先被断言中止。 |
| `fullRace.restartAndReturn`（重开→运行→暂停→回菜单） | **未验证** | `verifyRaceRestart` 位于截图/像素/错误断言之后，同样未执行。 |
| 两档帧耗对比（p95/p99/max、>50ms） | **无法进行** | 只有默认入口一次失败运行的原始帧，候选入口未跑；不做跨档比较，也不以平均 FPS 代替尾延迟。 |
| 全量 `npm test` | **未运行** | 本卡只产出 smoke 证据；此前仅本地跑过 `tests/smoke-full-race.test.mjs` + `tests/smoke-run.test.mjs` CPU 回归子集（13/13），日志留本地，未纳入公开证据。 |

## 环境偏差

卡片步骤 1 与 `AGENTS.md`、`docs/browser-smoke.md` 要求 Node.js 24；实际运行环境为 **Node v22.23.2**（npm 10.9.8）；本次没有在 Node 24 下运行，未能满足该前置。该偏差可能影响构建产物、Playwright 行为与帧耗数值，因此本证据**不能直接作为最终验收**，需在 Node 24 下复跑或由 dot-B 明确豁免。

## 恢复条件

1. 提供 Node.js 24 环境（或由 dot-B 明确豁免本卡 Node 24 前置），在固定 SHA `2cad4837…` 上重跑默认入口：
   `MSYS_NO_PATHCONV=1 npm run smoke -- --full-race --path /road --timeout-ms 900000`
2. 处理对手收尾观测缺口：由 dot-B 决定接受“DNF 合法但需截止证据”的现有策略，或另开卡扩展观察器以采集对手自然截止/最终结算证据；不得在本卡修改工具或伪造 `frameCadence`。
3. 默认入口取得 `scope=full-race`、`passed=true`、exit=0、`cleanupErrors=[]`，并产出 `frameCadence`、`race.png`/`canvas.png`/`pixels`、`restartAndReturn`。
4. 串行运行候选入口 `/road?environment=coast-space-v1`，保留 report、真实 exit 与 UTC；在同 renderer/viewport/赛道/画质/起止区间下比较两档 p95/p99/max 与 >50ms 数量，由 dot-B 判断有无明显劣化。
5. 在 Node 24 下补跑仓库要求的全量 `npm test`。以上完成前，本卡保持 blocked，不切默认、不部署。

## 产物与 SHA256

`artifact-hashes.json` 是本目录的 SHA256/字节清单（算法 sha256，根 `B-STAR-DEFAULT-SMOKE-20261112/2cad4837`），覆盖：

| 文件 | SHA256 | 字节 |
|---|---|---|
| `started-utc.txt` | `972e95b2da5c1c5227823fc9e6ebd4f9b3444ae38aca8cb2a4c4a3c8cead7b7b` | 25 |
| `default/node-exit.txt` | `4355a46b19d348dc2f57c046f8ef63d4538ebb936000f3c9ee954a27460dd865` | 2 |
| `default/report.json` | `152439ecd4361413fba9a15d0620056917d9c0d050161316302428cf819ccc2d` | 122322 |
| `default/returned-utc.txt` | `a682a653161d61d6c94c5a90fe043481d8556fcefbf1f1f82eec5d6a252486fe` | 25 |
| `coast-space-v1/status.txt` | 见 `artifact-hashes.json` | 见清单 |
| `summary.md` | 见 `artifact-hashes.json`（本文件自哈希按写入后清单为准） | 见清单 |

交回 UTC：`2026-11-12T04:05:30.788Z`（`default/returned-utc.txt`）。

公开扫描：交回前对本目录全部 7 个文件按带负向后顾的 Windows 盘符绝对路径模式 `(?<![\w:])[A-Za-z]:[\\/]`（后顾用于排除 `file://`、`http://` 等协议前缀；去掉后顾的直接模式 `[A-Za-z]:[\\/]` 会把这类协议片段误报为命中，例如 `report.json` 中 3 处已脱敏的 `file:///<repo>` 栈片段）、`file:///` 后接盘符形式、用户目录与临时目录、系统安装目录名、本机用户名与接收端路径、UNC、私网 IPv4 等模式扫描，结果 0 命中。
