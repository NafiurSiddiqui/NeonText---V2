import { useEffect, useState } from 'react';

function UiText(props) {
	//hooks

	const [userText, setUserText] = useState('');
	const [deletedText, setdeletedText] = useState('');
	const [delTxtState, setDelTxtState] = useState(false);

	const [storeText, setStoreText] = useState();

	const userTextChangeHandler = (e) => {
		if (e.nativeEvent.inputType === 'deleteContentBackward') {
			setdeletedText(e.target.value);
			setDelTxtState(true);
		}
		props.txtState(true);
		setUserText(e.target.value);
	};

	useEffect(() => {
		if (userText.length >= 20) {
			alert(
				`If you need more than 20 characters of text, Please contact us: 📞 +14-999-876-42`
			);
		}
	}, [userText]);

	useEffect(() => {
		const test = 'test';
		try {
			//storage availability
			localStorage.setItem(test, test);
			localStorage.removeItem(test);
			props.setStorageStatus(true);

			if (userText.length > 0) {
				setStoreText(localStorage.setItem('storeText', userText));
			}

			setStoreText(localStorage.getItem('storeText'));

			props.capturedStorageText(storeText);
		} catch (e) {
			props.setStorageStatus(false);
			// return false;
		}

		props.onDelTxtState(delTxtState);
		props.onAddedUserText(userText);
	}, [props, userText, deletedText, delTxtState, storeText]);

	return (
		<section
			className={`ui-input-form text  ${props.navState ? 'ui-active' : ''}`}
		>
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
