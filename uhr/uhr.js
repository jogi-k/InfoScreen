'use strict';
(function () {
	function uhrzeit() {
		var tagArray = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]; 
		var jetzt = new Date(),
			h = jetzt.getHours(),
			m = jetzt.getMinutes(),
			s = jetzt.getSeconds(),
			mon = jetzt.getMonth() + 1,
			date = jetzt.getDate(),
			jahr = jetzt.getYear() + 1900,
			weekday = jetzt.getDay();
		m = fuehrendeNull(m);
		s = fuehrendeNull(s);
		mon = fuehrendeNull(mon);
		date = fuehrendeNull(date);
		document.getElementById('uhr')
			.innerHTML = h + ':' + m + ':' + s ;
		document.getElementById('datum')
		    	.innerHTML = date + '.' + mon + '.' + jahr ;
		document.getElementById('wotag')
		    	.innerHTML = tagArray[weekday] ; 
		setTimeout(uhrzeit, 500);
	}


	function fuehrendeNull(zahl) {
		zahl = (zahl < 10 ? '0' : '') + zahl;
		return zahl;
	}

	document.addEventListener('DOMContentLoaded', uhrzeit);
}());

