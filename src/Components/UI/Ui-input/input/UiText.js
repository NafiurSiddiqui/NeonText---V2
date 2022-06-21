import { useEffect, useState } from 'react';
import {} from '../../../HelperFunc';

function UiText() {
	//hooks
	const [userText, setUserText] = useState('');

	const userTextChangeHandler = (e) => {
		setUserText(e.target.value);

		//persist data in local storage
		localStorage.setItem('userText', userText);
		console.log(e.nativeEvent.inputType);
		//any space should be omitted from calculating
		if (e.nativeEvent.data === ' ') {
			return;
		}

		if (e.nativeEvent.inputType === 'deleteContentBackward') {
			//recapture the userText here

			let newUserText = setUserText(e.target.value);
			//rerender the userText
			if (newUserText.length !== 0) {
				// clearCanvas(ctx, canva);
				// writeOnCanvas(ctx, newUserText);
				// metrics = ctx.measureText(userText);
				// debounceMeasurement();
			}
		} else {
			// writeOnCanvas(ctx, userText);
			// metrics = ctx.measureText(userText);
			// debounceMeasurement();
		}
	};

	// console.log(userText);

	useEffect(() => {
		let localUserText = localStorage.getItem('userText');

		if (localUserText === null) {
			return;
		} else if (localUserText.length > 1) {
			console.log('TRUE');
			setUserText(localUserText);
		}

		// return () => {};
	}, []);

	let textLength = null;

	textLength = userText.length;

	console.log(textLength);

	//GUARD
	if (textLength >= 20) {
		alert(
			`If you need more than 30 characters of text, Please contact us: 📞 +14-999-876-42`
		);
	}

	return (
		<section className="ui-input-form text ui-active">
			<input
				type="text"
				name="userText"
				id="userText"
				placeholder="Type your text here"
				spellCheck="false"
				onChange={userTextChangeHandler}
			/>
		</section>
	);
}
export default UiText;
