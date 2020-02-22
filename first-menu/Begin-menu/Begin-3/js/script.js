function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {

	a = getRandomInt(1, 10);
	b = getRandomInt(1,10);

	while(true){
		if(a != parseInt($(".example:nth-child(2) .first-part").text().slice(5,6)) &&
		 b != parseInt($(".example:nth-child(2) .first-part").text().slice(10))){
			break;
		}

		a = getRandomInt(1, 10);
	}

	var P = 4*a;

	$(".example:last-child .first-part").html("a = " + a);
	$(".example:last-child .last-part").html("P = " + P);
});