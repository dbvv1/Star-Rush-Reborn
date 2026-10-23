# Star Rush Reborn · 星跃飞车

日系 ACG 风格的原创网页街机竞速游戏。Three.js 0.186 负责三维渲染；独立驾驶核心与比赛逻辑支持后续增加不同驾驶配置。参考 QQ 飞车公开的漂移、喷射玩法，也研究成熟网页竞速和 Forza 的设计方向。本项目没有接入商业游戏源码或专有物理系统，不声称达到 AAA 游戏品质。

长期目标是持续打磨高质量、高细节的竞速体验，并实践 AI 参与代码、美术、音乐与音效制作的完整链路。资源来源可组合程序化、AI 生成和许可清楚的现成素材，按实际游戏品质、可修改性和运行成本选择。

## 本地启动

需要 Node.js 24（预览使用内置 SQLite）与 Python 3。

```bash
npm ci
npm run build
npm run dev
```

打开 http://localhost:4173 。本地预览提供完整的排行榜和房间 API，数据库首次启动自动创建。另一台设备可通过同一局域网中的本机 IP 和 4173 端口访问；公网发布需要单独配置托管。

```bash
npm test
```

当前版本的人物、车辆、道路和日式场景由源码生成，游戏音效与内置原创配乐使用程序合成，没有额外的私有素材包。大厅三赛道选卡已接入原创 AI 插画，真实路线和文字仍由程序绘制；源图、提示词、版本关系与处理配方见 [选卡资源记录](assets/course-art/README.md)。这是现有实现和可运行基线，不限制后续接入独立美术或音频资源。仓库包含完整源代码、依赖锁文件、测试和数据库迁移；在线排行榜/房间运行数据及个人本地音乐不属于源码。

## 本版内容

- 三条闭合赛道：汐见海岸 1 圈约 1876m；花见坂 2 圈共约 3242m；星跃训练场 1 圈约 904m。弧长采样的闭合样条、起跑直道、组合弯、分区和轻微高差。无尽巡游作为次要模式保留。
- 快速比赛有三个明确标注 AI 的非接触对手、实时名次、领先者完赛后 30 秒倒计时和结果表。AI 使用独立路线控制，不冒充联网玩家。
- 计时挑战保存本设备最快幽灵、三段计时和圈速；训练模式有操作提示；另有自动试驾，可通过方向键接管。
- 新大厅、实际路线缩略图、车库的四种同底盘涂装、昵称、设置、标准手柄和多点触屏操作。
- Three.js 卡通材质、实例化复用、方向光阴影、雾与天空，日式商店/校舍/车站/电车/鸟居/灯笼/樱花等原创几何场景。自动画质根据帧耗时渐进调整分辨率和阴影。
- 无 WebGL 2 时使用 Canvas 透视兼容画面；兼容模式使用同一份驾驶和比赛逻辑，但画面明显简化。

## 操作和驾驶

WASD / 方向键驾驶，S 刹车和低速倒车，Shift 加方向起漂，反打或松键收漂；空格 / Q 或重新按 W 使用小喷；E / C 使用氮气。V 切镜头，P / Esc 暂停，R 重开，Backspace 回正并计时 +2 秒，F2 查看诊断。

固定 120 Hz 逻辑，渲染姿态插值。`vehicle-core.js` 将路径曲率、车身侧滑与标量推进分开：喷射改变速度大小，不直接把轨迹投向车头或赛道。转向仍能改变路径，漂移有进入、持续、反打与退出阶段。方向和漂移输入允许先后按并带缓冲，摇杆轻推也能起漂。

有效漂移提供限时小喷，较长漂移可双喷，漂移集气装瓶最多两瓶。大喷持续 3.2 秒；支持 CWW / WCW、加速带、空喷及落地喷。具体参数属于本游戏的原创街机调校，并非 QQ 飞车的专有参数。

碰撞在道路平面内使用 OBB、质量/惯性、法向与切向冲量、位置修正和跳跃高度判定；护栏擦碰保留切向运动，路锥/路障能移动旋转。没有血量扣除或撞击直接失败。支持倒车、手动及卡住自动回正。这不是带轮胎/悬挂模型的完整三维刚体车辆仿真。

## 联机和记录

D1 + `/api/rooms` 实现最多 4 人邀请房间、准备、统一起跑时间、位置/涂装/喷射快照、完赛、候场、退出与房主转移。每个页面独立身份，复制标签页不会共用一个车手。HTTP 快照最高每 125ms 一次，往返时间估计、170–350ms 自适应插值缓冲、最多 120ms 外推和本地连续渲染。

