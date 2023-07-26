'use strict';
(function () {
       function milo() {


		var countDownDate = new Date("Nov 13, 2023 07:00:00").getTime();

		// Update the count down every 1 second
		var x = setInterval(function() {

  		// Get today's date and time
  		var now = new Date().getTime();
    
  		// Find the distance between now and the count down date
  		var distance = countDownDate - now;
    
  		// Time calculations for days, hours, minutes and seconds
  		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  		// Output the result in an element with id="demo"
  		document.getElementById("milo").innerHTML = "Milo &#128245; &#128242; : " + days + "d " + hours + "h " + minutes +"m " ;
  		// If the count down is over, write some text 
  		if (distance < 0) {
    			clearInterval(x);
    			document.getElementById("milo").innerHTML = "EXPIRED";
  		}
		}, 1000);
	}


	document.addEventListener('DOMContentLoaded', uhrzeit);

}());

