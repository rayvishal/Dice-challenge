let num1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
let num2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
let dice1 = document
  .querySelector(".img1")
  .setAttribute("src", `./images/dice${num1}.png`);
const dice2 = document
  .querySelector(".img2")
  .setAttribute("src", `./images/dice${num2}.png`);
let winner;
if (num1 === num2) {
  winner = "Match is Drawn";
} else if (num1 > num2) {
  winner = "Player 1 Wins the match";
} else {
  winner = "Player 2 wins the match";
}
const h1 = (document.querySelector("h1").innerText = winner);
