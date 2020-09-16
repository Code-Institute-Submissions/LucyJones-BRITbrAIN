const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("results")) || [];

highScoresList.innerHTML = highScores
  .map((score) => {
    return (
      `<li class="lb-username col-8">${score.name}</li>` +
      `<li class="lb-score col-4">${score.score}</li>`
    );
  })
  .join("");
