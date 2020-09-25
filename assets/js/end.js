// Code sourced from You tube 'Build a Quiz App'- James Q Quick
// Create const variables
const username = document.getElementById("username");
const submitScoreBtn = document.getElementById("submitScoreBtn");
const endScore = document.getElementById("finalScore");
const newScore = localStorage.getItem("newScore");

// Get 'highscores' or if first time create empty array to initialise empty 'results' array
const results = JSON.parse(localStorage.getItem("results")) || [];

// Set text content of endScore to newScore value
endScore.innerText = newScore;

// Disabled 'submitScoreBtn' so button can not be clicked unless a username has been entered
username.addEventListener("keyup", () => {
  submitScoreBtn.disabled = !username.value;
});

// Define 'submitHighScore' and prevent form from submitting to new page
const submitHighScore = (e) => {
  console.log("clicked the submit button!");
  e.preventDefault();

  // create new object 'record' and add to array
  // sort scores highest to lowest and keep top 10
  const record = {
    name: username.value,
    score: newScore,
  };
  results.push(record);
  results.sort((a, b) => b.score - a.score);
  results.splice(10);

  // Save 'record' to local storage and automatically go to leaderboard.html after submission
  localStorage.setItem("results", JSON.stringify(results));
  window.location.assign("leaderboard.html");
};
