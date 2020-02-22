function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {

	alert($(".example:nth-child(2) .first-part").text().slice(3))
});