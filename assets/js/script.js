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

  // Start score and question counters at 0
  // Start timer at 30 seconds
  // create questions empty array to link with json file
  let score = 0;
  let questionCount = 0;
  let timeLeft = 30;
  let shuffledQuestions, currentQuestionIndex;
  let questions = [];

  // Code sourced from You tube 'Build a Quiz App'- James Q Quick
  // Fetch json question file
  fetch("assets/js/questions.json")
    .then((res) => {
      return res.json();
    })
    .then((loadedQuestions) => {
      questions = loadedQuestions;
    });

  //Event listener to start game when user clicks startButton
  startButton.addEventListener("click", startGame);

  // Function to start game
  // Shuffled questions maths to ensure questions are selected in random order
  function startGame() {
    popupStartBox.classList.add("hide");
    gameHeaderElement.classList.remove("hide");
    questionContainerElement.classList.remove("hide");
    answerButtonsElement.classList.remove("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    setInterval(countdown, 1000);
    score = 0;
    questionCount = 0;
    setNextQuestion();
  }

  // Scoring function, +10 points for correct answer, -5 points for wrong answer
  function correctScore() {
    score += 10;
    scoreCountElement.textContent = score;
  }
  function incorrectScore() {
    score -= 5;
    scoreCountElement.textContent = score;
  }

  // Timer function, counts
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
  // If no time left, save final score to local storage and take user to end.html page
  function noTimeLeft() {
    localStorage.setItem("newScore", score);
    return window.location.assign("end.html");
  }

  // Question progress function- add one to question counter every time a new question is displayed
  function progress() {
    questionCount++;
    questionCountElement.textContent = questionCount;
  }

  // Toggle click function to show and hide question
  // Hide hover function to hide question when mouse moves over #question-box
  $(".btn-info").click(function () {
    $("#question-box").toggle();
  });
  $("#question-box").hover(function () {
    $("#question-box").hide();
  });

  // Next question function
  function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    $("#question-box").show();
    progress();
  }
  // Show question function shows question in #question
  function showQuestion(question) {
    questionElement.innerText = question.question;
  }

  // ID of region clicked becomes userAnswer, userAnswer checked against CorrectAnswer
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
