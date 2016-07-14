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
		window.location.reload();
	});

	var randomNumber = Math.floor(Math.random() * 100) + 1;

	function playFeedback(userGuess) {

		if (userGuess > randomNumber) {
			$("#feedback").text('You are too high!');
			$("span").html(parseInt($("span").html()) + 1);
			$("ul#guessList").append('<li>' + userGuess + '</li>');
		}
		else if (userGuess < randomNumber) {
			$("#feedback").text('You are too low!');
			$("span").html(parseInt($("span").html()) + 1);
			$("ul#guessList").append('<li>' + userGuess + '</li>');
		}
		else {
			$("#feedback").text('Congratulations, you win!');
			$("span").html(parseInt($("span").html()) + 1);
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

	function sendGuessList(userGuess) {
		if (userGuess === randomNumber + 50 <= userGuess === randomNumber + 100) {
			$("#guessList").text('You are ice cold!');
		}
		else if (userGuess === randomNumber + 30 <= userGuess === randomNumber + 49) {
			$("#guessList").text('You are cold!');
		}
		else if (userGuess === randomNumber + 20 <= userGuess === randomNumber + 29) {
			$("#guessList").text('You are warm!');
		}
		else if (userGuess === randomNumber + 10 <= userGuess === randomNumber + 19) {
			$("#guessList").text('You are hot!');
		}
		else if (userGuess === randomNumber + 1 <= userGuess === randomNumber + 9) {
			$("#guessList").text('You are on fire!');
		}
		else {
			$("#guessList").text('You are scorched!');
		}
	}

});

