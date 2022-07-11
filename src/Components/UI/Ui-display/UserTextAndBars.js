import { useEffect, useState } from 'react';

function UserTextAndBars(props) {
	
	
	const [showBars, setShowBars] = useState(false);
	
	const [displayText, setDisplayText] = useState('Your Text');
	//STYLING STATE
	const [largeFont, setLargeFont] = useState();

	//props var
	let letterHeight = props.letterHeight;
	let txtState = props.txtState;
	let userText = props.capturedUserText;
	let storeText = props.capturedStorageText;
	const storageStatus = props.storageStatus;
	//color states
	const neonState = props.neonSwitchState;
	const colorActive = props.activeColor;

	// console.log(props.width);
	

	let txtLength = userText.length;
	
	useEffect(() => {
		let timerHandler = setTimeout(() => {

			if (txtState === false && storeText === null) {
				// console.log('1');
				setShowBars(false);
				props.setWidth('');
				setDisplayText('Your Text');
			}

			if (txtState === true || storeText !== null) {
				// console.log('2');
				// console.log(storeText);
				setShowBars(true);
				props.setWidth(`${storeText.length * 2}CM`);
				setDisplayText(storeText);
			}

			if (userText.length > 0) {
				setDisplayText(userText);
			}

			if (userText.length === 0) {
				// console.log('4');
				setDisplayText('Your Text');
				props.setWidth(``);
				setShowBars(false);
			}

			if (storageStatus === false && txtState === true) {
				props.setWidth(`${txtLength * 2} CM`);
			}
		}, 300);

		return () => {
	
			clearTimeout(timerHandler);
		};
	}, [txtState, txtLength, storeText, userText, storageStatus,props]);
	// NOTE : if largeFont then, setthe fontSize

	useEffect(() => {
		if (
			props.setFontFamily === 'RasterSlice' ||
			props.setFontFamily === 'Amsterdam' ||
			props.setFontFamily === 'Orbitron'
		) {
			setLargeFont(true);
			// console.log('TRUE');
		} else {
			setLargeFont(false);
		}
	}, [props]);

	const neonShadow = ` rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px,
		${colorActive} 0px 0px 20px, ${colorActive} 0px 0px 30px,
		${colorActive} 0px 0px 40px, ${colorActive} 0px 0px 55px,
		${colorActive} 0px 0px 75px`;

	return (
		<>
			<div className="ui-display-userText-wrapper">
				<section
					className={`ui-display-userText-and-bar ${
						showBars ? 'widthActive ' : ''
					}`}
				>
					<p
						className="ui-display-userText-text neonOn"
						style={{
							fontFamily: props.setFontFamily,
							fontSize: largeFont ? '40px' : '70px',
							textShadow: !neonState? 'none':neonShadow
						}}
					>
						{storageStatus && displayText}
						{!storageStatus && userText}
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

			<span className="measurementBar-width-length">{showBars && props.width}</span>
		</>
	);
}
export default UserTextAndBars;
