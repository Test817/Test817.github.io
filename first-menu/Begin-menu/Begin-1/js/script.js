function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var a = getRandomInt(1, 10);
var P = 4*a;

$(document).ready(function() {
	$(".example:last-child .first-part").html("a = " + a);
	$(".example:last-child .last-part").html("P = " + P);
});