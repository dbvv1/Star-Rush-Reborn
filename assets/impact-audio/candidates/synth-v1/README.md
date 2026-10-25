# 本项目程序合成替代候选（未听）

来源固定提交：[5058ee844a8c4cebe4e62cf823698386a59592fa](https://github.com/dbvv1/Star-Rush-Reborn/commit/5058ee844a8c4cebe4e62cf823698386a59592fa)，原路径 `assets/rail-audio/`。本目录的 `generate.py`、`manifest.json`、两个 WAV 及 `SOURCE-README.md`（原README）均保留来源字节，未采用该提交的运行代码、强度交叉淡化或增益参数。原manifest内generator路径与原说明中的命令是来源历史路径，本目录实际命令如下。

这是标准库确定性模态／噪声合成，不是AI生成。原提交者说明未使用第三方采样，参数、随机种子、包络与模态见脚本及manifest；轻擦0.24s、中碰0.38s，mono44.1kHz PCM16，共54,772B。候选未试听，不把峰值/RMS或解码等同音色、金属感、响度或玩家质量。

**许可限制：** 保留原作者“随项目现有条款”的来源说明，但仓库未见独立LICENSE，不能由此推定CC0、MIT、公有领域或通用再分发授权；这里不自行赋予新许可。Kenney的CC0仅属于原Kenney资产，不适用于此目录。来源README所记其他环境浏览器解码是提交者记录，非本次独立实证；其旧运行规则不适用于当前整合。

## 修改与比较

```sh
python3 assets/impact-audio/candidates/synth-v1/generate.py --check
# 修改脚本RECIPES后生成（只改本目录文件）：
python3 assets/impact-audio/candidates/synth-v1/generate.py
STAR_RUSH_RAIL_SOURCE=synth-v1 npm run build
npm run dev
# 听完停止预览，恢复默认运行包：
npm run build
```

作者环境变量仅构建时选素材，不是游戏菜单/玩家设置。未设置或`kenney`选择CC0两片；`procedural`显式保留原程序音、不加载样本；未知值（含空值）显式失败。选择样本时每次构建只打包一对，候选源/配方不送运行端；选项切换需要重建并正常重载页面。默认构建产物使用Kenney样本。

比较目的：同一护栏事件、同一播放器、相同>5轻中界线、gain0.15和现有SFX混音，隔离素材差异。没有采用原候选2–6等功率混合或随强度增益。加载/取消/超时/4声上限/暂停静音/原程序化回退全部沿用5266703。两文件各<50KB，满足原加载上限。

接收端分别构建kenney与synth-v1（并以显式`procedural`程序音为对照），在发动机＋轮胎＋音乐最终混音下产生轻/中碰撞，比较辨识与擦碰疲劳；听到问题再改配方或明确混音参数并复验，不预判胜负。本次仅源复现与两种构建/资源链验证，无新增浏览器探针、试听或听后二改结论。
