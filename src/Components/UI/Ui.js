import { useState } from 'react';

import Header from '../Header';
import UiDisplay from './Ui-display/UiDisplay';
import UserInput from './Ui-input/input/UserInput';

function Ui() {
	//HERE looks like a good place to pass around data
	//newUserText?
	//userText?
	const [userText, setNewUserText] = useState('');

	const calculationHandler = (e) => {
		//any space should be omitted from calculating
		if (e.nativeEvent.data === ' ') {
			return;
		}
		//Displaying text and calculation
		if (e.nativeEvent.inputType === 'deleteContentBackward') {
			//recapture the userText here

			let delUserText = setNewUserText(e.target.value);

			//RERENDER THE USERTEXT
			if (delUserText.length !== 0) {
				// clearCanvas(ctx, canva);
				// writeOnCanvas(ctx, delUserText);
				// metrics = ctx.measureText(userText);
				// debounceMeasurement();
			}
		} else {
			//SIMPLY RENDER THE TEXT
			// writeOnCanvas(ctx, userText);
			// metrics = ctx.measureText(userText);
			// debounceMeasurement();
		}
	};

	return (
		<>
			<Header className="ui-logo" />
			<main className="container">
				<section className="ui-container">
					{/* UiDisplay here */}
					<UserInput />
					<UiDisplay />
				</section>
			</main>
		</>
	);
}
export default Ui;

/**
 * Here i needed to provide the context since both of the components that needs access are here.
 */
