import "./styles.css";
import logo from "./images/burgerhouselogo.png";
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";

const burgerLogo = document.querySelector("#logo");
burgerLogo.src = logo;

const content = document.querySelector("#content");

const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const aboutButton = document.querySelector("#about-btn");

function clearContent() {
    content.innerHTML = "";
}

homeButton.addEventListener("click", () => {
    clearContent();
    loadHome();
});

menuButton.addEventListener("click", () => {
    clearContent();
    loadMenu();
});

aboutButton.addEventListener("click", () => {
    clearContent();
    loadAbout();
});

loadHome();