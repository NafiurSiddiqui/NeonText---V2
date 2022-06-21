import { useRef, useEffect } from 'react';

function Canvas() {
	const ctxRef = useRef();
	useEffect(() => {
		const ctx = ctxRef.current.getContext('2d');
		// console.log(ctx);

		//YOU need to clear the canvas here
	}, []);

	return <canvas id="displayText" ref={ctxRef}></canvas>;
}
export default Canvas;

/**
 * @useRef -  I did not know how to have access to other HTML element living in another component. using useRef i have access to the HTML object of that node.
 */
