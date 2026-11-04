# Star-Rush 固定机位软件 WebGL 实拍（修复后单机位验图再补全）

- 任务：B-STAR-CAPTURE-REPAIR-20261104（本文件只记录本轮实际跑过的结果）
- 源码：commit `5962a43d851575220a0a67c6a17b5e7b218a4e9c`，tree `2892cc0b4ea668da902740845718781954cf74de`
- 时间：2026-11-04 18:54:42Z–18:57:24Z（预览、三机位串行拍摄与清理）
- 结论：三机位全部达到本卡门槛；`coast-chase` 先单独通过后才开始第 2、3 机位。没有失败机位需要保留。

## 构建与环境

- 依赖：只使用本机已存在的 Node `v24.22.1`、npm `10.9.8`、Python `3.13.5`、Playwright `1.64.1`，以及两份锁文件匹配的已装依赖（根 `package-lock.json` 与 `experiments/rapier-road-comparison/package-lock.json`）；本轮未安装、升级或改动依赖与锁文件。
- 构建：`npm run build`，采用任务规定的默认开关（`DRIVING_MODEL=road`、`COAST_FLOW=baseline`、`SIGNBOARD_VARIANT=baseline`、`SKY=kenney`、`COAST_AMBIENCE=off`、`RAIL_SOURCE=kenney`、`DRIVING_AUDIO=procedural`、`CANVAS_HOUSE_ANCHORS=off`）。构建前后 tracked 工作树均 clean。
- 构建 identity：`dist/server/index.js` SHA-256 `3773376e17375f2361aace3b93610b0f19b9b6425fad3adf0c09bfced5db2f46`；`dist/client/road/game.js` SHA-256 `7e82cffce610c18afaa7399814553ea9a4d970621f417f8d5c4e53c377cc7544`。服务端实际下发的 road bundle 与该本地构建一致。
- 浏览器：本机 Google Chrome for Testing `156.0.8078.4`（Playwright revision 1248），headless；实际 argv 含 `--headless`、`--no-sandbox`、`--enable-unsafe-swiftshader`、`--use-angle=swiftshader`、`--enable-automation`，并保留 Playwright 默认参数。没有换浏览器或改外层沙箱。
- 预览：只启动一个 `node tests/smoke-server.mjs`，其打印的 `STAR_SMOKE_LOOPBACK=http://127.0.0.1:4141` 作为 BASE；Worker 为 `dist/server/index.js`，数据库为内存 SQLite，未访问生产。

## 结果

固定规格：1280×720、DPR 1、高画质、`road-v2`、薄荷涂装、练习模式、无幽灵、静音（`--mute-audio`）、60 Hz 虚拟时钟、12 帧静态预热、只导出离屏场景画布 PNG；输入为游戏内 `road-tour` 自动试驾，不运行 smoke／smoke:backlog。

| 顺序 | 机位 | 实际 URL 路径与参数 | seed／t／tick | 相机 | report.passed | 命令 exit | 重复像素一致 |
|---|---|---|---|---|---|---|---|
| 1 | `coast-chase` | `/road?shot=coast-chase&seed=73121&t=28&frames=1&input=road-tour` | 73121／28／1680 | 原追尾 camMode=0，FOV 62° | true | 0 | 是 |
| 2 | `coast-full-bend` | `/road?shot=coast-full-bend&seed=73121&t=28&frames=1&input=road-tour` | 73121／28／1680 | 固定样条 eye=(480,130,100)、target=(460,-55,0)，FOV 58° | true | 0 | 是 |
| 3 | `academy-depth` | `/road?shot=academy-depth&seed=95276&t=14&frames=1&input=road-tour` | 95276／14／840 | 原追尾 camMode=0，FOV 62° | true | 0 | 是 |

三机位均为 `backend=webgl2`、`classification=software`、`errors=[]`；每机位两次独立上下文各 1 帧，两轮的解码像素、场景像素、相机、车辆与渲染器元数据逐项一致。PNG 均解码为 1280×720，量化颜色桶数大于 100 且最大单色占比低于 99%（非纯背景）。

| 机位 | 场景 PNG 文件 SHA-256 | 解码像素 SHA-256 | 颜色桶／最大占比 |
|---|---|---|---|
| `coast-chase` | `92e998267457364cf312e0fae05c06005d48cfca2b9f90b51e4fc03a1e099f35` | `7cd76cda13ccfc0ad380a8d2c213523bfffd118d07c040ab2b2f43fa60daa2d1` | 1862／0.3302 |
| `coast-full-bend` | `9947c3d8c2e8ff83b890a24c7247580b46cde4903ca6d68b11030b90ff57636f` | `fc2c4ecb08b12cdb481f4063437b89fa67c4380b95767f644bea08b8bb7399e5` | 1108／0.3403 |
| `academy-depth` | `dccde987e46690022df7649825731d26a19f048c99a945f9510abcf2a495053a` | `76e92d00eaf64287de380af318adfba13f9f567d27dc09e12463d6457d6bcf15` | 1931／0.3362 |

渲染器原串（两次运行一致）：

- renderer：`ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)`
- vendor：`Google Inc. (Google)`
- masked renderer：`WebKit WebGL`

## 串行、进程与清理

- 第 1 机位单独完成后，才按表串行执行第 2、3 机位；每条命令实际 exit 0，且该次 Playwright 浏览器先报告 `exitCode=0, signal=null` 后才开始下一条。
- 浏览器启动与退出（Playwright `DEBUG=pw:browser` 进程事件，完整 argv 与可执行路径未公开）：第 1 机位 PID 99648，18:55:12.516Z 启动，18:55:32.044Z 退出；第 2 机位 PID 89012，18:55:57.959Z 启动，18:56:18.427Z 退出；第 3 机位 PID 44912，18:56:32.255Z 启动，18:56:51.380Z 退出。
- 预览 Node 进程（PID 88704）由本轮启动并在拍摄结束后关闭；观察到进程不再存在，4141 端口无 LISTENING。
- 旧卡 `48d0c34` 的 0 PNG 失败事实与旧目录未改动，未作为本卡基线。

## 范围与限制

- 本轮只证明固定 commit／tree 在 headless 软件 WebGL2（SwiftShader）下的三机位固定状态出图门槛，不构成硬件 GPU、整局流程、驾驶手感、声音或画面判优的结论。
- 每机位只有 1 帧、重复两次；不是完整序列，也没有人工视觉验收。
- 本轮未改游戏源码；未重跑 `npm test`，验收以本卡 capture 门槛为准。
- `report.json` 与逐帧 JSON 为公开脱敏派生物：移除了本机可执行路径、完整 argv 和嵌入的 base64 PNG 数据；保留 renderer／vendor 原串、Chromium 版本、规定参数、相对文件名与全部哈希。它们不是未修改的原始日志。

## 文件

- `manifest.json`：逐机位完整 URL、源码／构建 identity、seed／t／tick、相机与车辆状态、PNG 尺寸与哈希、起止 UTC、浏览器 PID 与退出、清理事实。
- `coast-chase/`、`coast-full-bend/`、`academy-depth/`：每机位两轮场景原图（`.png` 与 `-scene.png`）、逐帧 JSON 与 `report.json`。
- `artifact-hashes.json`：本目录公开文件的字节数与 SHA-256。
