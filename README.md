# Star Rush Reborn · 星跃飞车

日系 ACG 风格的原创网页公路竞速：制动入弯、稳定转向、出弯加速，三条闭环赛道，可与 AI 比赛或追逐本机幽灵。旧版漂移喷射、无尽巡游与好友房间保留在菜单的「旧版街机驾驶」。

## 运行

需要 Node.js 24 与 Python 3。

```bash
npm ci
npm run build
npm run dev
```

打开 http://localhost:4173 。同一局域网的其他设备用本机 IP 加 4173 端口访问；公网访问需要另外配置托管。`npm test` 运行全部测试。

## 玩法

- **赛道**：汐见海岸（1 圈约 1876m）、花见坂（2 圈共约 3242m）、星跃训练场（1 圈约 904m）。
- **快速比赛**：三名标注为 AI 的对手，实时名次，领先者完赛后 30 秒倒计时。
- **计时挑战**：保存本机最快幽灵、三段计时和圈速；训练模式有操作提示；自动试驾可随时用方向键接管。
- **旧版联机**：最多 4 人的邀请房间，准备、统一起跑、完赛候场、房主转移。多人比赛互不碰撞，联机时不能暂停，网络较差时对手位置会有延迟。
- **成绩**：公路驾驶仅保存本机记录与最快幽灵；旧版街机仍可主动上传在线榜单，两套成绩不混排。
- **车库与设置**：四种涂装、昵称、音乐与音效音量，支持手柄和多点触屏；画质按帧耗时自动调整。

没有 WebGL 2 的设备自动切换到简化的 Canvas 画面，驾驶和比赛逻辑相同。

## 操作

| 按键 | 作用 |
|---|---|
| WASD / 方向键 | 驾驶；S 刹车，低速时倒车 |
| V | 切换镜头 |
| P / Esc | 暂停 |
| R | 重开 |
| Backspace | 回正，计时 +2 秒 |
| F2 | 诊断信息 |

公路驾驶没有喷射、金币、加速带或跳台。旧版街机另用 Shift + 方向起漂，空格 / Q 或重按 W 小喷，E / C 氮气；两套驾驶不能在比赛中切换。

## 音乐与音效

发动机、换挡、风噪、轮胎、漂移、喷射、落地和碰撞音效由程序合成，配有原创电子配乐，音乐和音效分开调节。也可以用外语歌曲平台播放器（能播放什么取决于平台、地区和账号），或在浏览器加载本地歌单；本地音频不会上传。

## 构建开关

需要重新构建并刷新页面，未知值会报错。

```sh
# 护栏碰撞音：kenney（默认 CC0 样本）、synth-v1（本地合成）或 procedural（程序音）
STAR_RUSH_RAIL_SOURCE=procedural npm run build
# Canvas 兼容画面里的房屋固定锚点（on / off，默认 off）
STAR_RUSH_CANVAS_HOUSE_ANCHORS=on npm run build
# 转向牌：baseline（默认原粉）、navy-v1（深蓝）、navy-v2（深蓝加粗）
STAR_RUSH_SIGNBOARD_VARIANT=navy-v2 npm run build
```

## 素材与来源

- 选卡插画：原创 AI 插画，源图、提示词与处理配方见 [assets/course-art](assets/course-art/README.md)。
- 护栏碰撞样本：Kenney Impact Sounds（CC0）与本地合成候选，见 [assets/impact-audio](assets/impact-audio/README.md)。
- 路边转向牌：原创程序几何与可编辑配色／粗细，见 [assets/signboard](assets/signboard/README.md)。
- 其余人物、车辆、道路和场景由源码生成。Three.js（MIT）随客户端打包。

## 参考

- [Slow Roads 作者介绍](https://web.dev/case-studies/slow-roads)：Three.js 生成场景、调度与性能
- [固定时间步与插值](https://gafferongames.com/post/fix_your_timestep/)
- [腾讯策划公开的转向与漂移维度](https://speedm.qq.com/web201712/strategy-detail.shtml?newsid=9388344)
- [PlayCanvas 车辆物理](https://developer.playcanvas.com/tutorials/vehicle-physics/)、[Rapier 车辆控制器](https://rapier.rs/javascript3d/classes/DynamicRayCastVehicleController.html)：底盘与悬挂的后续研究方向，当前未使用
- [Forza 车辆物理说明](https://forza.net/news/forza-motorsport-drivatars-tire-physics)

开发约定见 [AGENTS.md](AGENTS.md)，设计任务书见 [docs/brief.md](docs/brief.md)。

### 同弯加速带对照

`STAR_RUSH_DRIVING_MODEL=legacy STAR_RUSH_COAST_FLOW=candidate npm run build` 构建海岸开局加速带编排候选；`unset STAR_RUSH_COAST_FLOW; npm run build` 恢复默认。`node tests/coast-flow-preview.mjs` 同时打开两个仅本机地址，选择练习再选择汐见海岸，以正常镜头驾驶；Ctrl+C 关闭。候选同时试验高速转向渐入及 Q／空格主动小喷，最大转弯能力与碰撞不变，尚未选为默认。

### 驾驶声音对照

`STAR_RUSH_DRIVING_AUDIO=sample-v1 npm run build` 使用录制引擎／轮胎循环，失败时各层独立回退；`unset STAR_RUSH_DRIVING_AUDIO; npm run build` 恢复原程序声。来源、许可、二改方法见 [驾驶声音素材](assets/driving-audio/README.md)。这不改变驾驶规则，音色与完整混音仍待实听比较。

### 公路与旧版街机

首页 `/` 默认公路驾驶；原 `/road` 链接继续打开同一版本。菜单中的「切换旧版街机驾驶」进入 `/legacy`，旧版菜单可返回公路。切换会整页重载，只在菜单进行。

公路驾驶只提供本机跑圈、计时与练习，不接在线房间或上传旧版榜单。已有 `road-v2` 记录、最快幽灵与操控设置继续使用；旧街机与 `road-v1` 数据不迁移、不删除。昵称、涂装和音量保持原有共享方式。幽灵是记录的车身位置，不是输入重演，不能跨驾驶规则混用。

`STAR_RUSH_DRIVING_MODEL=legacy npm run build` 可把根入口临时构建为旧街机对照，`/road` 和 `/legacy` 仍明确固定各自规则；取消该变量后重新构建恢复公路默认。`node tests/road-driving-preview.mjs` 提供两个临时本机对照地址，Ctrl+C 关闭。公路驾驶以地平线反馈为方向，原创轻量车体与抓地模型仍在调优。

### 比赛复盘旁置入口

打开 `/?raceReview=1`：赛前查看当前赛事目标，赛中查看圈数、已完成分段与剩余距离；结算查看每圈三个计时段，以及相对赛前本机最佳幽灵的分段差值。未完赛只显示已完成段，不补造整圈成绩。默认 `/`、旧街机与好友房间不启用此候选；圈数、驾驶、AI 和保存规则不变。
