import UserTextContext from '../../store/text-context';
import Header from '../Header';
import UiDisplay from './Ui-display/UiDisplay';
import UserInput from './Ui-input/input/UserInput';

function Ui() {
	//HERE looks like a good place to pass around data
	//newUserText?
	//userText?
	return (
		<UserTextContext.Provider
			value={{
				userText: '',
				newUserText: null,
			}}
		>
			<Header className="ui-logo" />
			<main className="container">
				<section className="ui-container">
					{/* UiDisplay here */}
					<UserInput />
					<UiDisplay />
				</section>
			</main>
		</UserTextContext.Provider>
	);
}
export default Ui;

/**
 * Here i needed to provide the context since both of the components that needs access are here.
 */
