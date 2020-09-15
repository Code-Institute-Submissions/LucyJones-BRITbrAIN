$(document).ready(function () {
  const username = document.getElementById("username");
  const submitScoreBtn = document.getElementById("submitScoreBtn");
  const finalScore = document.getElementById("finalScore");
  const mostRecentScore = document.getElementById("mostRecentScore");

  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  const MAX_HIGH_SCORES = 5;

  finalScore.innerText = mostRecentScore;

  username.addEventListener("keyup", () => {
    submitScoreBtn.disabled = !username.value;
  });

  saveHighScore = (e) => {
    console.log("clicked the submit button!");
    e.preventDefault();

    const score = {
      score: Math.floor(Math.random() * 100),
      name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    // Automatically go to leaderboard after submission //
    window.location.assign("highscores.html");
  };
});
