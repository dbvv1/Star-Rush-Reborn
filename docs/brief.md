# Star-Rush-Reborn 设计任务书

**状态：持续品质提升**：master 随时可玩，持续改进竞速 AI、信息可读性、美术和音频；不加新赛道、新模式或新系统。感知待验只暂停对应判断，不暂停其他工程改进。设计变化直接改本文件；进度和阻塞写在 a1dbv TASKS。

## 目标

日系 ACG 风格的原创街机竞速。品质重点有三项：入弯、漂移、出弯的手感，赛中画面，以及声音给出的驾驶反馈。

## 已跑通的 a1dbv 模块

| 模块 | a1dbv 页面 | 本作品里的实现 |
|---|---|---|
| 赛车弯道 | [05 赛车类型](https://github.com/dbvv1/a1dbv/blob/main/domains/game-dev/05-gameplay-architecture.md#p112-racing-corner-loop) | 漂移进入、持续、反打、退出阶段，小喷与双喷 |
| 街机车辆控制 | [04 街机车辆](https://github.com/dbvv1/a1dbv/blob/main/domains/game-dev/04-client-modules.md#街机车辆先比控制模型再决定抽离规则) | 路径曲率、侧滑与标量推进分开 |
| 短音制作链 | [音频：短样本](https://github.com/dbvv1/a1dbv/blob/main/domains/game-dev/assets/audio.md#可复制制作起点短样本与现有程序声混合) | CC0 护栏碰撞样本，加载失败回退程序音 |
| 2D 菜单美术 | [2D](https://github.com/dbvv1/a1dbv/blob/main/domains/game-dev/assets/2d.md) | 三张选卡插画，从生成到 WebP、哈希路径和二改 |
| 场景作者链 | [3D 场景](https://github.com/dbvv1/a1dbv/blob/main/domains/game-dev/assets/3d.md#完整片段先做一个能走能看能改的场景) | 固定源的 Blender 往返与一次局部二改，见 [scene-authoring](scene-authoring.md) |

## 品质提升重点

1. **补浏览器验收**：加 `npm run smoke`，用 Playwright Chromium 的软件 WebGL 加载构建产物、开一局、截图并检查无控制台错误。云浏览器此前 WebGL 初始化失败，新版画面从未在云端验过，这是现在最大的验证缺口。Chromium 在 Dot 云端起不来（EPERM、SIGABRT）属于运行环境问题，不是授权问题：在自己的云容器里对本仓构建产物加 `--no-sandbox` 运行，或通过 a1dbv local-jobs 交给本机模型用真实浏览器跑，后者还能验真实 GPU 画面。
2. **默认启用 Kenney 护栏样本**：许可已清楚、工程验证已过，改为默认，程序音保留为回退；从源重新做一遍并合入，旧提交 `10f5f90` 不重传，旧壁画不在本次范围；同时改 `build.mjs` 的默认值、README 的构建开关一节和 `tests/rail-source-choice.mjs` 的默认断言。
3. **赛中画面的一条完整制作链**：选一组赛道材质或路边物件，用 a1dbv 制作链做出、接入、实机截图，再做一次修改。
4. **手感调整**：等“待人工验收”里的试玩反馈，按反馈改，不盲调。
5. **竞速 AI 与信息反馈**：先用实际无画面对局和已有客户端复现玩家可见的问题，再改最小完整环节。名次、完赛／DNF 状态和结算须一致；AI 参数或混音不为制造变化而盲调。

## 不做

新赛道和新模式、开放世界、拟真轮胎与悬挂、交通与天气、反作弊、服务器驾驶判定。
