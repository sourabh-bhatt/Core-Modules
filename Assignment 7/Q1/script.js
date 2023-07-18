const questions = [
  {
    name: "What is JS?",
    options: ["Food", "Movie", "Computer", "Programmming Language"],
    answer: "Programmming Language",
  },
  {
    name: "How many 2+2 ?",
    options: ["1", "2", "3", "4"],
    answer: "4",
  },
  {
    name: "CEO of PW?",
    options: ["Krish Naik", "Sudhanshu Kumar", "Alakh Pandey", "Sourabh Bhatt"],
    answer: "Alakh Pandey",
  },
];

// Selecting the DOM
const questionNumbers = document.getElementById("numbers");
const questionElement = document.getElementById("questions");
const answer = document.getElementById("answers");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const form = document.getElementsByTagName("form")[0];
const statusElement = document.getElementById("status-areas");
const answerStatus = document.getElementById("status");
const leaderBoard = document.getElementById("leaderboard");
const rightQuestion = document.getElementById("right-question");
const wrongQuestion = document.getElementById("wrong-question");
const result = document.getElementById("result");

// Intializing the Quiz
let currentQuestion = 1;
let correctAnswer = 0;

function inputUpdate() {
  const question = questions[currentQuestion - 1];
  questionElement.innerText = question.name;
  questionNumbers.innerText = "Q." + currentQuestion;
  option1.innerText = question.options[0];
  option1.value = question.options[0];
  option2.innerText = question.options[1];
  option2.value = question.options[1];
  option3.innerText = question.options[2];
  option3.value = question.options[2];
  option4.innerText = question.options[3];
  option4.value = question.options[3];
  currentQuestion++;
}

function showResult() {
  form.style.display = "none";
  statusElement.style.display = "none";
  leaderBoard.style.display = "block";
  rightQuestion.innerText = correctAnswer;
  wrongQuestion.innerText = questions.length - correctAnswer;

  if (Math.floor(questions.length / 2) <= correctAnswer) {
    result.innerText = "Pass";
  } else {
    result.innerText = "Fail";
  }
}

inputUpdate();

submit.addEventListener("click", (event) => {
  event.preventDefault();
  statusElement.style.display = "block";
  if (answer.value === questions[currentQuestion - 2].answer) {
    answerStatus.innerText = "Correct Answer";
    statusElement.style.backgroundColor = "green";
    correctAnswer++;
  } else {
    answerStatus.innerText = "Wrong Answer";
    statusElement.style.backgroundColor = "red";
  }
  if (currentQuestion > questions.length) {
    showResult();
  } else {
    inputUpdate();
  }
});
