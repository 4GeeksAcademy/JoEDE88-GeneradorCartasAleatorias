/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import "./assets/img/King.png";
import "./assets/img/queen.png";
import "./assets/img/jack.png";

let card = document.getElementById("randomCard");
let suit = document.getElementById("idPica");
let numberOrLetter = document.getElementById("numeroOLetra");
let reversedSuit = document.getElementById("picaReves");
let boton = document.getElementById("btn");
let widthInput = document.getElementById("inputWidth");
let heightInput = document.getElementById("inputHeight");

function generarCartaAleatoria() {
  let suits = ["♠", "♣", "♥", "♦"];
  let numerosYLetras = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomNumber =
    numerosYLetras[Math.floor(Math.random() * numerosYLetras.length)];
  suit.innerHTML = randomSuit;
  numberOrLetter.innerHTML = randomNumber;
  reversedSuit.innerText = suit.innerText;

  suit.style.color = reversedSuit.style.color =
    randomSuit == "♥" || randomSuit == "♦" ? "red" : "black";

  if (randomNumber === "K") {
    numberOrLetter.innerHTML = `<img id="myImg" src="King.png"></img>`;
  }
  if (randomNumber === "Q") {
    numberOrLetter.innerHTML = `<img id="myImg" src="queen.png"></img>`;
  }
  if (randomNumber === "J") {
    numberOrLetter.innerHTML = `<img id="myImg" src="jack.png"></img>`;
  }
}

function adjustWidth(size) {
  card.style.width = `${size}px`;
}
function adjustHeight(size) {
  card.style.height = `${size}px`;
}

window.onload = function() {
  generarCartaAleatoria();
};

card.addEventListener("click", generarCartaAleatoria);

boton.addEventListener("click", generarCartaAleatoria);

const tresSegundos = 3000;
setInterval(generarCartaAleatoria, tresSegundos);

widthInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter" && e.target.value) {
    adjustWidth(e.target.value);
    e.target.value = "";
  }
});

heightInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter" && e.target.value) {
    adjustHeight(e.target.value);
    e.target.value = "";
  }
});
