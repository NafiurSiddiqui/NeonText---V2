import { useEffect, useState } from 'react';

function UserTextAndBars(props) {
	const [showBars, setShowBars] = useState(false);

	let letterHeight = props.letterHeight;
	let txtState = props.txtState;
	let userText = props.capturedUserText;
	// let storageText = props.storageText;
	let storeText = props.capturedStorageText;
	let txtLength = userText.length;
	let width = `${txtLength * 2} CM`;

	useEffect(() => {
		let timerHandler = setTimeout(() => {
			// console.log('Debouncing RAN!');

			if (txtState === true) {
				// console.log('ok');
				setShowBars(true);
			}

			if (txtLength === 0) {
				setShowBars(false);
			}
		}, 300);

		return () => {
			// console.log('Debouncing CLEARED!');
			clearTimeout(timerHandler);
		};
	}, [txtState, txtLength]);

	let displayText;

	// displayText = storageText.length > 0 ? storageText : 'Your Text';
	displayText = storeText !== null ? storeText : 'Your Text';

	// console.log(props.storageStatus);

	if (userText.length >= 1) {
		if (props.storageStatus !== false) {
			localStorage.removeItem('storeText');
		}
		displayText = userText;
	}

	// if (props.storageStatus === false) {
	// }

	if (storeText !== null) {
		displayText = storeText;
	}

	return (
		<>
			<div className="ui-display-userText-wrapper">
				<section className="ui-display-userText-and-bar">
					<p className="ui-display-userText-text neonOn" id="userDisplay">
						{props.storageStatus && displayText}
						{!props.storageStatus && userText}
					</p>
				</section>

				{showBars && (
					<div className="measurementBar-height-wrapper">
						<span
							className="measurementBar-height"
							style={{ height: `${letterHeight}px` }}
						></span>
						<span className="measurementBar-height-length">
							{`${Math.floor(letterHeight)}Cm`}
						</span>
					</div>
				)}
			</div>

			<span className="measurementBar-width-length">{showBars && width}</span>
		</>
	);
}
export default UserTextAndBars;
