
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Start a New Game ---*/

	$(".button").on("click", function() {
		var userGuess = $("input").val();
		playGame(userGuess);
	});

	$(".new").on("click", function() {
		getRandomInt(randomNumber);
	});

	var randomNumber = Math.floor(Math.random() * 100) + 1;

	function getRandomInt(randomNumber) {
		return Math.floor(Math.random() * 100) + 1;
	}

	function playGame(userGuess) {

		if (userGuess === randomNumber) {
			alert('You guessed correctly!');
		}

		else if (userGuess > randomNumber) {
			alert('You guessed too high!');
		}

		else if (userGuess < randomNumber) {
			alert('You guessed too low!');
		}	
	
	}

});

