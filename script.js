


var wordOptions = ["leopard", "tiger", "river", "trees", "snake"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];  
var wrongLetters = [];
var letter = selectedWord[i]


var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;


	function startGame() {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersinWord = selectedWord.split("");
	numBlanks =lettersinWord.length;  

	// Reset
	guessesLeft = 10;
	wrongLetters = [];
	blanksAndSuccesses = [];

	for (var i=0; i<numBlanks; i++) {
		blanksAndSuccesses.push("_");
	}
	
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;
	

	console.log(selectedWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}

	function checkletters(letter) {}

	var isletterInWord = false;

	for (var i=0; i<numBlanks; i++) {
		if(selectedWord[i] == letter) {
			isletterInWord = true;
			alert("Letter found");
		}
	}

	if(isletterInWord) {
		for (var i = 0; i<numBlanks; i++) {
			if(selectedWord[i] == letter); {
				blanksAndSuccesses[i] = letter;
			}
		}
	}

	else {
		wrongLetters.push(letter);

	}

	console.log(blanksAndSuccesses);

	function roundComplete(){
		console.log("Win Count: "+ winCount + " | LossCount: " + lossCount + " | Guesses Left " + guessesLeft)
	
	if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
		winCount++;
		alert("You Won");


	document.getElementById("winCounter").innerHTML = winCount;

	startGame();
		}


	else if (guessesLeft == 0) {
		lossCount++;
		alert("You Lost!");


		document.getElementById("lossCounter").innerHTML = lossCount;

		
	}	
	}

	startGame();


document.onkeyup = function(event){
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(letterGuessed);
}
