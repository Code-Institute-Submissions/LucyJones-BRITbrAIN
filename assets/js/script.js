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
  const answerButtonsElement = document.getElementById("answer-buttons");

  startButton.addEventListener("click", startGame);

  //Function to start game//
  function startGame() {
    popupStartBox.classList.add("hide");
    gameHeaderElement.classList.remove("hide");
    questionContainerElement.classList.remove("hide");
    answerButtonsElement.classList.remove("hide");
  }
  
});
