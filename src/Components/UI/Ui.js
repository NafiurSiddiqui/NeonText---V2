import { useState } from 'react';

import Header from '../Header';
import UiDisplay from './Ui-display/UiDisplay';
import UserInput from './Ui-input/input/UserInput';

//default neonColor on load
const defaultColor = '#20f020';

function Ui() {
	//UiText state
	const [captureUserText, setCaptureUserText] = useState('');
	const [capturedStorageText, setCapturedStorageText] = useState('');
	const [storageStatus, setStorageStatus] = useState();
	const [capturedDelTxtState, setCapturedDelTxtState] = useState();
	const [txtState, setTxtState] = useState(false);
	//UiFont state
	const [fontFamily, setFontFamily] = useState();
	const [fontState, getFontState] = useState(false);
	//UiColor State
	const [colorActive, setColorActive] = useState(defaultColor);


	const delTxtStateHandler = (delTxtState) => {
		setCapturedDelTxtState(delTxtState);
		// console.log();
	};

	const txtStateHandler = (txtState) => {
		setTxtState(txtState);
	};

	const captureUserTextHandler = (userText) => {
		setCaptureUserText(userText);
		// console.log(userText);
	};

	const captureStorageTextHandler = (storageText) => {
		setCapturedStorageText(storageText);
	};

	const storageStatusHandler = (status) => {
		setStorageStatus(status);
	};
	
	const activeColorHandler =(color)=>{
		setColorActive(color)
	 };

	 

	return (
		<>
			<Header className="ui-logo" />
			<main className="container">
				<section className="ui-container">
					<UserInput
						capturedUserText={captureUserTextHandler}
						capturedStorageText={captureStorageTextHandler}
						capturedDelTxtState={delTxtStateHandler}
						txtState={txtStateHandler}
						setStorageStatus={storageStatusHandler}
						storageStatus={storageStatus}
						getFontFamily={setFontFamily}
						getFontState={getFontState}
						getActiveColor={activeColorHandler}
						activeColor={colorActive}
					/>
					<UiDisplay
						capturedUserText={captureUserText}
						delTxtState={capturedDelTxtState}
						txtState={txtState}
						capturedStorageText={capturedStorageText}
						storageStatus={storageStatus}
						setFontFamily={fontFamily}
						fontState={fontState}
						activeColor={colorActive}
					/>
				</section>
			</main>
		</>
	);
}
export default Ui;

/**
 * Here i needed to provide the context since both of the components that needs access are here.
 */
