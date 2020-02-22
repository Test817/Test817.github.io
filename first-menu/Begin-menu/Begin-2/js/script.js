function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {

	a = getRandomInt(1, 10);

	while(true){
		if(a != parseInt($(".example:nth-child(2) .first-part").text().slice(3))){
			break;
		}

		a = getRandomInt(1, 10);
	}

	var S = a*a;
// asdfa
	$(".example:last-child .first-part").html("a = " + a);
	$(".example:last-child .last-part").html("S = " + S);
});
