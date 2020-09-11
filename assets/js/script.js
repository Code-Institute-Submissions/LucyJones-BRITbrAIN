$(document).ready(function () {
  /* Code from codepen for timer- more details in readme*/
  var countdownNumberEl = document.getElementById("countdown-number");
  var countdown = 10;

  countdownNumberEl.textContent = countdown;

  setInterval(function () {
    countdown = --countdown <= 0 ? 10 : countdown;

    countdownNumberEl.textContent = countdown;
  }, 1000);

  // Toggle question //
  $(".btn-info").click(function () {
    $("#question-box").toggle();
  });

  // Start Quiz //
  const popupStartBox = document.getElementById("start-popup");
  const startButton = document.getElementById("letsgo-btn");
  const gameHeaderElement = document.getElementById("game-header");
  const questionContainerElement = document.getElementById(
    "question-container"
  );
  const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");

  let shuffledQuestions, currentQuestionIndex;

  startButton.addEventListener("click", startGame);

  //Function to start game//
  function startGame() {
    popupStartBox.classList.add("hide");
    gameHeaderElement.classList.remove("hide");
    questionContainerElement.classList.remove("hide");
    answerButtonsElement.classList.remove("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 1;
    setNextQuestion();
  }

  // Function to show next question//
  function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  }
  // Show quesion from question array //
  function showQuestion(question) {
    questionElement.innerText = question.question;
  }

  // My questions //
  let questions = [
    {
      question: "In which region would you find a 'Brummie'?",
      correctAnswer: "west-midlands",
    },
    {
      question: "In which region would you find the Angel of the North?",
      correctAnswer: "yorkshire-and-the-humber",
    },
    {
      question: "In which region were the Beatles formed?",
      correctAnswer: "north-west",
    },
  ];
});
