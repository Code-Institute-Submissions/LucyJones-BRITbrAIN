$(document).ready(function () {
  // const variables//
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

  // let variables//
  let score = 0;
  let questionCount = 0;
  let timeLeft = 30;
  let shuffledQuestions, currentQuestionIndex;


  //Event listeners//
  startButton.addEventListener("click", startGame);

  // Toggle question //
  $(".btn-info").click(function () {
    $("#question-box").toggle();
  });

  // Scoring //
  function correctScore() {
    score += 10;
    scoreCountElement.textContent = score;
  }
  function incorrectScore() {
    score -= 5;
    scoreCountElement.textContent = score;
  }

  // Question progress //
  function progress() {
    questionCount++;
    questionCountElement.textContent = questionCount;
  }

  // Start game //
  function startGame() {
    popupStartBox.classList.add("hide");
    gameHeaderElement.classList.remove("hide");
    questionContainerElement.classList.remove("hide");
    answerButtonsElement.classList.remove("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    setInterval(countdown, 1000);
    setNextQuestion();
  }

  // Next question//
  function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    $("#question-box").show();
    progress();
  }
  // Show question from array //
  function showQuestion(question) {
    questionElement.innerText = question.question;
  }

  // Timer //

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

  function noTimeLeft() {
    localStorage.setItem("newScore", score);
    return window.location.assign("end.html");
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
      console.log(userAnswer);
      incorrectScore();
      currentQuestionIndex++;
      setNextQuestion();
    }
  });

  // My questions //
  var questions = [
    {
      question: "In which region would you find a 'Brummie'?",
      correctAnswer: "west-midlands",
    },
    {
      question: "In which region would you find the Angel of the North?",
      correctAnswer: "north-east",
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
    {
      question: "In which region is the capital of the UK?",
      correctAnswer: "london",
    },
    {
      question: "In which region is Coronation Street filmed?",
      correctAnswer: "north-west",
    },
    {
      question: "In which region would you find 'The Humber Bridge'?",
      correctAnswer: "yorkshire-and-the-humber",
    },
    {
      question: "In which region would you find 'The University of Cambridge'?",
      correctAnswer: "eastern",
    },
  ];
});
