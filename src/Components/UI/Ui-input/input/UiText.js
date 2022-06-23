import { useEffect, useState } from 'react';

function UiText(props) {
	//hooks
	const [userText, setUserText] = useState('');

	useEffect(() => {
		//persist data in local storage
		localStorage.setItem('userText', userText);
		let localUserText = localStorage.getItem('userText');

		if (localUserText === null) {
			return;
		} else if (localUserText.length > 1) {
			// console.log('TRUE');
			setUserText(localUserText);
		}

		props.onAddedUserText(userText);
		// return () => {};
	}, [userText, props]);

	const userTextChangeHandler = (e) => {
		setUserText(e.target.value);
	};

	// console.log(userText);

	let textLength = null;

	textLength = userText.length;

	// console.log(textLength);

	//GUARD
	if (textLength >= 20) {
		alert(
			`If you need more than 20 characters of text, Please contact us: 📞 +14-999-876-42`
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
