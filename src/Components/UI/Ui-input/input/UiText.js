import { useEffect, useState } from 'react';

function UiText(props) {
	//hooks
	const [userText, setUserText] = useState('');
	const [deletedText, setdeletedText] = useState('');

	const userTextChangeHandler = (e) => {
		if (e.nativeEvent.inputType === 'deleteContentBackward') {
			setdeletedText(e.target.value);
			// console.log(deletedText);
		}

		setUserText(e.target.value);
		// console.log(userText);
	};

	// console.log(`DEL: ${deletedText}`);
	// console.log(`UserText: ${userText}`);

	useEffect(() => {
		props.onDelUserText(deletedText);
		props.onAddedUserText(userText);
	}, [props, userText, deletedText]);

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
