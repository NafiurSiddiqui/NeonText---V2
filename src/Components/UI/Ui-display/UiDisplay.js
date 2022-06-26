import { useState } from 'react';
import NeonSwitch from './NeonSwitch';
import Canvas from './UiCanvas';
import UserTextAndBars from './UserTextAndBars';

function UiDisplay(props) {
	//HERE
	const [capturedLetterHeight, setCapturedLetterHeight] = useState();
	// console.log(props.capturedUserText);
	// console.log(props.delTxtState);

	const letterHeightHandler = (letterHeight) => {
		// console.log(letterHeight);
		setCapturedLetterHeight(letterHeight);
	};

	return (
		<article className="ui-display">
			<NeonSwitch />
			<div className="ui-display-userText-container">
				<UserTextAndBars
					capturedUserText={props.capturedUserText}
					letterHeight={capturedLetterHeight}
					txtState={props.txtState}
					storageText={props.storageText}
				/>
				<Canvas
					capturedUserText={props.capturedUserText}
					delTxtState={props.delTxtState}
					letterHeight={letterHeightHandler}
				/>
			</div>
		</article>
	);
}
export default UiDisplay;
