#!/usr/bin/python3
import time 
from datetime import datetime
from gpiozero import MotionSensor
import os




BACKLIGHT = '/sys/class/backlight/rpi_backlight/bl_power'
ON = 0
OFF = 1
TIME_OUT = 5

def backlightOn():
    with open(BACKLIGHT, 'w') as export:
    	export.write(str(ON))

def backlightOff():
    with open(BACKLIGHT, 'w') as export:
    	export.write(str(OFF))


pir = MotionSensor(4)
backlightOn()
endtime = time.time() + TIME_OUT

while True:
    if pir.motion_detected :
        backlightOn()
	print("Motion detected")
	endtime = time.time() + TIME_OUT
	time.sleep(1)
    currtime = time.time()
    if currtime > endtime :
	backlightOff()



