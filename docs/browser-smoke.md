# 浏览器烟测

需要 Node.js 24、Python 3，以及能够运行沙箱 Chromium 的环境：

```sh
npm ci
npx playwright install chromium
npm run smoke
```

Linux 如缺系统浏览器依赖，由该环境管理员按 Playwright 官方依赖清单安装。正常环境保留 sandbox；Dot 自有隔离云容器确实无法启动 Chromium 时，按 brief 约定处理，或沿 a1dbv local-jobs 在真实浏览器验收。浏览器包下载失败不是 sandbox 问题。无 GPU 时脚本固定使用 `--use-angle=swiftshader --enable-unsafe-swiftshader`，并显式开启 Chromium sandbox；不重试其他浏览器，不自动切换 Canvas，不把缺浏览器或启动失败标成通过。

`npm run smoke` 首先运行现有生产构建，然后把 `dist/server/index.js` Worker 放到 `127.0.0.1` 随机空闲端口。SQLite 只在内存中应用项目迁移，不连接生产 D1，不创建用户账户或凭据、不上传成绩；浏览器只允许访问这个测试源。结束时关闭浏览器、服务器和数据库。

单个 1280×720 Chromium 页面使用默认赛道和默认构建开关，完成：

- 加载真正构建产物，要求无初始化错误、无 Canvas 降级且 WebGL2 上下文有效。
- 点击开始，等倒计时结束，按 W 至速度超过 5 km/h，并确认比赛计时推进。
- 输出赛中整页截图和仅画布截图；画布截图隐藏 HUD 等兄弟节点，避免文字冒充场景像素。要求足够色彩变化而非纯背景。
- 将 console error、未捕获页面异常、失败请求及 HTTP 4xx/5xx 作为失败；warning 单独记录。

结果写入忽略提交的 `outputs/smoke/`：`report.json`（成功或失败）、`race.png`、`canvas.png`（到达截图阶段才存在）。每次先清理上次截图；非零退出即失败。构建本身失败时浏览器脚本不会启动，也不会更新报告。截图与像素检查只证明默认场景能够渲染，不替代三赛道试玩、性能基准、画面审美、手感或听感验收；API 全流程继续由 `npm test` 覆盖。
