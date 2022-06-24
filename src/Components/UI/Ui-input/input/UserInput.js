import UiNav from '../nav/UiNav';
import PriceCards from '../priceCards/PriceCards';
import UiColors from './UiColors';
import UiFonts from './UiFonts';
import UiText from './UiText';

function UserInput(props) {
	//?do i need a state here

	const onDelTxtStateHandler = (delTxtState) => {
		//capture the text here

		props.capturedDelTxtState(delTxtState);
		// console.log(delTxtState);
	};

	const onAddedUserTextHandler = (userText) => {
		//capture the text here
		props.capturedUserText(userText);
	};

	const captureStorageTextHandler = (storageText) => {
		props.capturedStorageText(storageText);
	};

	return (
		<article className="ui-input">
			<div className="ui-input-container">
				<div className="ui-input-form-container">
					<UiNav />
					<UiText
						onAddedUserText={onAddedUserTextHandler}
						onAddedStorageText={captureStorageTextHandler}
						onDelTxtState={onDelTxtStateHandler}
					/>
					<UiFonts />
					<UiColors />
				</div>
			</div>
			<PriceCards />
		</article>
	);
}
export default UserInput;
