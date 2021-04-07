# InfoScreen
Some snippets / tools for my home info-screen on  a Raspberry Pi


Information coming from following blog-post:  
https://tangielskyblog.wordpress.com/2018/05/19/ein-ausschalter-fuer-das-raspberry-pi-display/ 

## Switch OFF Display

echo 1 | sudo tee /sys/class/backlight/rpi_backlight/bl_power > /dev/null


## Switch ON Display

echo 0 | sudo tee /sys/class/backlight/rpi_backlight/bl_power > /dev/null
