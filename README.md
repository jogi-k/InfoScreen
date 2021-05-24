# InfoScreen
Some snippets / tools for my home info-screen on  a Raspberry Pi


Information coming from following blog-post:  
https://tangielskyblog.wordpress.com/2018/05/19/ein-ausschalter-fuer-das-raspberry-pi-display/ 

## Switch OFF Display

echo 1 | sudo tee /sys/class/backlight/rpi_backlight/bl_power > /dev/null


## Switch ON Display

echo 0 | sudo tee /sys/class/backlight/rpi_backlight/bl_power > /dev/null


## Switch TABS in Chromium

see : https://blog.gordonturner.com/2019/07/23/raspberry-pi-switch-chromium-browser-tabs/

## General Info 

* Some more general info also available here:
* https://www.elektronik-kompendium.de/sites/raspberry-pi/2111101.htm
