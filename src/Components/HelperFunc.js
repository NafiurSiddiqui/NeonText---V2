//DISPLAY
export default function setDisplay(el, on = false) {
	if (on === true) {
		el.style.display = 'flex';
	} else {
		el.style.display = 'none';
	}
}

//FOR CANVAS
export function clearCanvas(ctx, canva) {
	ctx.clearRect(0, 0, canva.width, canva.height);
}

export function writeOnCanvas(ctx, userText) {
	ctx.fillText(userText, 0, 50);
}

export function writeOnCanvasWithFont(ctx, userText, font) {
	ctx.font = `4rem ${font}`;
	ctx.fillStyle = 'White';
	ctx.fillText(userText, 0, 50);
}

//MEASUREMENT

// export function debounceMeasurement() {
// 	let timeout;
// 	showBars(false);
// 	//cleartimeout
// 	clearTimeout(timeout);
// 	//measure bar
// 	timeout = setTimeout(() => {
// 		measureBars(metrics, textLength, barWidthSize, barHeight, barHeightSize);
// 	}, 3000);
// }
