import { useEffect, useState } from 'react';

function UiText(props) {
	//hooks
	const [userText, setUserText] = useState('');
	const [deletedText, setdeletedText] = useState('');
	const [delTxtState, setDelTxtState] = useState(false);
	const [storageText, setStorageText] = useState('');

	const userTextChangeHandler = (e) => {
		if (e.nativeEvent.inputType === 'deleteContentBackward') {
			setdeletedText(e.target.value);
			setDelTxtState(true);
			// console.log(delTxtState);
		}

		setUserText(e.target.value);
		// console.log(userText);
	};

	function lsTest() {
		let test = 'test';
		try {
			localStorage.setItem(test, test);
			localStorage.removeItem(test);
			return true;
		} catch (e) {
			return false;
		}
	}

	useEffect(() => {
		if (lsTest() !== false) {
			//persist data in local storage
			localStorage.setItem('userText', userText);

			//get the item from storage
			setStorageText(localStorage.getItem('userText'));

			//make storage available
			props.onAddedStorageText(userText);
		}

		props.onDelTxtState(delTxtState);
		props.onAddedUserText(userText);
	}, [props, userText, deletedText, storageText, setDelTxtState, delTxtState]);

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
