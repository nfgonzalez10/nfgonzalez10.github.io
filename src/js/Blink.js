export default class Blink {
	constructor(canvas, text, interval, positionX, positionY) {
		this.canvas = canvas;
		this.text = text;
		this.intervalTime = this.interval(interval);
		this.positionX = positionX;
		this.positionY = positionY;
		this.textVisible = false;
		this.context = canvas.getContext("2d");
		this.text2 = "Hi! I'm Nicolas";
		this.totalText = "";
		this.cursosPositionX = positionX;
		this.cursosPositionY = positionY;
	}

	interval(interval) {
		return setInterval(() => {
			this.blink();
		}, interval);
	}

	blink() {
		this.textVisible ? this.clearCanvas() : this.drawCanvas();
	}

	clearCanvas() {
		this.textVisible = false;
		// this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.fillStyle = "rgb(3, 3, 3)";
		this.context.fillRect(
			this.cursosPositionX - 150,
			this.cursosPositionY - 100,
			this.cursosPositionX + 10,
			this.cursosPositionY + 20
		);
	}

	writeCanvas(letter, positionX, positionY) {
		this.totalText.concat(letter);
		console.log(this.totalText);
		this.context.fillStyle = "#0f0";
		this.context.font = "100pt Arial";
		this.context.fillText(letter, positionX, positionY);
	}

	drawCanvas() {
		this.context.font = "100pt Arial";
		this.context.fillStyle = "#0f0";
		this.context.fillText(
			this.text,
			this.cursosPositionX,
			this.cursosPositionY
		);
		this.textVisible = true;
	}

	stopIteration() {
		clearInterval(this.intervalTime);
	}
}