多人是非接触竞速：各自计算赛道碰撞，路障位移不跨客户端同步；在线不暂停。不是专用服务器和低延迟传输架构。按用户要求不做反作弊或服务器驾驶判定。远端状态的实际顺滑度仍取决于网络。

在线排行榜按模式和赛道分开，跑圈比较时间，无尽比较里程，玩家主动上传；另有本机记录。Reborn 赛道标识独立，旧版成绩不会混排。

## 音乐与音效

分层发动机、换挡、风噪、轮胎摩擦、漂移、短喷、大喷、组合喷、落地和碰撞音效；音乐与音效分开控制。保留原创电子器乐、经典外语歌曲平台播放器和浏览器本地多文件歌单。本地音频不上传；第三方平台的播放范围由平台/地区/账号决定，不打包商业音源，也不推荐中文歌。

## 美术与音频的后续制作

**按游戏品质需要实际接入资源，验证从制作到运行、再到修改的整条链路。** 现有程序化场景与合成音频可保留、混用或逐步替换，不要求全面换掉，也不把“全部代码生成”作为开发约束。

- **美术**：可从一组风格一致的赛道标识、贴图／材质、UI 图标或特效纹理切入，再按需要扩展车辆、场景模型与动画。AI 可参与概念、生成、变体和批处理；检查游戏中实际尺寸、轮廓、透明边缘、色彩与道路辨识，避免只看生成预览。
- **音乐与音效**：可尝试 AI 生成或许可清楚的循环配乐、漂移／喷射／碰撞素材，与程序化发动机和混音结合。实际试听循环接缝、事件时机、响度层次和疲劳感；平台播放器或个人本地歌单不能替代随游戏交付的音频制作与接入。

先定风格和游戏内用途，再制作候选、处理格式与压缩、接入加载和构建、在真实浏览器观察／试听，并做一次后续修改。保留有用的源文件、生成提示与来源许可说明，记录关键返工和取舍；换资源时保住玩法、设置和性能，加载失败有可理解的反馈或合适的降级。发布所需素材应随部署正确交付，不能只留本机文件或临时生成链接。

当前构建以打包代码和内嵌页面为主。已完成一条窄 UI 美术链：三张选卡插画制作 → WebP 处理 → 同源哈希资源路径／Worker 打包 → 实际大厅显示 → 海岸图片二改与同布局复验。当前运行图合计 40,588 字节，加载失败保原卡；没有因此新建通用资产平台。插画是概念性菜单美术，不是游戏截图或赛道地图；赛中三维材质、独立音频资源和发布端验收仍未完成。AI 生成不是品质保证，采用结果以实际画面、声音和游玩体验为准。

## 构建与验证

Node 24（本地 API 测试使用内置 SQLite），`npm ci`，`npm run build`，`npm test`。预览由 Sites 托管的监督程序运行 `npm run dev`。生产是 `dist/server/index.js` Worker ESM，绑定 D1 `DB`，数据库迁移 `drizzle/` 保持原样。

构建器 esbuild 打包客户端和 Three.js，网页通过同源 `/game.js` 加载；无需运行时 CDN。Three.js MIT 版权及许可包含在客户端包中。

选卡插画的选中 WebP 另由同源 `/assets/course-art/` 哈希路径提供，构建器同时写入 `dist/client/` 和现有 Worker 的精确资源表，源 PNG／提示词不进入运行包。修改源图时才需要 Pillow（已验 12.3.0），运行 `python3 prepare-course-art.py` 并更新来源哈希；普通构建直接使用已提交 WebP。

本轮验证结果：

- 生产客户端的 DOM 初始化与兼容绘制；漂移缓冲/反打/退出、模拟摇杆起漂、小喷轨迹、护栏擦碰、路锥受力、持续倒车、菜单暂停恢复、涂装保存。
- 自动驾驶跑完三条赛道（59.89s / 85.70s / 18.92s），分段与幽灵保存/加载；另有 6000 步混合操作稳定性检查。自动驾驶是逻辑回归测试，不代表真人高手路线或手感评价。
- Three.js 实际几何、材质、实例化和资源释放适配测试（使用绘制替身，无 GPU 着色器验证）。
- 内存 SQLite 上完整房间流程、4 人容量、快照、完赛返回候场、房主转移及分赛道排行榜。
- 云浏览器的原版试玩发现 WebGL 初始化不可用；后续浏览器操作又被工具访问策略阻断。未完成新版 WebGL 画面目视验收、真人手感试玩、真实两机网络顺滑度和第三方音乐播放验证。测试替身不能替代这些验证。

