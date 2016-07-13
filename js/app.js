
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
	
	});

	var randomNumber = Math.floor(Math.random() * 100) + 1;

	function playFeedback(userGuess) {

		if (userGuess > randomNumber) {
			$("#feedback").text('You are too high!');
			$("span").html(parseInt($("span").html()) + 1);
		}
		else if (userGuess < randomNumber) {
			$("#feedback").text('You are too low!');
			$("span").html(parseInt($("span").html()) + 1);
		}
		else {
			$("#feedback").text('Congratulations, you win!');
			$("span").html(parseInt($("span").html()) + 1);
		}
	}

	function validateGuess(userGuess) {
		if (userGuess % 1 === 0 && userGuess >= 1 && userGuess <= 100) {
			playFeedback(userGuess);
			sendGuestList(userGuess);
		}
		else {
			$("#feedback").text('ERROR: Number must be an integer between 0 and 100!');
			$("#guessList").text('Please try again!');
		}
	}

	function sendGuestList(userGuess) {
		if (userGuess === randomNumber) {
			$("#guessList").text('You are burning up!');
		}
		else if (userGuess === randomNumber + 50 <= 100) {
			$("#guessList").text('You are ice cold!');
		}
		else if (userGuess === randomNumber + 30 <= 49) {
			$("#guessList").text('You are cold!');
		}
		else if (userGuess === randomNumber + 20 <= 29) {
			$("#guessList").text('You are warm!');
		}
		else if (userGuess === randomNumber + 11 <= 19) {
			$("#guessList").text('You are hot!');
		}
		else {
			$("#guessList").text('You are on fire!');
		}
	}

});

