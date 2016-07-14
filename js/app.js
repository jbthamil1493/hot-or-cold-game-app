$(document).ready(function(){

  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	$(".button").on("click", function() {
		event.preventDefault();
		var userGuess = $("input").val();
		validateGuess(userGuess); 
	});

	$(".new").on("click", function() {
		newGame();
	});

	var randomNumber = Math.floor(Math.random() * 100) + 1;

	function newGame() {
		return window.location.reload();
	}

	function sendGuessList(userGuess) {

		if (userGuess < randomNumber) {
			$("#guessList").append('<li>' + userGuess + '</li>');
		}
		else if (userGuess > randomNumber) {
			$("#guessList").append('<li>' + userGuess + '</li>');
		}
		else {
			$("#feedback").append('Congratulations, you won!');
		}
	}

	function validateGuess(userGuess) {
		if (userGuess % 1 === 0 && userGuess >= 1 && userGuess <= 100) {
			playFeedback(userGuess);
			sendGuessList(userGuess);
		}
		else {
			$("#feedback").text('ERROR: Number must be an integer between 0 and 100!');
			$("#guessList").text('Please try again!');
		}
	}

	function playFeedback(userGuess) {
		var difference = userGuess - randomNumber;
		if (userGuess === randomNumber) {
			$("#feedback").text('Congratulations, you are burning up!');
			$("span").html(parseInt($("span").html()) + 1);
		}
		else { 
			
			if (userGuess !== randomNumber && difference >= 30 && difference <= 49) {
				$("#feedback").text('You are cold!');
				$("span").html(parseInt($("span").html()) + 1);
			}
			else if (userGuess !== randomNumber && difference >= 20 && difference <= 29) {
				$("#feedback").text('You are warm!');
				$("span").html(parseInt($("span").html()) + 1);
			}
			else if (userGuess !== randomNumber && difference >= 10 && difference <= 19) {
				$("#feedback").text('You are hot!');
				$("span").html(parseInt($("span").html()) + 1);
			}
			else if (userGuess !== randomNumber && difference > 1 && difference <= 9) {
				$("#feedback").text('You are on fire!');
				$("span").html(parseInt($("span").html()) + 1);
			}
			else {
				$("#feedback").text('You are ice cold!');
				$("span").html(parseInt($("span").html()) + 1);
			}
		}
	}

});

