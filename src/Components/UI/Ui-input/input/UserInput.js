import UiNav from '../nav/UiNav';
import PriceCards from '../priceCards/PriceCards';
import UiColors from './UiColors';
import UiFonts from './UiFonts';
import UiText from './UiText';

function UserInput(props) {
	//?do i need a state here

	const onDelTextHandler = (delText) => {
		//capture the text here
		// console.log(`DELETED TEXT: ${delText}`);
		// props.onDelUserText(delText);
	};

	const onAddedUserTextHandler = (userText) => {
		//capture the text here
		// console.log(`USER TEXT: ${userText}`);

		// props.onAddedUserText(userText);
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
						onDelUserText={onDelTextHandler}
						onAddedUserText={onAddedUserTextHandler}
						onAddedStorageText={captureStorageTextHandler}
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
