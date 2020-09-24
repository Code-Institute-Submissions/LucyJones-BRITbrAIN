$(document).ready(function () {
  // Create const variables
  const scoreCountElement = document.getElementById("score-number");
  const questionCountElement = document.getElementById("question-number");
  const popupStartBox = document.getElementById("start-popup");
  const startButton = document.getElementById("letsgo-btn");
  const gameHeaderElement = document.getElementById("game-header");
  const questionContainerElement = document.getElementById(
    "question-container"
  );
  const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");
  const countdownNumber = document.getElementById("countdown-number");
  const animationTimer = document.getElementById("timer");

  // let variables
  // Start score and question counters at 0
  // Start timer at 30 seconds
  // create questions empty array to link with json file
  let score = 0;
  let questionCount = 0;
  let timeLeft = 30;
  let shuffledQuestions, currentQuestionIndex;
  let questions = [];

  // Fetch questions and answers from local json file
  // Code sourced from You tube 'Build a Quiz App'- James Q Quick
  fetch("assets/js/questions.json")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((loadedQuestions) => {
      console.log(loadedQuestions);
      questions = loadedQuestions;
    });

  //Event listener to start game when user clicks startButton
  startButton.addEventListener("click", startGame);

  // Function to start game
  // Hide start popupStartBox once 'startButton' is clicked
  // Remove 'hide' on all game elements visible so user can play game
  function startGame() {
    popupStartBox.classList.add("hide");
    gameHeaderElement.classList.remove("hide");
    questionContainerElement.classList.remove("hide");
    answerButtonsElement.classList.remove("hide");
    // Shuffled questions maths to ensure questions are selected in random order
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    setInterval(countdown, 1000);
    setNextQuestion();
  }

  // Scoring function
  // Add 10 points to score for every correct answer
  // Remove 5 points from score for every wrong answer
  function correctScore() {
    score += 10;
    scoreCountElement.textContent = score;
  }
  function incorrectScore() {
    score -= 5;
    scoreCountElement.textContent = score;
  }

  // Timer function
  // CSS animation to start at same time as number countdown
  // Timer to countdown from 30s
  // If timer reaches 0, go to noTimeLeft function
  function countdown() {
    animationTimer.classList.add("animation");
    timeLeft = --timeLeft <= -1 ? 30 : timeLeft;
    countdownNumber.textContent = timeLeft;
    if (timeLeft === 0) {
      noTimeLeft();
    } else {
      countdownNumber.textContent = timeLeft;
    }
  }
  // If no time left, save final score to local storage
  // Take user to end.html page
  function noTimeLeft() {
    localStorage.setItem("newScore", score);
    return window.location.assign("end.html");
  }

  // Question progress function
  // Add one to question counter every time a new question is displayed
  function progress() {
    questionCount++;
    questionCountElement.textContent = questionCount;
  }

  // Toggle function to show and hide question
  $(".btn-info").click(function () {
    $("#question-box").toggle();
  });

  // Next question function
  function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    $("#question-box").show();
    progress();
  }
  // Show question function
  function showQuestion(question) {
    questionElement.innerText = question.question;
  }

  // Selecting answer function
  // User Answer becomes id value from which the user clicks
  // If user Answer value matches the correctAnswer in json array, correct popup appears
  // If user Answer doesn't match correctAnswer in json array, incorrect answer appears
  $(".choice").on("click", function () {
    let userAnswer = $(this).attr("id");
    if (userAnswer === questions[currentQuestionIndex].correctAnswer) {
      //sweet alerts2 //
      Swal.fire({
        icon: "success",
        title: "Correct Answer",
        showConfirmButton: false,
        timer: 1200,
      });
      correctScore();
      currentQuestionIndex++;
      setNextQuestion();
    } else {
      //sweet alerts2 //
      Swal.fire({
        icon: "error",
        title: "Wrong Answer",
        showConfirmButton: false,
        timer: 1200,
      });
      incorrectScore();
      currentQuestionIndex++;
      setNextQuestion();
    }
  });
});
