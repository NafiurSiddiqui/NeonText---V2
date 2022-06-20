import { useEffect, useState } from 'react';

function UiText() {
	//hooks
	const [userText, setUserText] = useState('');

	const userTextChangeHandler = (e) => {
		setUserText(e.target.value);
		//persist data in local storage
		localStorage.setItem('userText', userText);
	};

	console.log(userText);

	// let textLength = null;

	useEffect(() => {
		let localUserText = localStorage.getItem('userText');

		if (localUserText === null) {
			return;
		} else if (localUserText.length > 1) {
			console.log('TRUE');
			setUserText(localUserText);
		}

		return () => {};
	}, []);

	// let localUserText = localStorage.getItem('userText');

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
