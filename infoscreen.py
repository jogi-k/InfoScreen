from time import sleep
from datetime import datetime
from gpiozero import MotionSensor
import os

hdmi_on="vcgencmd display_power 1"
hdmi_off="vcgencmd display_power 0"


def detectMotion():
    os.system(hdmi_off)
    pir.wait_for_motion()
    os.system(hdmi_on)
    #print(datetime.now())
    #print("Intruder alert")
    sleep(5)

pir = MotionSensor(4)

while True:
    detectMotion()


