"use strict";

let score = 20;
let secertNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

// HANDLING CLICK EVENTS
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "no number!";

    // when player wins
  } else if (guess === secertNumber) {
    document.querySelector(".message").textContent = "CORRECT NUMBER!";
    document.querySelector(".number").textContent = secertNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rcm";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secertNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "TOO HIGH!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "YOU LOST SORRY!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secertNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "TOO LOW!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "YOU LOST SORRY!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secertNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").textContent = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
