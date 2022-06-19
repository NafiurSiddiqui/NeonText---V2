import NeonSwitch from './NeonSwitch';

function UiDisplay() {
	return (
		<article className="ui-display">
			<NeonSwitch />
			{/* <!-- user text --> */}
			<div className="ui-display-userText-container">
				<div className="ui-display-userText-wrapper">
					<section className="ui-display-userText-and-bar">
						<p className="ui-display-userText-text neonOn" id="userDisplay"></p>
					</section>

					<div className="measurementBar-height-wrapper">
						<span className="measurementBar-height"></span>
						<span className="measurementBar-height-length"></span>
					</div>
				</div>

				<span className="measurementBar-width-length"></span>

				<canvas id="displayText"></canvas>
			</div>
		</article>
	);
}
export default UiDisplay;
