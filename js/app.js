
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
		getRandomInt(min,max);
		var randomNumber = Math.floor((Math.random() * 100) + 1);
	});


	function getRandomInt(min, max) {
		return Math.floor((Math.random() * 100) + 1);
	}

	$(".button").on("click", function() {
	
		var userGuess = $("input").val();
		
		if (userGuess > randomNumber) {
			alert('You guessed too high!');
		}
		if (userGuess < randomNumber) {
			alert('You guessed too low!');
		}
		if (userGuess === randomNumber) {
			alert('You guessed correctly!');
		}	

	});

});

