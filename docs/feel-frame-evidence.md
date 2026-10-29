# 公路油门／制动：独立逐帧取证入口

候选入口 `/?shot=academy-depth&feel=accelerate-brake`（默认公路构建；不是 Rapier）。训练场 seed95276、生产追尾机位1280×720/FOV62；先正常倒计时与静止推进到3.1秒，再记录frame0，随后1秒全油、0.5秒松油加制动，共91张计划记录帧。没有设置初速度、移动车辆、改物理参数或修改默认驾驶；这不是60km/h制动成绩。

## 实际采用与分离的时序

复用现有正式 capture controller、`frame → physics → VehicleModel → RoadVehicleModel`、道路积分、`sceneFrame`插值相机和原渲染器。只在显式feel入口包装真实physics以观察前后状态；关闭自动油门/试驾，不模拟键鼠。

- `__shot.feel.inputs`：油门输入在已完成frame0后进入，目标physicsTick1；松油+制动在frame60后进入，目标tick121。输入ID、前一帧、输入帧、目标tick与输入前车体状态分别记录。
- `steps`：实际physics调用每步120Hz；记录关联commandId、physicsTick、recordingFrame、dt、真实消费前输入状态及前后位置/速度/方向。这里是**实际调用与控制状态采样**，不是网络ACK或另一个控制器。
- `cameraFrame`：生产sceneFrame更新后的60Hz记录帧；每记录帧2个physics tick。相机快照沿用外层`camera`，不可拿tick数当屏幕帧。相同姿态多次render预热不增加记录帧或物理tick。
- 取证段运行守卫要求车辆始终在起点30米内、横向偏移小于1米、running状态，开始制动时速度大于4m/s；测试另外检查制动前最后一步仍有真实前向位移，不能撞墙停住再冒称制动效果。

本轮CPU实测：制动前速度5.020815346m/s、道路位置s=2.601602826m/l=0.050037721m；制动0.5秒后速度0.996167659m/s、s=4.070359242m/l=0.120099018m。制动前最后physics步的前向位移大于0.03m，第一制动步即减速；这是模拟响应，不是可见反馈帧。

CPU测试跑真实assembled client（Happy DOM + Canvas绘图stub），两次完整回放逐tick状态与逐帧相机一致；旧三个机位、普通/legacy入口、退出与存储隔离原测试继续执行。stub不是游戏图像，未启动浏览器或GPU。候选包含对应构建后的已跟踪dist/worker文件；源码与实际交付构建一同检查。

## 尚缺的屏幕证据

`firstVisibleFrame`始终null，audio明确unknown。只证明命令消费、车辆响应和相机提交路径，不证明PNG像素出现变化、浏览器合成、显示器present或实际设备输入延迟。没有音轨，不判断声音同步；没有标杆同动作录像，不判手感达标。生产HUD保留其节流，不能假定每帧更新。

实际拍摄应新建独占目录，保存固定source/tree/构建哈希、原始renderer、runId，并逐次保存frame0..90的真实PNG及同帧完整`__shot`；先确认ready/无error、帧连续、命令ID及tick回执对应，不能只补时间戳或复制图。由非作者核对输入到首处车体/相机/HUD可见变化；本候选没有自动PNG关联验收器。未来GPU任务遵守原队列串行与资源清理门槛，不影响冻结f1da拍摄或Star42 smoke。
