import "./styles.css";
import logo from "./images/burgerhouselogo.png";
import { loadHome } from "./home";

console.log("Restaurant page!");
console.log("Poop!");

const burgerLogo = document.querySelector("#logo");
burgerLogo.src = logo;

loadHome();