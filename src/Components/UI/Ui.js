import { useState } from 'react';

import Header from '../Header';
import UiDisplay from './Ui-display/UiDisplay';
import UserInput from './Ui-input/input/UserInput';

function Ui() {
	//HERE looks like a good place to pass around data
	//newUserText?
	//userText?

	// const [capturedUserText, setCapturedUserText] = useState('');

	const capturedUserTextHandler = (userText) => {
		// setCapturedUserText(userText);
		console.log(userText);
	};

	const delUserTextHandler = (delText) => {
		return delText;
	};
	// console.log(capturedUserText);
	return (
		<>
			<Header className="ui-logo" />
			<main className="container">
				<section className="ui-container">
					{/* UiDisplay here */}
					<UserInput
						onDelUserText={delUserTextHandler}
						onAddedUserText={capturedUserTextHandler}
					/>
					<UiDisplay captureText={capturedUserTextHandler} />
				</section>
			</main>
		</>
	);
}
export default Ui;

/**
 * Here i needed to provide the context since both of the components that needs access are here.
 */
