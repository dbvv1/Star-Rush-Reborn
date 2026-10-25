# Star Rush Reborn · 星跃飞车

日系 ACG 风格的原创网页街机竞速：漂移、集气、喷射，三条日式街景赛道，可以和 AI 对手比赛，也可以邀请朋友联机。

## 运行

需要 Node.js 24 与 Python 3。

```bash
npm ci
npm run build
npm run dev
```

打开 http://localhost:4173 。同一局域网的其他设备用本机 IP 加 4173 端口访问；公网访问需要另外配置托管。`npm test` 运行全部测试。

## 玩法

- **赛道**：汐见海岸（1 圈约 1876m）、花见坂（2 圈共约 3242m）、星跃训练场（1 圈约 904m）；另有无尽巡游。
- **快速比赛**：三名标注为 AI 的对手，实时名次，领先者完赛后 30 秒倒计时。
- **计时挑战**：保存本机最快幽灵、三段计时和圈速；训练模式有操作提示；自动试驾可随时用方向键接管。
- **联机**：最多 4 人的邀请房间，准备、统一起跑、完赛候场、房主转移。多人比赛互不碰撞，联机时不能暂停，网络较差时对手位置会有延迟。
- **排行榜**：按模式和赛道分开，主动上传；另有本机记录。旧版成绩不与 Reborn 混排。
- **车库与设置**：四种涂装、昵称、音乐与音效音量，支持手柄和多点触屏；画质按帧耗时自动调整。

没有 WebGL 2 的设备自动切换到简化的 Canvas 画面，驾驶和比赛逻辑相同。

## 操作

| 按键 | 作用 |
|---|---|
| WASD / 方向键 | 驾驶；S 刹车，低速时倒车 |
| Shift + 方向 | 起漂；反打或松键收漂 |
| 空格 / Q，或重按 W | 小喷 |
| E / C | 氮气 |
| V | 切换镜头 |
| P / Esc | 暂停 |
| R | 重开 |
| Backspace | 回正，计时 +2 秒 |
| F2 | 诊断信息 |

有效漂移给限时小喷，长漂移可以双喷；漂移集气最多存两瓶，大喷持续 3.2 秒。支持 CWW / WCW、加速带、空喷和落地喷。手感参数是本作的原创调校。

## 音乐与音效

发动机、换挡、风噪、轮胎、漂移、喷射、落地和碰撞音效由程序合成，配有原创电子配乐，音乐和音效分开调节。也可以用外语歌曲平台播放器（能播放什么取决于平台、地区和账号），或在浏览器加载本地歌单；本地音频不会上传。

## 构建开关

需要重新构建并刷新页面，未知值会报错。

```sh
# 护栏碰撞音：kenney（默认 CC0 样本）、synth-v1（本地合成）或 procedural（程序音）
STAR_RUSH_RAIL_SOURCE=procedural npm run build
# Canvas 兼容画面里的房屋固定锚点（on / off，默认 off）
STAR_RUSH_CANVAS_HOUSE_ANCHORS=on npm run build
```

## 素材与来源

- 选卡插画：原创 AI 插画，源图、提示词与处理配方见 [assets/course-art](assets/course-art/README.md)。
- 护栏碰撞样本：Kenney Impact Sounds（CC0）与本地合成候选，见 [assets/impact-audio](assets/impact-audio/README.md)。
- 其余人物、车辆、道路和场景由源码生成。Three.js（MIT）随客户端打包。

## 参考

- [Slow Roads 作者介绍](https://web.dev/case-studies/slow-roads)：Three.js 生成场景、调度与性能
- [固定时间步与插值](https://gafferongames.com/post/fix_your_timestep/)
- [腾讯策划公开的转向与漂移维度](https://speedm.qq.com/web201712/strategy-detail.shtml?newsid=9388344)
- [PlayCanvas 车辆物理](https://developer.playcanvas.com/tutorials/vehicle-physics/)、[Rapier 车辆控制器](https://rapier.rs/javascript3d/classes/DynamicRayCastVehicleController.html)：底盘与悬挂的后续研究方向，当前未使用
- [Forza 车辆物理说明](https://forza.net/news/forza-motorsport-drivatars-tire-physics)

开发约定见 [AGENTS.md](AGENTS.md)，设计任务书见 [docs/brief.md](docs/brief.md)。
