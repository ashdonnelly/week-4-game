$(document).ready(function() {
	reset();
});

var wins = 0;
var losses = 0;
var yourNumber = 0;
var magicNumber = 0;
// var crystal1 = Math.floor((Math.random() * 12) + 1);
// var crystal2 = Math.floor((Math.random() * 12) + 1);
// var crystal3 = Math.floor((Math.random() * 12) + 1);
// var crystal4 = Math.floor((Math.random() * 12) + 1);

$("#wins").text(wins);
$("#losses").text(losses);

function reset() {
	yourNumber = 0;
	magicNumber = Math.floor((Math.random() * 120) + 19);
	var crystal1 = Math.floor((Math.random() * 12) + 1);
	var crystal2 = Math.floor((Math.random() * 12) + 1);
	var crystal3 = Math.floor((Math.random() * 12) + 1);
	var crystal4 = Math.floor((Math.random() * 12) + 1);

	$("#magic-number").text(magicNumber);
	$("#your-number").text(yourNumber);
	$("#wins").text(wins);
	$("#losses").text(losses);

	$("#crystal-1").on("click", function(){
		$("#your-number").text(yourNumber += crystal1);
		checkNumbers();
		console.log(crystal1);
	});

	$("#crystal-2").on("click", function(){
		$("#your-number").text(yourNumber += crystal2);
		checkNumbers();
		console.log(crystal2);
	});

	$("#crystal-3").on("click", function(){
		$("#your-number").text(yourNumber += crystal3);
		checkNumbers();
		console.log(crystal3);
	});

	$("#crystal-4").on("click", function(){
		$("#your-number").text(yourNumber += crystal4);
		checkNumbers();
		console.log(crystal4);
	});

	function checkNumbers() {
		if (yourNumber == magicNumber) {
			$("#win-lose-comment").text("You won!");
			wins++;
			reset();
			yourNumber = 0;
			console.log("won");
		} else if (yourNumber > magicNumber) {
			$("#win-lose-comment").text("You lost!");
			losses++;
			reset();
			yourNumber = 0;
			console.log("lost");
		};
	};
};