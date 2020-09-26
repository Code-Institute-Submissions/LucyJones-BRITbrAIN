// Code sourced from You tube 'Build a Quiz App'- James Q Quick
// Create constant 'highScoresList' for Leaderboard
// Get high scores from local storage and if nothing in local storage will return empty array
const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("results")) || [];

// Iterates through array and creates new array with 'li' element for each name and score, col class added to format leaderboard
highScoresList.innerHTML = highScores
  .map((score) => {
    return (
      `<li class="lb-username col-6">${score.name}</li>` +
      `<li class="lb-score col-2">${score.score}</li>`
    );
  })
  .join("");
