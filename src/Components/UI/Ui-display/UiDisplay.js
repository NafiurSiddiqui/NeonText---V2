import { useState } from 'react';
import NeonSwitch from './NeonSwitch';
import Canvas from './UiCanvas';
import UserTextAndBars from './UserTextAndBars';

function UiDisplay(props) {
	//HERE
	const [capturedLetterHeight, setCapturedLetterHeight] = useState();

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
					capturedStorageText={props.capturedStorageText}
					storageStatus={props.storageStatus}
				/>
				<Canvas
					capturedUserText={props.capturedUserText}
					delTxtState={props.delTxtState}
					letterHeight={letterHeightHandler}
					capturedStorageText={props.capturedStorageText}
					storageStatus={props.storageStatus}
				/>
			</div>
		</article>
	);
}
export default UiDisplay;
