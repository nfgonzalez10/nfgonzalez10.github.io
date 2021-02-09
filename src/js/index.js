import _ from "lodash";
import "../css/style.scss";
import Picture1 from "../assets/foto1.jpg";
import headerHTML from "../components/header.html";
import mainHTML from "../components/main.html";
import contactHTML from "../components/contact.html";
import { createImages } from "./utils";

const greetText = "Hi! I'm Nicolás Full stack developer.";
let globalText = "";
let flagbreakLine = false;

// document.body.appendChild(component());
const root = document.getElementById("root");
root.innerHTML = headerHTML + mainHTML;

// Initialising the canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
let letters =
	"ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
letters = letters.split("");
let flagTime = false;

// Setting up the columns
const fontSize = 10,
	columns = canvas.width / fontSize;

// Setting up the drops
const drops = [];
for (let i = 0; i < columns; i++) {
	drops[i] = 1;
}

// Setting up the draw function
function draw() {
	ctx.fillStyle = "rgba(0, 0, 0, .1)";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	for (let i = 0; i < drops.length; i++) {
		const text = letters[Math.floor(Math.random() * letters.length)];
		ctx.fillStyle = "#0f0";
		ctx.fillText(text, i * fontSize, drops[i] * fontSize);
		drops[i]++;
		if (
			drops[i] * fontSize > canvas.height &&
			Math.random() > 0.95 &&
			!flagTime
		) {
			drops[i] = 0;
		}
	}
}

// Loop the animation
const intervalMatrix = setInterval(draw, 33);

setTimeout(() => {
	flagTime = true;
	setTimeout(async () => {
		clearInterval(intervalMatrix);
		const canvasElement = document.getElementById("canvas");
		canvasElement.remove();
		const mainBlock = createMainBlock();
		root.innerHTML += mainBlock.outerHTML;
		await writeInTerminal();
		paintfirsImage();
	}, 3000);
}, 6000);

function createMainBlock() {
	const mainBlock = document.createElement("div");
	mainBlock.classList.add("main-block");
	return mainBlock;
}

const createTextMainBlock = () => {
	const mainBlock = document.createElement("div");
	mainBlock.classList.add("main-block__text");
	return mainBlock;
};
async function writeInTerminal() {
	const arrayText = greetText.split("");
	return await Promise.all(
		arrayText.map((letter, indexLetter) => {
			return new Promise((resolve) => {
				setTimeout(() => {
					const childNode = document.getElementsByClassName("main-block__text");
					childNode.length > 0 &&
						childNode[0].parentNode.removeChild(childNode[0]);
					const mainBlock = createTextMainBlock();
					globalText += letter;
					if (globalText.includes("Nicolás") && !flagbreakLine) {
						globalText += "<br/>";
						flagbreakLine = true;
					}
					mainBlock.innerHTML = globalText;
					const parent = document.getElementsByClassName("main-block");
					parent[0].appendChild(mainBlock);
					resolve("ok");
				}, 200 * indexLetter);
			});
		})
	);
}

const paintfirsImage = () => {
	setTimeout(() => {
		const photo1 = createImages(
			Picture1,
			"Nicolás Gonzalez",
			"Happy Developer"
		);
		photo1.classList.add("main-block__image");
		const parent = document.getElementsByClassName("main-block");
		parent[0].appendChild(photo1);
	}, 5000);
};
