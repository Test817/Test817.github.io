$(document).ready(function() {
	function getRandomInt(min, max){
  		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	a = getRandomInt(-10, 10);
	b = getRandomInt(-10,10);

	while(true){
		
		if(a != 4 && b != 7){
			break;
		}

		a = getRandomInt(-10, 10);
		b = getRandomInt(-10, 10);
		
	}

	var sr = (a + b) / 2;
	sr = Math.round(sr * 100) / 100;

	$(".example:last-child .first-part").html("a = " + a + "<br> b = " + b);
	$(".example:last-child .last-part").html(sr);
});

	

