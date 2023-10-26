'use strict';
(function () {
       function milo_geb() {


		var countDownDate = new Date("Nov 13, 2023 6:30:00").getTime();

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
   
		minutes=fuehrendeNull(minutes); 
		hours=fuehrendeNull(hours); 
  		// Output the result in an element with id="demo"
  		document.getElementById("milo_geb").innerHTML = " Milo Geb: " + days + "d " + hours + "h " + minutes +"m " ;
  		// If the count down is over, write some text 
  		if (distance < 0) {
    			clearInterval(x);
    			document.getElementById("milo_geb").innerHTML = "EXPIRED";
  		}
		}, 1000);
	}
       function mgb_conc() {


		var countDownDate = new Date("Oct 29, 2023 10:00:00").getTime();

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
   
		minutes=fuehrendeNull(minutes); 
		hours=fuehrendeNull(hours); 
  		// Output the result in an element with id="demo"
  		document.getElementById("mgb_concert").innerHTML = " MGB Konzert : " + days + "d " + hours + "h " + minutes +"m " ;
  		// If the count down is over, write some text 
  		if (distance < 0) {
    			clearInterval(x);
    			document.getElementById("mgb_concert").innerHTML = "EXPIRED";
  		}
		}, 1000);
	}
       function xmas() {


		var countDownDate = new Date("Dec 24, 2023 19:00:00").getTime();

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
   
		minutes=fuehrendeNull(minutes); 
		hours=fuehrendeNull(hours); 
  		// Output the result in an element with id="demo"
  		document.getElementById("xmas").innerHTML = " Weihnachten : " + days + "d " + hours + "h " + minutes +"m " ;
  		// If the count down is over, write some text 
  		if (distance < 0) {
    			clearInterval(x);
    			document.getElementById("xmas").innerHTML = "EXPIRED";
  		}
		}, 1000);
	}
	function fuehrendeNull(zahl) {
		zahl = (zahl < 10 ? '0' : '') + zahl;
		return zahl;
	}


	document.addEventListener('DOMContentLoaded', milo_geb);
	document.addEventListener('DOMContentLoaded', mgb_conc);
	document.addEventListener('DOMContentLoaded', xmas);

}());

