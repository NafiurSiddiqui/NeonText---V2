import { useState } from 'react';

import Header from '../Header';
import UiDisplay from './Ui-display/UiDisplay';
import UserInput from './Ui-input/input/UserInput';

function Ui() {
	//HERE looks like a good place to pass around data
	//newUserText?
	//userText?

	const [captureUserText, setCaptureUserText] = useState('');
	const [captureStorageText, setCaptureStorageText] = useState('');
	const [capturedDelTxtState, setCapturedDelTxtState] = useState();

	const delTxtStateHandler = (delTxtState) => {
		setCapturedDelTxtState(delTxtState);
		// console.log();
	};

	// console.log(capturedDelTxtState);
	// console.log(captureUserText);
	// console.log(captureStorageText);

	const captureUserTextHandler = (userText) => {
		setCaptureUserText(userText);
		// console.log(userText);
	};

	const captureStorageTextHandler = (storageText) => {
		setCaptureStorageText(storageText);
		// console.log(storageText);
	};

	return (
		<>
			<Header className="ui-logo" />
			<main className="container">
				<section className="ui-container">
					{/* UiDisplay here */}
					<UserInput
						capturedUserText={captureUserTextHandler}
						capturedStorageText={captureStorageTextHandler}
						capturedDelTxtState={delTxtStateHandler}
					/>
					<UiDisplay capturedUserText={captureUserText} />
				</section>
			</main>
		</>
	);
}
export default Ui;

/**
 * Here i needed to provide the context since both of the components that needs access are here.
 */
