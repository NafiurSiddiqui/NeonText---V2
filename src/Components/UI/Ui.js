import UiDisplay from './Ui-display/UiDisplay';
import UserInput from './Ui-input/input/UserInput';

function Ui() {
	return (
		<main class="container">
			<section class="ui-container">
				{/* UiDisplay here */}
				<UserInput />
				<UiDisplay />
			</section>
		</main>
	);
}
export default Ui;
