// targetScore = magic-number
// yourScore = your-number
// 

//==========================================================================
//GLOBAL VARIABLES
//==========================================================================

//crystal vars (objects)
var crystal = {
	blue:
	{
		name: "Blue",
		value: 0
	},
	green:
	{
		name: "Green",
		value: 0
	},
	red:
	{
		name: "Red",
		value: 0
	},
	yellow:
	{
		name: "Yellow",
		value: 0
	},
};

//scores (current and target)
var currentScore = 0;
var targetScore = 0;

//wins and losses
var winCount = 0;
var lossCount = 0;

//sound effects
var backgroundSound = new Audio("background-song.mp3");
var loseSound = new Audio("click-sound.mp3");
var winSound = new Audio("win-sound.mp3");


//==========================================================================
//FUNCTIONS
//==========================================================================

//make helper function to more easily pick random numbers
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

//reset game
var startGame = function() {

	//play backgrouns sounds
	backgroundSound.play();

	//reset current score
	currentScore = 0;

	//set a new target score btwn 19 and 120 using getRandom helper function
	targetScore = getRandom(19, 120);

	//set different values for each crystal btwn 1 and 12 using getRandom helper function
	crystal.blue.value = getRandom(1, 12);
	crystal.green.value = getRandom(1, 12);
	crystal.yellow.value = getRandom(1, 12);
	crystal.red.value = getRandom(1, 12);

	//change the html to reflect all of these changes
	// targetScore = magic-number
	// yourScore = your-number
	$("#your-number").html(currentScore);
	$("#magic-number").html(targetScore);


	//test and debug
	console.log("===================")
	console.log("Target Score " + targetScore + " | Blue " + crystal.blue.value + " | Green " + crystal.green.value + " | Yellow " + crystal.yellow.value + " | Red " + crystal.red.value);
};

//change current score in response to crystal clicks
var addValues = function(crystal) {

	//change your score
	currentScore = currentScore + crystal.value;

	//change html to reflect changes in your score
	$("#your-number").html (currentScore);

	//call checWin function
	checkWin();

	//test and debug
	console.log("Your Score: " + currentScore);

};

//check if user won or lost and reset game
var checkWin = function() {

	//check if your score is larger than target score
	if (currentScore > targetScore) {
		console.log("LOSE");

		//html lose message to user
		$("#win-lose-comment").text("You lost!");

		//play lose sound
		loseSound.play();

		//add to loss count
		lossCount++;

		//change loss count html
		$("#losses").html(lossCount);

		//restart game
		startGame();


	} else if (currentScore == targetScore) {
		console.log("WIN");

		//html win message to user
		$("#win-lose-comment").text("You won!");

		//play win sound
		winSound.play();

		//add to win count
		winCount++;

		//change win count html
		$("#wins").html(winCount);

		//restart game
		startGame();
	}
}


//==========================================================================
//MAIN PROCESS
//==========================================================================
//starts game first time
startGame();

//crystal clicks
$("#blue").click(function() {
	//play sound effect
	// clickSound.play();

	//add amount to your number
	addValues(crystal.blue);
});

$("#green").click(function() {

	//play sound effect
	// clickSound.play();

	//add amount to your number
	addValues(crystal.green);
});

$("#yellow").click(function() {

	//play sound effect
	// clickSound.play();

	//add amount to your number
	addValues(crystal.yellow);
});

$("#red").click(function() {

	//play sound effect
	// clickSound.play();

	//add amount to your number
	addValues(crystal.red);
});