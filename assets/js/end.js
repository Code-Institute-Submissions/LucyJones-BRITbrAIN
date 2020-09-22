// Create const variables
const username = document.getElementById("username");
const submitScoreBtn = document.getElementById("submitScoreBtn");
const endScore = document.getElementById("finalScore");
const newScore = localStorage.getItem("newScore");
const maxHighScores = 10;

// Get 'highscores' or if first time create empty array to initialise empty 'results' array
// JSON parse to get a JS object array
const results = JSON.parse(localStorage.getItem("results")) || [];

// Set text content of endScore to newScore value. 
endScore.innerText = newScore;

// Disabled 'submitScoreBtn' so button can not be clicked unless a username has been entered
username.addEventListener("keyup", () => {
  submitScoreBtn.disabled = !username.value;
});

// Define 'submitHighScore' function and get event 'e' onclick
// Prevent form from submitting to new page
submitHighScore = (e) => {
  console.log("clicked the submit button!");
  e.preventDefault();

  // create 'record' object
  const record = {
    name: username.value,
    score: newScore,
  };
  // add 'record' object to array
  results.push(record);
  // Sort scores highest to lowest
  results.sort((a, b) => b.score - a.score);
  // Only keep top 10 scores
  results.splice(10);

  // Converts javascript objects to json string
  // Local storage only uses key-value pairs with value being string
  localStorage.setItem("results", JSON.stringify(results));
  // Automatically go to leaderboard.html after submission
  window.location.assign("leaderboard.html");
};
