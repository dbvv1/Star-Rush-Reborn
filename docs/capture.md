# 固定状态拍摄

拍摄模式为灯光、材质与场景改进保留可重复的同机位基线；**不改车控，不代替真人驾驶、声音或硬件性能验收**。仅 `/`、`/road` 的显式 `shot` 参数启用，`/legacy?shot=…` 报错。没有 `shot` 时仍是正常 rAF、输入和设备存档，不暴露拍摄 API。

## 命名机位

统一 1280×720、DPR 1、高画质、原 `road-v2`、固定薄荷涂装、练习模式、无幽灵；保留原 HUD 与路线提示。表里的 `t` 从点击开始计，包含原 3.05 秒倒计时。

| 名称 | 原赛道／时间／种子 | 相机 | 用途 |
|---|---|---|---|
| `coast-chase` | 汐见海岸／28 秒／73121 | **原正常追尾相机**，竖直 FOV 62° | 约 479 米弯中驾驶视角，车尾、路面与背景层次 |
| `coast-full-bend` | 同上，同一车辆状态 | 固定样条坐标 eye `(480,130,100)`，target `(460,-55,0)`，FOV 58° | 观察约 320–680 米整弯与路肩—地形关系 |
| `academy-depth` | 训练场／14 秒／95276 | 原正常追尾相机，FOV 62° | 约 181 米平坦训练场，作为远景与空间层次较弱的固定观察点 |

样条坐标为 `(沿路米数, 横向米数, 道路以上高度)`；最终世界坐标随每帧 JSON 保存。机位表唯一来源为 [`capture-presets.mjs`](../capture-presets.mjs)。它们是**本项目基线，不是从地平线截图量得的机位**；完整整弯构图与最弱视角仍须看真实图确认，再固定作前后比较。几何投影检查中，整弯中心线 320–680 米落在画面内，但这不证明树／建筑遮挡或最终画面合格。

## 开始、推进与退出

```text
/?shot=coast-chase
/?shot=coast-full-bend&seed=73121&t=28
/?shot=academy-depth&frames=120
```

- `seed`：无符号 32 位整数。默认复用正式赛道原有种子；它控制装饰与视觉随机，不改变赛道样条。
- `t`：0–120 秒，四舍五入到 60 Hz tick，JSON 同时保留实际 `t` 与 `tick`。脚本报告另保留 `requestedTime`。
- `input`：`road-tour` 为游戏已有自动试驾控制器；`idle` 不输入；`accelerate-brake` 在虚拟 3.05–7 秒给油、7–9 秒制动。均走同一车体、接触和计时，不传送车辆、不无敌，不声称是人类驾驶录像。
- `frames`：1–600 帧，整个序列不得超过 120 秒。第一帧是 `t`，之后每次确认推进 1/60 秒。
- 缺省值来自机位表；空值、非法机位／输入、重复参数、非有限或越界数值会显示错误，不悄悄退回普通比赛。

主循环使用同一个时钟：正常为真实时间；拍摄为整数 tick 虚拟时间。每个 60 Hz presentation tick 调用原 120 Hz physics；等待网络、后台节流、截图耗时不增加模拟时间。预热只重复绘制已准备好的场景 **12 次，不推进车辆、粒子或相机阻尼**。天空贴图完成解码后才准备拍摄；失败会报错，不拿加载占位与成功贴图混做前后对照。Canvas fallback 如实标软件，不作为 Three 灯光基线。

完成时 `window.__shot.ready === true`，包含原始 renderer、分类、机位／车辆状态、时钟、天空、分辨率与范围。序列脚本截取后调用 `await window.__shotNext()`；`frame` 从 0 递增，末帧 `done: true`，再次调用不会超前。API 不在正常模式中存在。

拍摄禁用真实键鼠／手柄干扰与实时音频；它不提供音画同步验证。存档、设置和名字在该页面的独立内存中，不读写玩家现存记录。点击「返回正常游戏」或调用 `__shotExit()` 去除拍摄参数后**整页重载**，恢复原时钟／输入／设置；离页清理拍摄 API，BFCache 返回时重载，避免半初始化状态。

## 截图与逐帧脚本

在独立终端从仓库根目录运行：

```sh
npm ci
npm run build
npm run smoke:serve
# 使用上一步打印的 loopback URL，不连接生产数据。
npm run capture -- http://127.0.0.1:PORT outputs/coast-chase coast-chase --repeat
npm run capture -- http://127.0.0.1:PORT outputs/coast-bend coast-full-bend --repeat
npm run capture -- http://127.0.0.1:PORT outputs/academy-depth academy-depth --repeat
npm run capture -- http://127.0.0.1:PORT outputs/sequence coast-chase --t 24 --frames 180
```

`outputs/` 父目录须存在，具体输出目录须是新目录，不能复用旧通过结果。脚本默认运行自己的 **sandbox Chromium**；无硬件 GPU 可显式加 `--software`（SwiftShader），需要有窗口加 `--headful`。已装 Chromium 可用绝对路径环境变量 `STAR_RUSH_CAPTURE_CHROMIUM` 指定。脚本不自动换浏览器、关闭 sandbox 或恢复旧会话；启动被拒只记录失败。

每帧输出整页 PNG、仅场景 PNG、JSON；报告记录实际浏览器、请求参数、源码 commit／dirty 状态和服务端脚本 SHA-256，并要求服务脚本与本地所构建的 road bundle 一致。仅场景像素须非纯背景，HUD 文字不能冒充渲染成功。`--repeat` 创建两次独立上下文，从同一初始条件开局，对照每帧像素哈希与车辆／相机元数据。CSS 动画冻结、locale 与时区固定；跨浏览器、跨驱动、跨系统字体不保证逐像素一致。

文件名只有三类：`software`、`unknown`、`gpu`。**不是 SwiftShader，不等于硬件 GPU。** 原始 `WEBGL_debug_renderer_info` renderer／vendor 和 masked renderer 不改写；无扩展时保留 null，默认 unknown。真 GPU 验证者另保存浏览器 GPU 诊断的独立证据，使用 `--hardware-evidence gpu-evidence.json`：

```json
{"hardwareAccelerated": true, "renderer": "与当次原始 renderer 完全一致", "source": "本机浏览器 GPU 诊断截图或报告标识"}
```

脚本要求证据 renderer 精确匹配；已识别的软件渲染不能被该标记改成 GPU。此文件必须来自实际核验，不能由“非软件字符串”推断。相同分类、同一浏览器／驱动、同版本／种子／时间／输入／机位才能比较；定灯光和材质以真 GPU 图为准。商业游戏参照图只留本地。

## 当前范围

当前源码已有半球光、暖方向光与 PCF 阴影、ACES 色调映射、雾和 Kenney LDR 天空全景；全景不是 `scene.environment`，没有 HDRI 环境照明和屏幕后处理链。本变更没有改变上述灯光或材质。

CPU 测试覆盖解析失败、固定 dt／RNG、重复状态与相机、帧握手、内存隔离、普通／legacy 启动和离页清理。它不等于像素验证。实际浏览器同机位双拍、退出后操作、完整序列与真 GPU 基线仍是采用前的必验项；没有 ready 帧不能记作成功。
