//DISPLAY
export default function setDisplay(el, on = false) {
	if (on === true) {
		el.style.display = 'flex';
	} else {
		el.style.display = 'none';
	}
}

//FOR CANVAS
export function clearCanvas(ctx, canvasWidth, canvasHeight) {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
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

// export function debounceMeasurement(showBars,metrics) {
// 	let timeout;
// 	showBars(false);
// 	//cleartimeout
// 	clearTimeout(timeout);
// 	//measure bar
// 	timeout = setTimeout(() => {
// 		measureBars(metrics, textLength, barWidthSize, barHeight, barHeightSize);
// 	}, 3000);
// }

// export function measureBars(
// 	metrics,
// 	textLength,
// 	barWidthSize,
// 	barHeight,
// 	barHeightSize,
// 	largeFont = false
// ) {
// 	//height
// 	let height =
// 		Math.floor(metrics.actualBoundingBoxAscent) +
// 		Math.floor(metrics.actualBoundingBoxDescent);

// 	//measurement bars
// 	let widthSize = (barWidthSize.textContent = `${textLength * 2} CM`);
// 	barHeight.style.height = `${height}px`;

// 	//font Amsterdam or RasterSlice?
// 	let heightSize;
// 	if (largeFont === true) {
// 		return (heightSize = barHeightSize.textContent =
// 			`${Math.floor(height / 2)}Cm`);
// 	} else {
// 		heightSize = barHeightSize.textContent = `${Math.floor(height)}Cm`;
// 	}
// 	showBars(true);
// 	//PRICING
// 	let widthPrice = parseInt(widthSize);
// 	let heightPrice = parseInt(heightSize);
// 	calculatePricing(textLength);
// 	calculateDimension(widthPrice, heightPrice);
// 	return [widthSize, heightSize];
// }
