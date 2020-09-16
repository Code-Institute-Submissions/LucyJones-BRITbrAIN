$(document).ready(function () {
  // Toggle question //
  $(".btn-info").click(function () {
    $("#question-box").toggle();
  });

  // Scoring //

  let score = 0;
  const scoreCountElement = document.getElementById("score-number");

  function correctScore() {
    score += 10;
    scoreCountElement.textContent = score;
  }

  function incorrectScore() {
    score -= 5;
    scoreCountElement.textContent = score;
  }

  // Progress //

  let questionCount = 0;
  const questionCountElement = document.getElementById("question-number");

  function progress() {
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
  //Timer//

  let timeLeft = 10;
  const countdownNumber = document.getElementById("countdown-number");

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
});
