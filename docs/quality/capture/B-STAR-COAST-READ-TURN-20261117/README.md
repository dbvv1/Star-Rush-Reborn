# B-STAR-COAST-READ-TURN-20261117 第一处街区弯转向牌 A/B

状态：**默认 build 与 `navy-v1` build 各一组真 GPU headless 同机位图已拍，两份实际下发 bundle 与各自构建一致且互不相同；判断为 `navy-v1` 更早、更清楚，但本轮没有整局与帧耗，也没有非作者盲看。**

## 结果一句话

在同一条 `coast-chase` 机位、同 seed／输入／tick 下，目标牌（`s=405 m`，右肩左转牌）在 `t=22.0` 都可见；默认粉箭条与奶油面板的对比约 **2.38:1**，`navy-v1` 深蓝约 **6.64:1**。作者在 1× 像素上看，默认约到 `t≈22.0`（弯前 23 m）才能稳定读成左转，深蓝约 `t≈21.0`（弯前 42 m）就能读出，`t=20.8` 时三支箭头也已可分开；画面最先抢眼的是约 `s=390–400 m` 的港口门架，但它不编码方向，也没有挡住牌面。这是作者目视，不是盲评。

## 固定条件

- 源码：`1796e9fc65c1af64415ecbf151432f0e273c1c3c`（base_ref 与 result_branch 起点）；构建前 tracked clean；未改游戏源码、相机、碰撞、道路、操控或资产。
- 构建：`node build.mjs` 两次独立执行，只改 `STAR_RUSH_SIGNBOARD_VARIANT`。默认省略变量（baseline），第二遍 `STAR_RUSH_SIGNBOARD_VARIANT=navy-v1`。两次目标构建实际退出均为 0。准备阶段先跑根目录与 `experiments/rapier-road-comparison` 的 `npm ci`；在此之前的一次构建因实验目录未装依赖退出 1，补装后重跑成功，失败那次的半成品已被完整重建覆盖，未进入任何回执。
- 服务：用 `tests/smoke-server.mjs` 导出的 `startSmokeServer` 同时服务两份 `dist` 快照（生产 Worker、内存 SQLite、仅 loopback），没有用会先重构的 `npm run smoke:serve`。`/road/game.js` 均 200，实际取回 SHA-256 与各自构建逐字节一致，两份不同。
- 拍摄：Playwright 完整 Chromium `chrome-win64`（非 headless shell）`headless`，`channel=chromium`，实际 argv 含 `--headless`、`--enable-automation`，未加 `--use-angle=swiftshader`／`--disable-gpu`，没有可见窗口、键鼠或桌面操作。原始 renderer：`ANGLE (NVIDIA, NVIDIA GeForce RTX 5070 (0x00002F04) Direct3D11 vs_5_0 ps_5_0, D3D11)`；SystemInfo `glRenderer` 也指向 RTX 5070 D3D11。开始前核过本机没有其它 headless Chromium／Playwright 进程，四段采集在本单元内连续执行（每段独立启动浏览器），结束后复查无残留 headless 进程。
- 复跑锚点：`t=22` 实测 `player.s=381.765 m`，与任务给出的固定 v12 无画面复跑 `381.76 m` 一致；序列里 `t=23.267` 时 `404.869 m`、`t=23.283` 时 `405.176 m`，与任务给出的 `t≈23.28` 越过 405 m 一致。
- 规格：1280×720、DPR 1、high 画质、Mint Comet、练习 circuit、无幽灵、静音、60 Hz 虚拟钟、120 Hz 物理、12 次不推进预热；输入为游戏内 `road-tour` 自动试驾。

## 交付图

入口统一为 `/road/?shot=coast-chase&seed=73121&input=road-tour&t=<start>&frames=<n>`；单帧时刻由序列帧号取得。`default/`、`navy/` 下的原始图均为页面直接导出的 PNG，没有缩放或调色；对比合成图只做缩略、裁切和左上角版本／时刻标注。

| 时刻 t | tick | 车辆 s（m） | 相机深度（m） | 默认图 | navy 图 |
|---|---|---|---|---|---|
| 20.80 | 1248 | 358.99 | 56.1 | `default/coast-chase-t20.80.png` | `navy/coast-chase-t20.80.png` |
| 21.50 | 1290 | 372.70 | 42.3 | `default/coast-chase-t21.50.png` | `navy/coast-chase-t21.50.png` |
| 22.00 | 1320 | 381.76 | 32.8 | `default/coast-chase-t22.00.png` | `navy/coast-chase-t22.00.png` |
| 23.00 | 1380 | 400.01 | 14.2 | `default/coast-chase-t23.00.png` | `navy/coast-chase-t23.00.png` |

