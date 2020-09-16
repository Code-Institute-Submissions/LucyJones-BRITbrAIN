const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("results")) || [];

highScoresList.innerHTML = highScores
  .map((score) => {
    return (
      `<li class="lb-username col-6">${score.name}</li>` +
      `<li class="lb-score col-2">${score.score}</li>`
    );
  })
  .join("");
