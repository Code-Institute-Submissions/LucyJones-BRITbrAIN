$(document).ready(function () {
  const username = document.getElementById("username");
  const submitScoreBtn = document.getElementById("submitScoreBtn");
  const finalScore = document.getElementById("finalScore");
  const mostRecentScore = document.getElementById("mostRecentScore");

  // Get highscores or if first time get empty array //
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  const MAX_HIGH_SCORES = 5;

  finalScore.innerText = mostRecentScore;

  username.addEventListener("keyup", () => {
    submitScoreBtn.disabled = !username.value;
  });

  submitHighScore = (e) => {
    console.log("clicked the submit button!");
    e.preventDefault();

    const score = {
      score: Math.floor(Math.random() * 100),
      name: username.value,
    };
    highScores.push(score);
    // Sort scores highest to lowest //
    highScores.sort((a, b) => b.score - a.score);
    // Only keep top 5 scores //
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    // Automatically go to leaderboard after submission //
    window.location.assign("highscores.html");
  };
});
