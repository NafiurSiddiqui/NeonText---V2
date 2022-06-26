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

	// console.log(`TEXT: ${navTxtActive}`);
	// console.log(`FONT: ${navFontActive}`);
	// console.log(`COLOR: ${navColorActive}`);

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
						onAddedStorageText={captureStorageTextHandler}
						onDelTxtState={onDelTxtStateHandler}
						txtState={props.txtState}
						navState={navState.txtState}
					/>
					<UiFonts navState={navState.fontState} />
					<UiColors navState={navState.colorState} />
				</div>
			</div>
			<PriceCards />
		</article>
	);
}
export default UserInput;
