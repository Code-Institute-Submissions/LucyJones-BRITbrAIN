// Create constant 'highScoresList'
// Get high scores from local storage
// If nothing in local storage will return empty array
const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("results")) || [];

// Iterates through array and creates new array with 'li' element for each name and score
// col class used for space formatting in leaderboard html
highScoresList.innerHTML = highScores
  .map((score) => {
    return (
      `<li class="lb-username col-6">${score.name}</li>` +
      `<li class="lb-score col-2">${score.score}</li>`
    );
  })
  .join("");
