const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerText = highScores
  .map((score) => {
    return `
        ${score.name} - ${score.score} 
    `;
  })
  .join("");
