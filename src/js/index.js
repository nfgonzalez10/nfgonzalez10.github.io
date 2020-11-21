import _ from "lodash";
import "../css/style.scss";
import headerHTML from "../components/header.html";
import mainHTML from "../components/main.html";

function component() {
	const element = document.createElement("div");

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(["Hello", "webpack", "hola todos"], " ");

	return element;
}

// document.body.appendChild(component());
const root = document.getElementById("root");
root.innerHTML = headerHTML + mainHTML;
