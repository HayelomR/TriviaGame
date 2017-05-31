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
var counter = 0;//number of questions
var clock = 0;//time tracker
var firstScreen = ;// the first screen that will be shown first with the button


var questions = [
1 : {
	question: "how many amendments does the constitution have?",
	choices: ["20","14","27","8"],
	answer: 4;
},

2 : {
	question:"who is in charge of the executive branch?"
	choices: ["president","speaker of house","fox news","cpac"],
	answer: 1;

},

3:{
	question:"How many U.S. Senators are there?"
	choices:["50","40","100","121"],
	answer:3;
},

4:{
	question:"We elect a U.S. Senator for how many years?",
	choices:["2","8","6","10"],
	answer:3,
},

5:{ 
	question:"The House of Representatives has how many voting members?"
	choices:["100","235","435","935"],
	answer:3,
}];
//lets create an array of question from the object above
var questionA = [questions.1, questions.2, questions.3,questions.4,questins.5];

function numberOfWins (){
	correctAnswer++;

}
$(document).ready(function(){

function initalScreen (){
$(".largeButton").text("firstScreen");
}
initalScreen();

function 
});
