import burgerImage from "./images/burgers.jpg"

function loadMenu() {

const content = document.querySelector("#content");

const heading = document.createElement("h1");
heading.textContent = "This is the Menu Page!";

content.appendChild(heading);

const image = document.createElement("img");
image.src = burgerImage;
image.alt = "Burgers";
image.id = "burger-image";

content.appendChild(image);

const para = document.createElement("p");
para.textContent = "Menu page is under construction!";

content.appendChild(para);
}

export { loadMenu };