import NeonSwitch from './NeonSwitch';

function UiDisplay() {
	return (
		<article class="ui-display">
			<NeonSwitch />
			{/* <!-- user text --> */}
			<div class="ui-display-userText-container">
				<div class="ui-display-userText-wrapper">
					<section class="ui-display-userText-and-bar">
						<p class="ui-display-userText-text neonOn" id="userDisplay"></p>
					</section>

					<div class="measurementBar-height-wrapper">
						<span class="measurementBar-height"></span>
						<span class="measurementBar-height-length"></span>
					</div>
				</div>

				<span class="measurementBar-width-length"></span>

				<canvas id="displayText"></canvas>
			</div>
		</article>
	);
}
export default UiDisplay;
