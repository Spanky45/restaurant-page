import burgerImage from "./images/burgers.jpg"

function loadHome() {

const content = document.querySelector("#content");

const heading = document.createElement("h1");
heading.textContent = "Welcome to The Burger House!";

content.appendChild(heading);

const image = document.createElement("img");
image.src = burgerImage;
image.alt = "Burgers";
image.id = "burger-image";

content.appendChild(image);

const para = document.createElement("p");
para.textContent = "Burgers is in our name, and Burgers are our game! We make any kind of burger you can think of! The best burger in town, guaranteed!";

content.appendChild(para);
}

export { loadHome };