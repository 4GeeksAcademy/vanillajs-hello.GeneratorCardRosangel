/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function() {
  //write your code here
  document.querySelector(".center").innerHTML = randomNumbers();
  let palo = randomIcon();
  let top = document.querySelector(".top");
  top.innerHTML = palo;
  let bottom = document.querySelector(".bottom");
  bottom.innerHTML = palo;

  function randomNumbers() {
    let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

    console.log(numbers);

    return numbers[Math.floor(Math.random() * numbers.length)];
  }

  function randomIcon() {
    let icons = ["♦", "♥", "♠", "♣"];
    console.log(icons);
    return icons[Math.floor(Math.random() * icons.length)];
  }
  if (palo == "♥" || palo == "♦") {
    console.log(top);
    top.style.color = "red";
    bottom.style.color = "red";
  }
};
let botto = document.querySelector("button");
botto.addEventListener("click", _ => {
  location.reload();
});
