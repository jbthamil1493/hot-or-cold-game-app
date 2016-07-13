
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
		event.preventDefault();
		var userGuess = $("input").val();
		validateGuess(userGuess); 
	});

	$(".new").on("click", function() {
		
	});

	var randomNumber = Math.floor(Math.random() * 100) + 1;

	function playGame(userGuess) {

		if (userGuess > randomNumber) {
			$("#feedback").text('You guessed too high!');
			$("span").html(parseInt($("span").html()) + 1);
		}

		else if (userGuess < randomNumber) {
			$("#feedback").text('You guessed too low!');
			$("span").html(parseInt($("span").html()) + 1);
		}

		else {
			$("#feedback").text('You guessed correctly!');
			$("span").html(parseInt($("span").html()) + 1);
		}	
	
	}

	function validateGuess(userGuess) {
		if (userGuess % 1 === 0 && userGuess >= 1 && userGuess <= 100) {
			playGame(userGuess);
		}
		else {
			$("#feedback").text('ERROR: Number must be an integer between 0 and 100!');
		}
	}

});

