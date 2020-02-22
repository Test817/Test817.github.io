function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {

	d = getRandomInt(1, 10);

	while(true){
		if(d != 2){
			break;
		}

		d = getRandomInt(1, 10);
	}

	const pi = 3.14;
	var L = pi*d;				
					
	$(".example:last-child .first-part").html("d = " + d);
	$(".example:last-child .last-part").html("L = " + L);
});