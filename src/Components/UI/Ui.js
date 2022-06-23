import { useState } from 'react';

import Header from '../Header';
import UiDisplay from './Ui-display/UiDisplay';
import UserInput from './Ui-input/input/UserInput';

function Ui() {
	//HERE looks like a good place to pass around data
	//newUserText?
	//userText?

	const caputeredUserText = (userText) => {
		return userText;
	};

	const delUserText = (delText) => {
		return delText;
	};

	return (
		<>
			<Header className="ui-logo" />
			<main className="container">
				<section className="ui-container">
					{/* UiDisplay here */}
					<UserInput
						onDelUserText={delUserText}
						onAddedUserText={caputeredUserText}
					/>
					<UiDisplay onAddedUserText={caputeredUserText} />
				</section>
			</main>
		</>
	);
}
export default Ui;

/**
 * Here i needed to provide the context since both of the components that needs access are here.
 */
