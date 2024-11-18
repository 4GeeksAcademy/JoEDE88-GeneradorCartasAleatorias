/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// import ".assets/img/King.png";

let suit = document.getElementById("idPica");
let numberOrLetter = document.getElementById("numeroOLetra");
let reversedSuit = document.getElementById("picaReves");

let suits = ["♠", "♣", "♥", "♦"];
let numerosYLetras = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

function cartaAleatoria() {
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomNumber =
    numerosYLetras[Math.floor(Math.random() * numerosYLetras.length)];
  suit.innerHTML = randomSuit;
  numberOrLetter.innerHTML = randomNumber;
  reversedSuit.innerText = suit.innerText;
  if (randomSuit == "♥" || randomSuit == "♦") {
    suit.style.color = "red";
    reversedSuit.style.color = "red";
  } else {
    suit.style.color = "black";
    reversedSuit.style.color = "black";
  }
  /*   if (randomNumber === "K") {
    numberOrLetter.innerHTML = `<img id="myImg" src="King.png"></img>`;
  } */
}

window.onload = function() {
  cartaAleatoria();
};

let card = document.getElementById("randomCard");

card.addEventListener("click", cartaAleatoria);

let button = document.getElementById("btn");

button.addEventListener("click", cartaAleatoria);
