let firstCard = 4;
let secondCard = 2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let sumEl = document.getElementById("totalsum");
let speLa = document.getElementById("spela");
let cards = document.getElementById("kortena");

function begin() {
  cards.textContent = "Cards: " + firstCard + " , " + secondCard;
  sumEl.textContent = "sum: " + sum;
  if (sum <= 20) {
    message = "do you want to draw a new card?";
  } else if (sum === 21) {
    message = "congrats!";
    hasBlackJack = true;
  } else {
    message = "gtfo";
    isAlive = false;
  }
  speLa.textContent = message;
}

function drawNew() {
  let thirdcard = 3;
  cards.textContent += " , " + thirdcard;
  sum += thirdcard;
  sumEl.textContent = "sum: " + sum;
}
