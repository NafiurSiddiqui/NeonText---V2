import { useContext, useEffect, useState } from 'react';
import textCtx from '../../../store/uiText-ctx';

function UiText(props) {

	
	//STATE is moved to the uiText-ctx
	const [userText, setUserText] = useState('');
	const [isTouched, setIsTouched] = useState(false);
	const [storeText, setStoreText] = useState();

	const userTxtCtx = useContext(textCtx);

	

	
	const userTextChangeHandler = (e) => {
		if (e.nativeEvent.inputType === 'deleteContentBackward') {
			// props.getDelTxtState(true);
			userTxtCtx.textInput.setDelTxtState(true);

		}
			// props.txtState(true);
		userTxtCtx.textInput.getTxtState(true);
		setIsTouched(true);
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
			// props.setStorageStatus(true);
			userTxtCtx.textInput.getStorageStatus(true)		

			if (userText.length > 0) {
				setStoreText(localStorage.setItem('storeText', userText));
				// props.captureStorageText(localStorage.setItem('storeText', userText))

				userTxtCtx.textInput.getStorageText(localStorage.setItem('storeText', userText))
			}
			
			setStoreText(localStorage.getItem('storeText'));
			
			props.captureStorageText(storeText);
			
			//local storgae clearance
			if (isTouched && userText.length === 0){
			
				localStorage.clear();
				props.txtState(false);
			}

		} catch (e) {
			props.setStorageStatus(false);
			
		}
		
		// props.onDelTxtState(delTxtState);
		props.onAddedUserText(userText);
	}, [props, userText,  storeText, isTouched]);
	
	
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
