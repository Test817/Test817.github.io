function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {

	r = getRandomInt(1, 10);
	const pi = 3.14;
	var L = Math.round(2*pi*r * 100) / 100;
	var S = Math.round(pi*Math.pow(r,2) * 1000) / 1000;
	
	$(".example:last-child .first-part").html("R = " + r);
	$(".example:last-child .last-part").html("L = " + L + "<br>S = " + S);
});
