$(document).ready(function() {
	function getRandomInt(min, max){
  		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	a = getRandomInt(0, 20);
	b = getRandomInt(0, 20);

	while(true){
		
		if(a != 4 && b != 9){
			break;
		}

		a = getRandomInt(0, 20);
		b = getRandomInt(0, 20);
		
	}

	var srg = Math.sqrt(a * b);
	srg = Math.round(srg * 100) / 100;

	$(".example:last-child .first-part").html("a = " + a + "<br> b = " + b);
	$(".example:last-child .last-part").html(srg);
});

	

