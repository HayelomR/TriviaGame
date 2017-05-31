//pseudo codehe
//the first screen should show start the game.
//on each questions there should be timer.
//let a player chooose an answer form the choice words
//if not answer correct show the correct answer and move to the next
// let final screen show which ones are the correct and wrong ones with the rsult
//variables

var correctAnswer = 0;//number of questions that will be answered
var wrongAnswer = 0;//number of questions that are answerd wrong
var unAnswered = 0;//number of questions unanswerd b/c time is up
var firstScreen;
var counter = 0;//number of questions will be counted here
var clock = "";//time tracker
//var firstScreen = ;// the first screen that will be shown first with the button


var questions ={

	q1:{
		question: "how many amendments does the constitution have?",
		choices: ["20","14","27","8"],
		answer: "27",
	},

	q2: {
		question:"We elect a U.S. Representative for how many years?",
		choices: ["2","6","4","8"],
		answer: "2",

	},

	q3:{
		question:"How many U.S. Senators are there?",
		choices:["50","40","100","121"],
		answer:"100",
	},

	q4:{
		question:"We elect a U.S. Senator for how many years?",
		choices:["2","8","6","10"],
		answer:"6",
	},

	q5:{ 
		question:"The House of Representatives has how many voting members?",
		choices:["100","235","435","935"],
		answer:"435",
	}
};

//lets ceate an array questions from the above object
var createdQuestions = [questions.q1,questions.q2,questions.q3,questions.q4,questions.q5];

 // before we start the game lets empty the first screen
function stratGame(){
	$(".startButton").on("click",function(){
 		$(".firstScreen").empty();
 		createdQuestions();

	});
}

//lests create answers 
function answerForQuestions(){
	var answerLength = questions[questionsCounter]["answers"].length;
	for(var i = 0; i < answerLength;i++){
		//get answers
		var answers = questins[counter]["answers"][i];
		//Create new div to hold answers
		var newBtn = $("<button>");
		//Add class to new Div
		newBtn.addClass("answers redBtn");
		//Give buttons attribute
		newBtn.attr("data-type",answers);
		//add text to new Div
		newBtn.text(answers);
		//Add answers to DOM
		$(".firstScreen").append(newBtn);
	}
	
}
 


// lets create a list of the answer choice as mulitple choices.


//lets create an array of question from the object above
//var questionA = [questions.1, questions.2, questions.3,questions.4,questins.5];
//console.log(question.1);
// lets create radio for the multiple questions.

// function 
// function numberOfWins (){
// 	correctAnswer++;
// }
// $(document).ready(function(){

// function initalScreen (){
// $(".button").text("firstScreen");
// alert("working");
// }
// initalScreen();

// function 
// });
