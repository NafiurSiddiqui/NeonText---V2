import UiNav from '../nav/UiNav';
import UiColors from './UiColors';
import UiFonts from './UiFonts';
import UiText from './UiText';

function UserInput() {
	return (
		<article className="ui-input">
			<div className="ui-input-container">
				<div className="ui-input-form-container">
					<UiNav />
					<UiText />
					<UiFonts />
					<UiColors />
				</div>
			</div>
		</article>
	);
}
export default UserInput;
