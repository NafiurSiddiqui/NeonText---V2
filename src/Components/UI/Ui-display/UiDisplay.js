import NeonSwitch from './NeonSwitch';
import Canvas from './UiCanvas';
import UserTextAndBars from './UserTextAndBars';

function UiDisplay(props) {
	//HERE

	const userTextHandler = () => {
		// console.log(props.onAddedUserText);
	};

	const calculationHandler = (e) => {
		console.log(e);
		//any space should be omitted from calculating
		if (e.nativeEvent.data === ' ') {
			return;
		}
		//Displaying text and calculation
		// if (e.nativeEvent.inputType === 'deleteContentBackward') {
		// 	//recapture the userText here
		// 	// let delUserText = setNewUserText(e.target.value);
		// 	//RERENDER THE USERTEXT
		// 	if (delUserText.length !== 0) {
		// 		// clearCanvas(ctx, canva);
		// 		// writeOnCanvas(ctx, delUserText);
		// 		// metrics = ctx.measureText(userText);
		// 		// debounceMeasurement();
		// 	}
		// } else {
		// 	//SIMPLY RENDER THE TEXT
		// 	// writeOnCanvas(ctx, userText);
		// 	// metrics = ctx.measureText(userText);
		// 	// debounceMeasurement();
		// }
	};

	return (
		<article className="ui-display">
			<NeonSwitch />
			{/* <!-- user text --> */}
			<div className="ui-display-userText-container">
				<UserTextAndBars />
				<Canvas />
			</div>
		</article>
	);
}
export default UiDisplay;
