$(document).ready(function() {
	console.log("ready");
});

var yourNumber = 0;
var magicNumber = Math.floor((Math.random() * 120) + 19);
var crystal1 = Math.floor((Math.random() * 12) + 1);
var crystal2 = Math.floor((Math.random() * 12) + 1);
var crystal3 = Math.floor((Math.random() * 12) + 1);
var crystal4 = Math.floor((Math.random() * 12) + 1);

function reset() {
	var yourNumber = 0;
	var magicNumber = Math.floor((Math.random() * 120) + 19);
	var crystal1 = Math.floor((Math.random() * 12) + 1);
	var crystal2 = Math.floor((Math.random() * 12) + 1);
	var crystal3 = Math.floor((Math.random() * 12) + 1);
	var crystal4 = Math.floor((Math.random() * 12) + 1);
};

var wins = 0;
var losses = 0;

$("#magic-number").text(magicNumber);
$("#your-number").text(yourNumber);
$("#wins").text(wins);
$("#losses").text(losses);

$("#crystal-1").on("click", function(){
	$("#your-number").text(yourNumber += crystal1);
	checkNumber();
	console.log(crystal1)
});

$("#crystal-2").on("click", function(){
	$("#your-number").text(yourNumber += crystal2);
	checkNumber();
	console.log(crystal2)
});

$("#crystal-3").on("click", function(){
	$("#your-number").text(yourNumber += crystal3);
	checkNumber();
	console.log(crystal3)
});

$("#crystal-4").on("click", function(){
	$("#your-number").text(yourNumber += crystal4);
	checkNumber();
	console.log(crystal4)
});

function checkNumber() {
	if (yourNumber == magicNumber) {
		$("#win-lose-comment").text("You won!");
		$("#wins").text(wins + 1);
	} else if (yourNumber >= magicNumber) {
		$("#win-lose-comment").text("You lost!");
		$("#losses").text(losses + 1);
	};
};
