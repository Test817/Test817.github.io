$(document).ready(function() {
	function getRandomInt(min, max){
  		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	a = getRandomInt(1, 10);

	while(true){
		
		if(a != 2){
			break;
		}

		a = getRandomInt(1, 10);
		
	}

	var V = Math.round(Math.pow(a,3) * 1000) / 1000;
	var S = Math.round(6*Math.pow(a,2) * 10) / 10;
	alert("V = " + V + "        S = " + S);

	$(".example:last-child .first-part").html("a = " + a);
	$(".example:last-child .last-part").html("V = " + V + "<br> s  = " + S);
});

	

