# B-STAR-FIXED-CAPTURE-20261104 拍摄结果：阻塞

状态：**未取得任何 PNG**。第一个机位 `coast-chase` 在启动校验阶段失败，按任务规则停止本轮剩余机位并交回断点；没有换参数、浏览器或机位重拍。

## 固定条件

- 源码提交 `0bd62df9be7528cc9da643ebde089063d6166da8`，tree `f1dd5ca84c725b78bd9b8d5163368708eaae8e95`。
- `npm run build`（默认构建配置）退出码 0，构建前后 tracked tree 均 clean。
  - Worker SHA-256：`3773376e17375f2361aace3b93610b0f19b9b6425fad3adf0c09bfced5db2f46`
  - road bundle SHA-256：`7e82cffce610c18afaa7399814553ea9a4d970621f417f8d5c4e53c377cc7544`
- 单个 `node tests/smoke-server.mjs` 提供 `STAR_SMOKE_LOOPBACK=http://127.0.0.1:6519`；结束时只停止本进程，端口已关闭。
- Chromium：Chrome for Testing 156.0.8078.4（Playwright Chromium），headless。启动配置（`launchOptions.args`）传入并包含 `--no-sandbox`、`--enable-unsafe-swiftshader`、`--use-angle=swiftshader`；本轮 capture 未取得实际 argv，因此“实际 argv 含这三项”未验证。未启用 GPU/D3D11 档。

## 失败点

`npm run capture -- http://127.0.0.1:6519/road outputs/B-STAR-FIXED-CAPTURE-20261104/0bd62df9-swiftshader/coast-chase coast-chase --seed 73121 --t 28 --frames 1 --input road-tour --repeat --software`

- 退出码 1，`report.passed=false`，`runs=[]`。
- `tests/capture.mjs` 在采集前通过 CDP `Browser.getBrowserCommandLine` 核实际 argv；Chromium 返回：`Command line not returned because --enable-automation not set.`
- 锁文件固定 Playwright 1.64.1，其默认启动参数不包含 `--enable-automation`；Chromium 的错误文本本身指名了缺失的这个参数。该错误在随后的两次诊断启动中重复出现（Chrome for Testing 一次、headless shell 一次）；这两次都只用于定位根因，没有导航、没有拍摄，其中第二次还换了浏览器二进制。capture 本身只运行了一次，没有做重复拍摄验证，也没有留存“补 `--enable-automation` 后能读回 argv”的输出，因此该结论只到“缺失默认参数、错误可重复”为止。诊断细节见 `command-log.json` 的 `diagnostics`。
- 因首次失败目录已生成，且任务禁止换参重拍或另起第二轮，本轮在断点停止。

## 未验证

WebGL2 backend、实际 renderer/vendor、1280×720/DPR 1 场景像素、双拍一致性与 `report.passed=true` 均未到达。其余两个机位未启动。manifest 中这些字段保持 `null`，没有推断或补齐。

## 环境差异

AGENTS.md 要求 Node.js 24；本机只安装了 Node.js 22.23.2，本轮全部命令在该版本上运行。没有安装或升级任何软件、浏览器或依赖，也没有修改锁文件。

## 下一步（建议，未执行）

以下均为建议，不是本轮已验证的结果；本轮没有改源码或测试脚本，也没有换参数、浏览器或机位重拍。

1. 推荐后续单独开一张改测试脚本的卡：在 `tests/capture.mjs` 的启动参数中补 `--enable-automation`。依据是 Chromium 本次的错误文本明确要求该参数，且锁定的 Playwright 1.64.1 默认不传它；本轮没有留存补参数后 CDP 成功的输出，需在下一张卡实际验证。
2. 第一步先只跑 `coast-chase` 单机位：启动 `node tests/smoke-server.mjs`，取它实际打印的 `STAR_SMOKE_LOOPBACK` 作为 `BASE`，再执行 `npm run capture -- "BASE/road" "新输出根/coast-chase" coast-chase --seed 73121 --t 28 --frames 1 --input road-tour --repeat --software`，确认启动、argv 校验、`__shot.ready` 与 PNG 落盘这条链路；通过后再按任务表跑三机位。
3. 重跑必须使用新的输出根或新的子目录，并保留本次失败目录 `0bd62df9-swiftshader/coast-chase` 作为证据，不要覆盖：`tests/capture.mjs` 用 `mkdir(directory,{recursive:false})` 建目录，对已存在目录会先报 EEXIST。
4. 本卡不交付基线：不改源码，不换参数/浏览器/机位补拍，本次失败结果不得当作基线使用。
5. 若接收方不接受新增自动化参数，或环境仍缺 Node 24，则保持阻塞并交回 dot 决定。

## 文件

- `manifest.json`：逐机位 URL、固定提交/tree、构建哈希、退出码、时间线与缺失项。
- `coast-chase/report.json`：脱敏后的失败报告；已删除绝对路径与错误堆栈；实际 argv 本轮未取得，启动参数按 `requiredArgs`/`extraArgs` 拆分保留。
- `command-log.json`：命令、退出码、诊断探针、Node/Chromium/预览进程归属与清理结果。

公开副本为脱敏整理，不是未改动的原始日志。
