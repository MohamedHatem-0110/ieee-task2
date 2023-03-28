function DiceRoll() {
  let score1 = Math.floor(Math.random() * (7 - 1) + 1);
  let score2 = Math.floor(Math.random() * (7 - 1) + 1);
  let player1Imagesrc = "images/dice" + score1 + ".png";
  let player2Imagesrc = "images/dice" + score2 + ".png";
  document.querySelector(".dice__img1").setAttribute("src", player1Imagesrc);
  document.querySelector(".dice__img2").setAttribute("src", player2Imagesrc);
  let Title = document.querySelector(".title");

  if (score1 > score2) {
    Title.innerHTML = "Player 1 wins";
  } else if (score1 < score2) {
    Title.innerHTML = "Player 2 wins";
  } else {
    Title.innerHTML = "Draw";
  }
}
document.querySelector(".button").addEventListener("click", DiceRoll);
