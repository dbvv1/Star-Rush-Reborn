# 旁置试玩入口

- `/`：现有公路默认；`/road/`：同一公路入口；`/legacy/`：旧街机入口，旧存档保留。
- `/rapier/`：独立 Rapier 同弯操控候选；W 油门、S/空格刹车、A/D 转向、X 倒车、R 复位、Esc 暂停。支持复位、暂停、退出和回正式公路，不写成绩或存档。手感尚未判为更好，不替换默认。
- `/?shot=coast-chase`：显式固定状态采集入口，不是普通比赛。
- 海岸环境声源码与资源已接收，`STAR_RUSH_COAST_AMBIENCE` 默认为 `off`。启用的构建也只作用 `/road/`；默认入口、其他赛道保持原混音。听感与完整混音待人工验收。

## 工程验证与构建

先 `npm ci`，再 `npm ci --prefix experiments/rapier-road-comparison`。
依次运行 `npm test`、`npm test --prefix experiments/rapier-road-comparison`、`npm run build`、`npm run test:backlog-routes`。这些命令会写同一个构建目录，不得并行运行。

固定源码的无头门槛：`npm run smoke:backlog -- outputs/<本轮独占目录>`。只启动一个 headless Chromium，按顺序检查默认、公路、旧街机、Rapier 和显式 capture 入口；内部页面输入仅用于 smoke。保存原始 renderer 信息与分类、场景图、路由结果及资源关闭错误。浏览器完整进程退出回执由执行端另外核验；此脚本不能证明其他旧进程退出。

CPU 断言不是画面、驾驶手感或听觉验收，未取得浏览器回执不得以本页代替 smoke。