## 参考资料与扩展方向

成熟网页基础并不等于成熟成品手感。本版实际采用 Three.js；PlayCanvas 的车辆示例、Rapier 射线车辆控制器只作为后续底盘/悬挂方案的技术研究，当前未集成，不应混称已经使用真实车辆物理引擎。现阶段仍以街机漂移和跑圈为核心；开放世界、拟真轮胎、悬挂、天气及交通不是本版功能。

- Slow Roads 作者介绍（Three.js、生成场景、调度与性能）：https://web.dev/case-studies/slow-roads
- PlayCanvas 车辆物理官方示例：https://developer.playcanvas.com/tutorials/vehicle-physics/
- Rapier 车辆控制器：https://rapier.rs/javascript3d/classes/DynamicRayCastVehicleController.html
- 腾讯策划公开的转向/漂移维度：https://speedm.qq.com/web201712/strategy-detail.shtml?newsid=9388344
- 固定时间步与插值：https://gafferongames.com/post/fix_your_timestep/
- Forza 官方车辆物理说明：https://forza.net/news/forza-motorsport-drivatars-tire-physics

源码：`vehicle-core.js` 驾驶；`handling.js` 漂移/喷射状态；`circuit.js` 赛道/接触；`race.js` 循环/镜头；`race-features.js` AI/幽灵/分段/辅助；`render-three.js` 渲染；`engine.js` 数学与几何；`scenery.js` 场景；`ui.js` 设置/车库；`network.js`/`ranking.js` 联机/记录；`worker/` API。

### 有限 CPU 作者参考：原几何的局部二改（P128）

`tests/scene-authoring.mjs` / `.py` 是一次固定源作者试验，不是新的运行时或资产平台。输入锁定 [07e1839](https://github.com/dbvv1/Star-Rush-Reborn/tree/07e18395bff8a172f7d552ccae0f6cefe7458fce) 的六个源文件摘要；不一致或缺失时先拒绝，不执行输入。使用已有 Node 24 与 Blender 4.3.2，不下载资源。生成物留在忽略的 `outputs/scene-authoring/`，不随游戏构建或发布。

```bash
node --max-old-space-size=400 tests/scene-authoring.test.mjs --blender
node tests/scene-authoring.mjs baseline
node tests/scene-authoring.mjs candidate
blender --background --factory-startup --threads 2 --python-exit-code 1 --python tests/scene-authoring.py -- create
blender --background outputs/scene-authoring/baseline.blend --threads 2 --python-exit-code 1 --python tests/scene-authoring.py -- verify
blender --background outputs/scene-authoring/baseline.blend --threads 2 --python-exit-code 1 --python tests/scene-authoring.py -- render
blender --background outputs/scene-authoring/baseline.blend --threads 2 --python-exit-code 1 --python tests/scene-authoring.py -- revise
```

逐个执行，不并发 Blender。省略测试命令的 `--blender` 仅验证源文件和 JS 提取／局部映射，不声称 DCC 往返已验。作者参考使用 CPU、640×360、8 samples、seed 0、2 threads、关闭降噪；它不是游戏截图，也不是 WebGL、驾驶体验或性能验收。

- 提取原 `chunkMesh` 的 0–240m 六块（60对象／17共享mesh），沿海岸原seed和原随机消费顺序；ID由固定源的 `chunk/key/s/l` 派生，只验证这次保位置的缩放，不保证以后移动 `s/l` 仍保身份。
- 保存重开核位置、索引、顶点色、对象实际mesh绑定和变换；不声称法线保留。Blender重算法线、粗糙Principled表面仅近似色块，未复制Three toon、天空／雾、全景、车和玩法实体。源stride10末项是gloss而非alpha；所取装饰没有设置opacity，保持不透明。
- 相机执行原 `sceneFrame` 相机块的静止／无历史状态；FOV60是reset初值，16:9是作者选定，未模拟默认FOV62的运行插值、boost或连续驾驶。
- 唯一二改把 `coast/chunk/2/cherry0/90/-12.5` 的scale从.92改为.65；原mesh及其他59对象不变，变化可映射回原 `place` 参数。s85作者视点露出更多站台，s60差别小，树列尺度也改变。**没有足够采用证据，不采用生产scenery补丁**；这是本次作者视点的取舍，不是玩家效果的正／负结论。
