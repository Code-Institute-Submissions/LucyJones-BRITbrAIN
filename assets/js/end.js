$(document).ready(function () {
  const username = document.getElementById("username");
  const submitScoreBtn = document.getElementById("submitScoreBtn");
  const newScore = localStorage.getItem("newScore");
  const MAX_HIGH_SCORES = 5;

  // Get highscores or if first time get empty array //
  const results = JSON.parse(localStorage.getItem("results")) || [];

  // Submit button will not work unless username entered //
  username.addEventListener("keyup", () => {
    submitScoreBtn.disabled = !username.value;
  });

  submitHighScore = (e) => {
    console.log("clicked the submit button!");
    e.preventDefault();

    const record = {
      name: username.value,
      score: newScore,
    };
    results.push(record);
    // Sort scores highest to lowest //
    results.sort((a, b) => b.score - a.score);
    // Only keep top 5 scores //
    results.splice(5);

    localStorage.setItem("results", JSON.stringify(results));
    // Automatically go to leaderboard after submission //
    window.location.assign("highscores.html");
  };
});
