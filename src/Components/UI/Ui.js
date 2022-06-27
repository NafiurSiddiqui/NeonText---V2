import { useState } from 'react';

import Header from '../Header';
import UiDisplay from './Ui-display/UiDisplay';
import UserInput from './Ui-input/input/UserInput';

function Ui() {
	//HERE looks like a good place to pass around data
	//newUserText?
	//userText?

	const [captureUserText, setCaptureUserText] = useState('');
	const [capturedStorageText, setCapturedStorageText] = useState('');
	const [storageStatus, setStorageStatus] = useState();

	const [capturedDelTxtState, setCapturedDelTxtState] = useState();
	const [txtState, setTxtState] = useState(false);

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
						txtState={txtStateHandler}
						setStorageStatus={storageStatusHandler}
						storageStatus={storageStatus}
					/>
					<UiDisplay
						capturedUserText={captureUserText}
						delTxtState={capturedDelTxtState}
						txtState={txtState}
						capturedStorageText={capturedStorageText}
						storageStatus={storageStatus}
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
