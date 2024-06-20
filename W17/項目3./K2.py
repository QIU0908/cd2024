from zmqRemoteApi_IPv6 import RemoteAPIClient
import keyboard
import time

client = RemoteAPIClient('localhost', 23000)
# client = RemoteAPIClient('2001:288:6004:17:2023:cda:4:6', 23000)

print('Program started')
sim = client.getObject('sim')
sim.startSimulation()  # 确保模拟已经启动
print('Simulation started')

time.sleep(1)  # 确保模拟启动成功

v = 5

# 选择控制的球员
player = '/k2'

# 初始化电机对象
def get_motor_handle(motor_name):
    try:
        motor_handle = sim.getObject(player + motor_name)
        print(f"Successfully obtained handle for {motor_name}")
        return motor_handle
    except Exception as e:
        print(f"Error obtaining handle for {motor_name}: {e}")
        return None

leftMotor1 = get_motor_handle('/11')  # 交换左前和右前
rightMotor1 = get_motor_handle('/21')  # 交换左前和右前
leftMotor2 = get_motor_handle('/12')  # 交换左后和右后
rightMotor2 = get_motor_handle('/22')  # 交换左后和右后

if None in [leftMotor1, rightMotor1, leftMotor2, rightMotor2]:
    print("One or more motor handles could not be obtained. Exiting.")
    sim.stopSimulation()
    exit(1)

def setVelocity(lfwV, rfwV, lbwV, rbwV):
    sim.setJointTargetVelocity(leftMotor1, lfwV)
    sim.setJointTargetVelocity(rightMotor1, rfwV)
    sim.setJointTargetVelocity(leftMotor2, lbwV)
    sim.setJointTargetVelocity(rightMotor2, rbwV)

def playerControl(x):
    if keyboard.is_pressed('w'):
        print("go")
        setVelocity(-x, -x, -x, -x)  # 调整前进方向
    elif keyboard.is_pressed('s'):
        print("back")
        setVelocity(x, x, x, x)  # 调整后退方向
    elif keyboard.is_pressed('q'):
        print("Stopping simulation")
        # 停止模拟
        sim.stopSimulation()
    else:
        setVelocity(0, 0, 0, 0)  # 停止

try:
    while True:
        playerControl(v)
        time.sleep(0.1)  # 添加一些延迟以减少 CPU 使用率
except KeyboardInterrupt:
    print("Program Interrupted")
finally:
    setVelocity(0, 0, 0, 0)  # 停止机器人
    sim.stopSimulation()  # 停止模拟