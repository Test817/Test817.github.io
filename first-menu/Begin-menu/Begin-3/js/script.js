function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {
	a = getRandomInt(1, 10);
	b = getRandomInt(1,10);

	while(true){
		if(a != 2){
			break;
		}
		if(b != 3){
			break;
		}

		a = getRandomInt(1, 10);
		b = getRamdomInt(1, 10);
	}

	var S = a*b;
	var P = 2*(a+b);

	$(".example:last-child .first-part").html("a = " + a + "<br> b = " + b);
	$(".example:last-child .last-part").html("S = " + S + "<br> P  = " + P);
});

	

