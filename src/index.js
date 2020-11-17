import _ from "lodash";
import "./style.scss";
import "./index.html";
function component() {
	const element = document.createElement("div");

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(["Hello", "webpack", "hola todos"], " ");

	return element;
}

document.body.appendChild(component());
