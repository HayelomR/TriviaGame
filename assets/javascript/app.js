
var rightAnswer = 0;//this counts the number of right answers.
var wrongAnswer = 0;//this counts the number of wrong answers
var questionCounter = 1;// this counts the number of questions. it starts from one because it is an object
var numberTimes
var timer = ""; //this will be the timer that will be shown for each question.
// lets create an object so that we can access questions and answers pull our questions.
var questions = {
			1:{
				question:"What ocean is on the West Coast of the United States?",
				choices:["Atlantic","Southern","Arctic","Pacific"],
				correct: "Pacific",

			   },

			2:{
				question:"What do we show loyalty to when we say the Pledge of Allegiance?",
				choices:["The President","USA","State","Congress"],
				correct:"USA",
			},
			3:{
				question:"Before he was President, Eisenhower was a general. What war was he in?",
				choices:["Vietnam War","Civil War","World War II","Spanish-American War"],
				correct:"World War II",
			},

			4:{
				question:"We elect a President for how many years?",
				choices:["Four","Eight","Six","Two"],
				correct:"Four",
			},
			
			5:{
				question:"Name one problem that led to the Civil War.",
				choices:["Sugar","Slavery","West ward expansion","Oil","none of the above"],
				correct:"none of the above",
		
			},

	};
//lets start the game //When buttons is clicked the first screen will be cleared and the second will come
function initalizeGame(){
	$(".startBtn").on("click",function(){
	everyOneSecond();
		$(".gamePage").html("");// clears the second screen and make it ready
		// this is the same as $(".gamePage").empty();
		createQuestions();
		setInterval(everyOneSecond,500);
	});
}

var counter = 5;
var timerId = setInterval(everyOneSecond, 500);
function everyOneSecond(){
	if (counter === 0) {
		$(".timer").html("Remaining Time: " + counter);
		$(".gamePage").text("ohh time is up");
		//clearTimeout(timerId);

	} else {

	$(".timer").html(counter);
	counter--;
	}

}

 function createQuestions(){
	//everyOneSecond();
	//Get question
	var question = questions[questionCounter]["question"];
	//assign div element to newDiv
	var newDiv = $("<div>");
	//Add a class to newDIv
	newDiv.append("question");
	//Add text to question
	newDiv.text(question);
	//Add question to DOM
	$(".gamePage").append(newDiv);
	createAnswers();
}

 function createAnswers(){
	var answerLength = questions[questionCounter]["choices"].length;
	for(var i = 0; i < answerLength;i++){
		//get answers
		var answers = questions[questionCounter]["choices"][i];
		//Create new div to hold answers
		var newBtn = $("<button>");
		//Add class to new Div"
		newBtn.addClass("choices");
		//Give buttons attribute
		newBtn.attr("data-type",answers);
		//add text to new Div
		newBtn.text(answers);
		//Add answers to DOM
		$(".gamePage").append(newBtn);
	}
	//Prevents click event from being saved
	$(document).off("click",".choices",checkAnswer);
	$(document).on("click",".choices",checkAnswer);
}

 function checkAnswer(){
	 //Get users answer choice
	var userAnswer = $(this).data("type");
	var correctAnswer = questions[questionCounter]["correct"];
	var right = questions[questionCounter]["right"];
	var wrong = questions[questionCounter]["wrong"];
	//console.log(qACount);
	if(userAnswer === correctAnswer){
		//Update rightCount
		rightAnswer++;
		//Clears out triv Section
		$(".gamePage").empty();

		var newDiv = $("<div>");
		//Give div class
		newDiv.addClass("correctAnswer");
		//adds CORRECT! text to div
		newDiv.text(right);
		//Add answer to DOM
		$(".gamePage").append(newDiv);
		
		clearInterval(timer)
		//Add 1 to question count to move to the next question
		questionCounter++;
		if(questionCounter <= 5){
			//removes CORRECT! text and continues to create next question after 3 seconds
			setTimeout(
				function(){
					$(".gamePage").empty();
					createQuestions();
					},500); //1500 milliseconds the time it take to go from one question to another
		}
		else{
			$(".gamePage").empty();
			// var newImg = $('<img>');
			// newImg.attr('src',correctImg);
			// $('.trivSection').append(newImg);
			//Create Div
			var newDiv = $("<div>");
			//Give div class
			newDiv.addClass("correctAnswer");
			//adds CORRECT! text to div
			newDiv.text(right);
			//Add answer to DOM
			$(".gamePage").append(newDiv);
			//Stops Time
			//clearInterval(timer)
			//Reset
			setTimeout(gameOver, 500);
		}
	}
	else{
		wrongAnswer++;
		//Clears out triv Section
		$(".gamePage").empty();
		var newDiv = $("<div>");
		//Give div class
		newDiv.addClass("incorrectAnswer");
		//adds Wrong! text to div
		newDiv.text(wrong);
		//Add answer to DOM
		$(".gamePage").append(newDiv);
		//Stops Time
		//clearInterval(timer)
		//Add 1 to question count to move to the next question
		questionCounter++;
		
		if(questionCounter <= 5){
			setTimeout(function(){
			$(".gamePage").empty();
			createQuestions();
			},500);
		}
		else{
			//Clears out triv Section
			$(".gamePage").empty();
		// 	var newImg = $('<img>');
		// newImg.attr('src',correctImg);
		// $('.trivSection').append(newImg);
			var newDiv = $("<div>");
			//Give div class
			newDiv.addClass("incorrectAnswer");
			//adds Wrong! text to div
			newDiv.text(wrong);
			//Add answer to DOM
			$(".gamePage").append(newDiv);
			//Stops Time
			//clearInterval(timer);
			//Reset
			setTimeout(gameOver, 500);
		}
	}
}


 function gameOver () {
	//Remove everything in gamePage section
	$(".gamePage").empty();

	var scoreDiv = $("<div>");
	scoreDiv.addClass("score");
	scoreDiv.html("Correct: " + rightAnswer + "<br>" + "Wrong: " + wrongAnswer);
	$(".gamePage").append(scoreDiv);
	//Assign new div element to new Div
	var newDiv = $("<div>");
	//add class to new Div
	newDiv.addClass("gameOver");
	//add game over text
	newDiv.text("Game Over! click Reset to play again?");
	//Append game over text to DOM
	$(".gamePage").append(newDiv);
	//Create ResetButton
	var newBtn = $("<button>");
	//Give btn Class
	newBtn.addClass("resetBtn");
	//Give btn reset Text
	newBtn.text("Reset");
	//Append
	$(".gamePage").append(newBtn);
	
	questionCounter = 1;
	rightAnswer = 0;
	wrongAnswer = 0;

	//When reset button is clicked.......
	$(".resetBtn").on("click",function(){
		$(".gamePage").empty()
		//Starts game over
		createQuestions();
	});
}

initalizeGame(); //===> starts the game.