- `compare-t22-320.png`：整帧 320 宽，上＝默认、下＝`navy-v1`（`t=22.00`）；两格左上角均标出版本与时刻。
- `compare-sequence-320.png`：整帧 320 宽，左列＝默认、右列＝`navy-v1`；四行自上而下 `t=20.80`、`21.50`、`22.00`、`23.00`；每格左上角均标出版本与时刻。
- `compare-sign-320.png`：`t=22.00` 牌面附近 320×180 的 1:1 像素裁切，上＝默认、下＝`navy-v1`，最能看出箭条对比；两格左上角均标出版本与时刻。
- `compare-sign-sequence-320.png`：牌面 1:1 像素裁切，左列＝默认、右列＝`navy-v1`；四行自上而下 `t=20.80`、`21.50`、`22.00`、`23.00`；每格左上角均标出版本与时刻。
- `sign-detail-4x-t22.png`：`t=22.00` 牌面 4 倍放大，上＝默认、下＝`navy-v1`，仅作细节辅证；上下均标出版本与时刻。

原始图 SHA-256、逐图相机／车辆状态、构建与下发摘要见 `manifest.json`；各步骤实际退出码和未跑项见 `run-exit.json`。

## 判断依据

- **同一 tick 对照**：两版序列每一帧的 `tick` 与 `player.s` 完全相同；`t=22.0`、`22.5`、`23.0` 在独立页面加载、不同序列里重拍得到逐字节相同的 PNG，说明对照不是时序噪声。
- **bundle 差异**：两份 `dist/client/road/game.js` 等长，只有 12 个字节不同，正好是两处箭条颜色 `#bd8faf` → `#415873`；`dist/server/index.js` 另差 36 字节（3 份嵌入客户端各 2 处同一对字面量，3×2×6）。物理、相机、放置和其余字节一致。这是现成 `navy-v1` 配色生效，不是新技法：几何、位置、尺寸和阴影都没变，唯一变量是颜色；深蓝在奶油底上的相对亮度差更大，缩到十几像素时仍保留箭条轮廓，粉色先糊进底色。
- **对比度**：按投影出的面板四边形取面板底色（198,193,160）与箭条主色，算 sRGB 相对亮度比；默认粉（152,109,129）2.38:1，navy（25,57,78）6.64:1。这里**未设固定阈值**，也没有套用 WCAG 等外部判据：两个比值只作两版之间的相对参考，可读性以作者 1× 目视为准；取样方法见 `manifest.json` 的 `contrast`。
- **抢读**：约 390–400 m 的橙／青港口门架在 `t=21.5–22.3` 占据画面上部、最先吸引视线，但不表示弯向；目标牌在门架下方偏右、画面中部偏右（`t=22` 牌心约在画面 40% 高度），没有被遮挡。左侧自动售货机样式的粉色板、右侧车库门横纹与遮阳篷斜纹都在牌附近，但没有出现第二个可读的转向标志。画面里另有两三处同款牌在远景边缘的极小像素随配色一起变化（全场景同款牌统一替换），但都小于可读尺寸。下一个同款 `signBoard` 在 `s=445`（本弯之后）；另一处黄色 `turnSign` 在 `s=500`，也在本弯之后。

## 构建 identity

| 档 | road bundle SHA-256 | Worker SHA-256 | 实际下发 `/road/game.js` SHA-256 | 匹配 |
|---|---|---|---|---|
| 默认 baseline | `b7780ce70b86f885d920e25767c404b40f703a546dc1ec5577d5e7536a5e26d0` | `ba82a1b5a7820c180f7ae62f8d65f6585b80c447beaee820b8059d41c7a1dae8` | 同左 | 是 |
| `navy-v1` | `ccf3d54d9e00aa0b8b5a8dc71e273f5367071cfaf429ec07f41b2c51e28ac7fa` | `adc0804035dcbc5e964ba2751087a95093c8b45c6f487864c9801326c120c16b` | 同左 | 是 |

实际退出：两次构建 0；单帧采集 0；三段序列（19.5–21.1 s、21.0–22.2 s、22.0–23.5 s）均 0。浏览器侧无 pageerror、console error、失败请求或 4xx/5xx。

## 未验证与边界

- 只验 `coast-chase` 机位和 `s=405 m` 这一个左转牌，不代表全赛道或其它弯。
- 可读时刻是作者目视 1× 像素的结果，不是非作者盲评；「更早」的秒数和米数受个人判读影响。
- 没有跑拟发布入口的真 GPU 整局与帧耗；本卡不据此换默认、不部署、不提交。
- 拍摄模式不验证手感、声音或硬件性能；无 HUD／音画同步结论。
- 未改默认配色；采用与否由方向会话决定。