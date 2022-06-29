import { useState } from 'react';
import UiNav from '../nav/UiNav';
import PriceCards from '../priceCards/PriceCards';
import UiColors from './UiColors';
import UiFonts from './UiFonts';
import UiText from './UiText';

function UserInput(props) {
	//nav state here
	const [navTxtActive, setNavTxtActive] = useState(true);
	const [navFontActive, setNavFontActive] = useState(false);
	const [navColorActive, setNavColorActive] = useState(false);

	// console.log(props.setStorageStatus);

	const onDelTxtStateHandler = (delTxtState) => {
		//capture the text here

		props.capturedDelTxtState(delTxtState);
		// console.log(delTxtState);
	};

	const onAddedUserTextHandler = (userText) => {
		//capture the text here
		props.capturedUserText(userText);
	};

	const captureStorageTextHandler = (storageText) => {
		props.capturedStorageText(storageText);
	};

	const navTxtStateHandler = (txtState) => {
		setNavTxtActive(txtState);
	};

	const navFontStateHandler = (fontState) => {
		setNavFontActive(fontState);
	};
	const navColorStateHandler = (colorState) => {
		setNavColorActive(colorState);
	};

	const navState = {
		txtState: navTxtActive,
		fontState: navFontActive,
		colorState: navColorActive,
	};

	return (
		<article className="ui-input">
			<div className="ui-input-container">
				<UiNav
					setNavTxtState={navTxtStateHandler}
					setNavFontState={navFontStateHandler}
					setNavColorState={navColorStateHandler}
					navState={navState}
				/>
				<div className="ui-input-form-container">
					<UiText
						onAddedUserText={onAddedUserTextHandler}
						capturedStorageText={captureStorageTextHandler}
						onDelTxtState={onDelTxtStateHandler}
						txtState={props.txtState}
						navState={navState.txtState}
						setStorageStatus={props.setStorageStatus}
						storageStatus={props.storageStatus}
					/>
					<UiFonts
						navState={navState.fontState}
						getFontFamily={props.getFontFamily}
						getFontState={props.getFontState}
					/>
					<UiColors navState={navState.colorState} />
				</div>
			</div>
			<PriceCards />
		</article>
	);
}
export default UserInput;
