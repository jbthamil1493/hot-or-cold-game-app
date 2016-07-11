
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

	$(".new").on("click", function() {
		newGame();
	});

	$(".button").on("click", function() {

		var randomNumber = Math.floor((Math.random() * 100) + 1);
	
		var userGuess = $("input").val();
		
		if (userGuess === randomNumber) {
			alert('You guessed correctly!');
		}	
		else if (userGuess > randomNumber) {
			alert('You guessed too high!');
		}
		else {
			alert('You guessed too low!');
		}

	});

	function newGame() {
		function getRandomInt(min, max) {
			return Math.floor((Math.random() * 100) + 1);
		}
	}

});

