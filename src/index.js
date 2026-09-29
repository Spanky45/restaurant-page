import "./styles.css";
import burgers from "./images/burgers.jpg";
import logo from "./images/burgerhouselogo.png";

console.log("Restaurant page!");
console.log("Poop!");

const image = document.querySelector("#burger-image");
image.src = burgers

const burgerLogo = document.querySelector("#logo");
burgerLogo.src = logo;