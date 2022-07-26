import Header from '../Header';
import UiDisplay from './Ui-display/UiDisplay';
import UserInput from './Ui-input/input/UserInput';




function Ui() {
	
	
	document.body.classList.add('ui-body');
	
	
	
	return (
		<>
			<Header className="ui-logo" />
			<main className="container">
				<section className="ui-container">
					<UserInput
						captureUserText={captureUserTextHandler}
						userText={captureUserText}
						letterHeight={capturedLetterHeight}
						captureStorageText={captureStorageTextHandler}
						storageText={capturedStorageText}
						getDelTxtState={delTxtStateHandler}
						txtState={txtStateHandler}
						setStorageStatus={storageStatusHandler}
						storageStatus={storageStatus}
						getFontFamily={setFontFamily}
						getFontState={getFontState}
						getActiveColor={activeColorHandler}
						activeColor={colorActive}
						debounceStatus={debounceActive}
					/>
					<UiDisplay
						setDebounce={debounceHandler}
						capturedUserText={captureUserText}
						captureLetterHeight={setCapturedLetterHeight}
						letterHeight={capturedLetterHeight}
						setWidth={widthHandler}
						width={width}
						delTxtState={delTxtState}
						txtState={txtState}
						capturedStorageText={capturedStorageText}
						storageStatus={storageStatus}
						setFontFamily={fontFamily}
						fontState={fontState}
						activeColor={colorActive}
					/>
				</section>
			</main>
		</>
	);
}
export default Ui;

/**
 * Here i needed to provide the context since both of the components that needs access are here.
 */
