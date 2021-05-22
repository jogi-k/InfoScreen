#!/usr/bin/python3
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


os.system("xset s noblank")
os.system("xset s off")
os.system("xset -dpms")

pir = MotionSensor(4)

while True:
    detectMotion()


