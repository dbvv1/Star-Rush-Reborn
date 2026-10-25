# Star-Rush-Reborn 工作约定

本仓库是 [a1dbv](https://github.com/dbvv1/a1dbv) 游戏方向的作品案例：原创网页街机竞速，用来检验驾驶手感、竞速 AI 和 AI 美术／音频制作链。方向与优先级以 a1dbv 的[方向锚点](https://github.com/dbvv1/a1dbv/blob/main/AGENTS.md)、[作品案例约定](https://github.com/dbvv1/a1dbv/blob/main/docs/collaboration/game-taskbook.md#6-作品案例)和 [TASKS](https://github.com/dbvv1/a1dbv/blob/main/docs/collaboration/TASKS.md) 为准；本文件只管在本仓库怎么干活。当前处于维护期，要做什么见 [docs/brief.md](docs/brief.md)。

## 负责与发布

- 负责人是 a1dbv 的 dot-B。实现、资源制作和测试可通过 a1dbv 的 [local-jobs](https://github.com/dbvv1/a1dbv/blob/main/docs/collaboration/local-jobs/README.md) 交给本地模型，由 dot-B 接收。
- `master` 随时可玩：自测通过即合入，不长期停在临时分支；不强推、不改写历史。许可清楚、工程验证通过的素材默认启用，只有感知未定的调参留构建开关。
- 部署按已有授权执行：生产为 `dist/server/index.js` Worker，绑定 D1 `DB`，迁移在 `drizzle/`，托管配置在 `.openai/hosting.json`。
- 提交身份用 GitHub noreply 邮箱或 Agent 平台的固定机器身份。不提交密钥、私人对话、本机路径和个人邮箱。

## 命令

需要 Node.js 24 与 Python 3。

| 命令 | 作用 |
|---|---|
| `npm ci` / `npm run dev` | 安装依赖 / 本地预览 http://localhost:4173，含排行榜和房间 API |
| `npm run build` | 生产构建（`assemble.py`，esbuild 打包，含 Worker 与资源表） |
| `npm run smoke` | 构建后启动沙箱 Chromium 软件 WebGL，开局、检查画布与错误并截图；准备见 docs/browser-smoke.md |
| `npm test` | 单元测试、自动驾驶跑完三条赛道、6000 步混合操作、渲染适配与 API 流程 |

构建开关见 README。

## 结构

- 模拟：`vehicle-core.js` 驾驶，`handling.js` 漂移与喷射，`circuit.js` 赛道与碰撞，`race.js` 循环与镜头，`race-features.js` AI、幽灵、分段与辅助，`engine.js` 数学与几何。固定 120 Hz 逻辑，渲染插值。
- 表现：`render-three.js` WebGL，`software-renderer.js` Canvas 兼容，`scenery.js` 场景，`ui.js` 界面，`audio.js`、`music.js`、`impact-audio.js` 声音。
- 服务：`network.js`、`ranking.js`，`worker/` API，`db/`、`drizzle/` 数据库。
- `assets/<类别>/`：每个目录一份 README，写来源、许可、生成提示或处理配方。`tests/scene-authoring.*` 是离线作者工具，说明见 [docs/scene-authoring.md](docs/scene-authoring.md)。

## 验收

1. **自动**：`npm test` 通过。改驾驶、碰撞或 AI 时，看自动驾驶圈速与稳定性检查有无退化。
2. **浏览器**：构建产物在无头浏览器里加载、开一局，无控制台错误且画布内有非背景像素；云端没有 GPU 时，Playwright Chromium 加 `--use-angle=swiftshader --enable-unsafe-swiftshader` 走软件 WebGL。脚本见 `tests/smoke.mjs`，运行准备与范围见 [browser-smoke](docs/browser-smoke.md)。
3. **人工**：手感、画面、声音需要人判断的，记入 a1dbv TASKS“待人工验收”，然后继续做其他工作。

汇报只写实际跑过的结果；没跑的写“未验证”，一句即可。

## 写作

- README 面向玩家：是什么、怎么运行、怎么玩。不写开发经过、验证日志和免责声明。
- 设计变化改 `docs/brief.md`。案例跑通、推翻或改写了 a1dbv 某个模块的做法，回 a1dbv 更新那一页。
- 角色、车辆、赛道、美术和音效原创，或使用许可清楚的素材；可以借鉴公开的玩法机制，不使用商业游戏的代码、参数和资产。
