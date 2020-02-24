$(document).ready(function() {
	function getRandomInt(min, max){
  		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	a = getRandomInt(-20, 20);
	b = getRandomInt(-20, 20);

	while(true){
		
		if(a != 3 && b != 5){
			break;
		}

		a = getRandomInt(-20, 20);
		b = getRandomInt(-20, 20);
		
	}

	var a2 = a*a;
	var b2 = b*b;
	var sum = a2 + b2;
	sum = Math.round(sum * 100) / 100;
	var razn = a2 - b2;
	razn = Math.round(razn * 100) / 100;
	var proizv = a2 * b2;
	proizv = Math.round(proizv * 100) / 100;
	var del = a2 / b2;
	del = Math.round(del * 100) / 100;

	$(".example:last-child .first-part").html("a = " + a + "<br> b = " + b);
	$(".example:last-child .last-part").html("A² + B² = " + sum + "<br>" + "A² - B² = " + razn + "<br>" + "A² * B² = " + proizv + "<br>" + "A² / B² = " + del + "\n");
});

	

