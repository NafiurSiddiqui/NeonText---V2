import { useRef, useEffect } from 'react';

function Canvas(props) {
	let userText = props.capturedUserText;

	// console.log(userText);

	const ctxRef = useRef();

	useEffect(() => {
		const ctx = ctxRef.current.getContext('2d');

		//WRITE and CLEAR canvas here

		// if (delTextState === true) {
		// 	//clear canvas and update it accordingly
		// } else {
		// 	//Write on canvas
		// }

		ctx.font = '4rem Tangerine';
		ctx.fillStyle = 'White';
		ctx.fillText(userText, 0, 50);
	}, [userText]);

	return <canvas id="displayText" ref={ctxRef}></canvas>;
}
export default Canvas;

/**
 * @useRef -  I did not know how to have access to other HTML element living in another component. using useRef i have access to the HTML object of that node.
 */
