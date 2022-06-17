import UiNav from '../nav/UiNav';
import UiColors from './UiColors';
import UiFonts from './UiFonts';
import UiText from './UiText';

function UserInput() {
	return (
		<article class="ui-input">
			<div class="ui-input-container">
				<div class="ui-input-form-container">
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
