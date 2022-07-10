import { useState } from 'react';
import NeonSwitch from './NeonSwitch';
import Canvas from './UiCanvas';
import UserTextAndBars from './UserTextAndBars';

function UiDisplay(props) {
	//HERE
	const [capturedLetterHeight, setCapturedLetterHeight] = useState();
	const [toggleNeon, setToggleNeon] = useState(true);

	const letterHeightHandler = (letterHeight) => {
		// console.log(letterHeight);
		setCapturedLetterHeight(letterHeight);
	};

	const neonSwitchHandler =(switchState)=>{
		setToggleNeon(switchState);
		// console.log(toggleNeon);
	 };

	return (
		<article className="ui-display">
			<NeonSwitch setNeonSwitch={neonSwitchHandler} neonSwitchState={toggleNeon} />
			<div className="ui-display-userText-container">
				<UserTextAndBars
					capturedUserText={props.capturedUserText}
					letterHeight={capturedLetterHeight}
					txtState={props.txtState}
					capturedStorageText={props.capturedStorageText}
					storageStatus={props.storageStatus}
					setFontFamily={props.setFontFamily}
					neonSwitchState={toggleNeon}
					activeColor={props.activeColor}
				/>
				<Canvas
					capturedUserText={props.capturedUserText}
					delTxtState={props.delTxtState}
					letterHeight={letterHeightHandler}
					capturedStorageText={props.capturedStorageText}
					storageStatus={props.storageStatus}
					setFontFamily={props.setFontFamily}
					fontState={props.fontState}
				/>
			</div>
		</article>
	);
}
export default UiDisplay;
