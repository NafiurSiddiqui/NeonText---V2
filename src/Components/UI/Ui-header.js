import { Link } from 'react-router-dom';

function UiHeader() {
	return (
		<header className="ui-logo">
			<Link to="/">
				<img src="./Assets/Logo.svg" alt="Logo" className="ui-logo__logo" />
			</Link>
		</header>
	);
}
export default UiHeader;
