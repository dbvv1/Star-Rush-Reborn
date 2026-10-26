# 浏览器烟测

需要 Node.js 24、Python 3，以及能够运行沙箱 Chromium 的环境：

```sh
npm ci
npx playwright install chromium
npm run smoke
```

Linux 如缺系统浏览器依赖，由该环境管理员按 Playwright 官方依赖清单安装。正常环境保留 sandbox；Dot 自有隔离云容器确实无法启动 Chromium 时，按 brief 约定处理，或沿 a1dbv local-jobs 在真实浏览器验收。浏览器包下载失败不是 sandbox 问题。无 GPU 时脚本固定使用 `--use-angle=swiftshader`，并显式开启 Chromium sandbox；不重试其他浏览器，不自动切换 Canvas，不把缺浏览器或启动失败标成通过。

## 已安装 Chromium 与隔离云容器

默认使用 Playwright 对应版本的浏览器且开启 sandbox，不自动更换或重试。也可显式选择当前执行环境已安装的 Chromium（绝对路径），版本会记入报告；这不保证任意 Chromium 与 Playwright 版本兼容，仍须完整通过原断言：

```sh
STAR_RUSH_SMOKE_CHROMIUM=/usr/bin/chromium npm run smoke
```

仅在已有明确授权的 Dot 自有隔离云容器中，确认是 Chromium sandbox 启动问题时，可显式设置 `STAR_RUSH_SMOKE_CLOUD_NO_SANDBOX=1`。该选项默认关闭，不适用于用户电脑，不改变系统设置，不得用于绕过平台权限拒绝；下载失败、socket EPERM 等不能自动归因于 Chromium sandbox。报告如实记录实际 sandbox 配置及可执行文件。其他环境仍使用默认安全配置。

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

Playwright 会自行加入默认 Chromium 参数。仅从项目 `args` 删除 unsafe 标志不能证明最终进程未使用它；脚本同时用 `ignoreDefaultArgs: ['--enable-unsafe-swiftshader']` 精确排除此项，不关闭其余默认参数或 sandbox。报告中的 `args` / `ignoreDefaultArgs` 仅表示请求配置，不冒充完整进程命令。需要核实最终启动行时，按官方调试入口使用 `DEBUG=pw:browser npm run smoke` 并只在本地保留日志，检查真正 launch 行；不从通过截图反推参数安全性。此前只删显式参数的运行可保实际 WebGL 断言与像素证据，不能引用为“最终无 unsafe 参数”通过。
