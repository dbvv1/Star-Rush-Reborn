# 公路天空：现成 LDR 全景，不参与照明

公路模式使用 Kenney 的 Day 全景替代公路模式中重复的椭球云。Three 原生 `SphereGeometry`／`MeshBasicMaterial` 只显示背景：太阳、半球光、雾、曝光和所有物体材质不变，不设置 `scene.environment`。Canvas 与旧街机模式保原背景；贴图未解码或失败时仍保原渐变与云。

## 源与可修改项

- 作者：Kenney；[Skyboxes 1.0](https://kenney.nl/assets/skyboxes)，2026-07-14。官方 ZIP SHA-256：`ff339713105fe1b777ecafa0b66094e8fb1431cfcf88df761b9ad015aadf4028`。
- 原件：ZIP 的 `Skyboxes/skybox-day.png`，逐字保为 `source/kenney-day.png`；4096×2048、8-bit 调色板 PNG，带 `gAMA=0.45455`、无 ICC；导出按 sRGB LDR 色彩图消费，不是 HDR 辐射度。原包 CC0 许可保在 `source/LICENSE-Kenney.txt`，允许公开源与二改。
- 配方：`recipe.json` 保源 hash、目标尺寸、WebP 质量与水平朝向。`python3 assets/sky/prepare.py` 用 Pillow 读原件→RGB→Lanczos 2048×1024→WebP，导出后记录真实字节／hash。改源身份必须明确更新配方，不能把旧输出当新源。
- 不具备分层云或天气编辑。此路线适合固定白天天空；要单独移动云、昼夜或正确变化的环境照明，应另选可控分层／原生天空源，而不是从这张图猜辐射度。

`STAR_RUSH_SKY=baseline npm run build` 取旧天空对照；公路默认 `kenney`。正常驾驶的采用范围与最大差距见[当前品质](../../docs/quality.md)。

## 导入与成本起点

消费者显式 `SRGBColorSpace`、`toneMapped=false`、`fog=false`，避免把作者 LDR 再压一次 ACES；色彩转换由原生 Basic shader 完成。不使用 PMREM、环境贴图或额外天空灯。无 mip、双线性、横向 Repeat／纵向 Clamp；原作者也建议天空导入不生成 mip，但最终接缝仍须看正常转向。

水平旋转让画中太阳的方位与原灯相近；保原图约 50° 高度，而原灯约 57°，不能当物理一致天空。第二次修改可改输出规格或朝向，不改游戏灯光来迎合贴图。运行 WebP 为 22,504B；2048×1024 RGBA8 理论为 8MiB，另有解码图像与驱动开销；无隐式六面 cubemap。背景几何常驻一个球；旧云仅在实际解码完成后移除，山、海岸与灌木几何保留。

非持久 `pagehide`／图形上下文丢失释放该单元自有纹理、材质与球面；晚到解码不恢复已释放资源。持久页面保留原游戏的行为，不据组件测试宣称真实 BFCache 准入。

## 选型依据

同题比较了 Kenney 2026 原件、Screaming Brain Studios 的 CC0 Cloudy Skyboxes，以及 Jettelly 手绘天空。选 Kenney 的原因是当前风格接近、直接 2:1 源、公开源许可清楚和无新 shader／体积计算；不是行业质量排名。Jettelly 使用者报告六面图转全景时的 UP 朝向与 DOWN 尺寸问题，说明预览好看不能省掉投影核验；本单元未下载该包。Unity Asset Store 的免费手绘包采用其标准 EULA，不选为本仓公开保原件的默认来源。

来源：[Kenney 作者导入说明](https://kenney.nl/knowledge-base/game-assets-2d/how-to-use-skyboxes)、[SBS 作者包](https://opengameart.org/content/cloudy-skyboxes-0)、[Jettelly 作者页](https://jettelly.com/blog/more-skyboxes-this-time-blue-sky)、[原使用反馈](https://www.reddit.com/r/godot/comments/1l39bh4/heres_a_blue_sky_skybox_pack_100_free_under_cc0/)；消费者按锁定 Three 0.186.0 原生材质与 SphereGeometry 源码核；2026-10-27。
