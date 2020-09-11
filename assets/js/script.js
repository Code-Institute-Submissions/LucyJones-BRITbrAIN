$(document).ready(function () {
  /* Code from codepen for timer- more details in readme*/
  var countdownNumberEl = document.getElementById("countdown-number");
  var countdown = 10;

  countdownNumberEl.textContent = countdown;

  setInterval(function () {
    countdown = --countdown <= 0 ? 10 : countdown;

    countdownNumberEl.textContent = countdown;
  }, 1000);

  // Toggle question //
  $(".btn-info").click(function () {
    $("#question-box").toggle();
  });
});
