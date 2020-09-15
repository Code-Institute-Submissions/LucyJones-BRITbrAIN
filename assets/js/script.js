$(document).ready(function () {
  // My questions //
  var questions = [
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
    {
      question: "In which region would you find Windsor Castle?",
      correctAnswer: "south-east",
    },
    {
      question: "Which region is home to Glastonbury Festival?",
      correctAnswer: "south-west",
    },
  ];

  /* Code from codepen for timer*/
  var timeLeft = 10;
  var countdownNumber = document.getElementById("countdown-number");

  // Toggle question //
  $(".btn-info").click(function () {
    $("#question-box").toggle();
  });

  scoreCount = 0;
  questionCount = 0;

  // Score count //
  function correctScore() {
    const scoreCountElement = document.getElementById("score-number");
    scoreCount++;
    scoreCountElement.textContent = scoreCount;
  }

  function incorrectScore() {
    const scoreCountElement = document.getElementById("score-number");
    scoreCount--;
    scoreCountElement.textContent = scoreCount;
  }

  // Question count //

  function progress() {
    const questionCountElement = document.getElementById("question-number");
    questionCount++;
    questionCountElement.textContent = questionCount;
  }

  // Start Quiz //
  const popupStartBox = document.getElementById("start-popup");
  const startButton = document.getElementById("letsgo-btn");
  const gameHeaderElement = document.getElementById("game-header");
  const questionContainerElement = document.getElementById(
    "question-container"
  );
  const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");
  const finalScore = document.getElementById("end-popup");

  let shuffledQuestions, currentQuestionIndex;

  //Event listener to start game//
  startButton.addEventListener("click", startGame);

  //Function to start game//
  function startGame() {
    popupStartBox.classList.add("hide");
    gameHeaderElement.classList.remove("hide");
    questionContainerElement.classList.remove("hide");
    answerButtonsElement.classList.remove("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 1;
    setInterval(countdown, 1000);
    setNextQuestion();
  }
  //Timer//
  function countdown() {
    timeLeft = --timeLeft <= -1 ? 10 : timeLeft;
    countdownNumber.textContent = timeLeft;
    if (timeLeft === 0) {
      noTimeLeft();
    } else {
      countdownNumber.textContent = timeLeft;
    }
  }

  function noTimeLeft() {
    const finalScoreCount = document.getElementById("finalScore");
    finalScoreCount.textContent = scoreCount;
    finalScore.classList.remove("hide");
    gameHeaderElement.classList.add("hide");
    questionContainerElement.classList.add("hide");
    answerButtonsElement.classList.add("hide");
  }

  // Function to show next question//
  function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    $("#question-box").show();
    progress();
  }
  // Show question content from question array //
  function showQuestion(question) {
    questionElement.innerText = question.question;
  }

  // Select answer //
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
      currentQuestionIndex++;
      setNextQuestion();
      correctScore();
    } else {
      //sweet alerts2 //
      Swal.fire({
        icon: "error",
        title: "Wrong Answer",
        showConfirmButton: false,
        timer: 1200,
      });
      currentQuestionIndex++;
      setNextQuestion();
      incorrectScore();
    }
  });

  // local storage //
});
