$(document).ready(function() {
	console.log("ready");
})

var goalNumber = Math.floor((Math.random() * 120) + 19);
var crystal1 = Math.floor((Math.random() * 12) + 1);
var crystal2 = Math.floor((Math.random() * 12) + 1);
var crystal3 = Math.floor((Math.random() * 12) + 1);
var crystal4 = Math.floor((Math.random() * 12) + 1);

$("#goal-number").html(goalNumber);