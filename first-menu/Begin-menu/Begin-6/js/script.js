function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {

	a = getRandomInt(1, 10);
	b = getRandomInt(1, 10);
	c = getRandomInt(1, 10);

	while(true){
		if(a != 2 && b != 3 && c != 4){
			break;
		}

		a = getRandomInt(1, 10);
		b = getRandomInt(1, 10);
		c = getRandomInt(1, 10);
	}

	var V = Math.round(a*b*c * 1000) / 1000;
	var S = Math.round(2*(a*b + b*c + a*c) * 100) / 100;
					
	$(".example:last-child .first-part").html("a = " + a + "<br>b = " + b + "<br>c = " + c);
	$(".example:last-child .last-part").html("V = " + V + "<br>S = " + S);
});