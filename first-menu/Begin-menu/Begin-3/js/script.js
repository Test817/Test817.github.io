function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {

	alert(parseInt($(".example:nth-child(2) .first-part").text().slice(5,6)));
	alert(parseInt($(".example:nth-child(2) .first-part").text().slice(10)));
});