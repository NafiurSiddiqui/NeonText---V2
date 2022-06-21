import NeonSwitch from './NeonSwitch';
import Canvas from './UiCanvas';
import UserTextAndBars from './UserTextAndBars';

function UiDisplay(props) {
	return (
		<article className="ui-display">
			<NeonSwitch />
			{/* <!-- user text --> */}
			<div className="ui-display-userText-container">
				<UserTextAndBars />
				<Canvas />
			</div>
		</article>
	);
}
export default UiDisplay;
