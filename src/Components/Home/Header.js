import Logo from '../../Assets/Logo.svg';

function Header() {
	return (
		<header className="home-logo">
			<img src={Logo} className="home-logo__logo" alt="Logo" />
		</header>
	);
}
export default Header;
