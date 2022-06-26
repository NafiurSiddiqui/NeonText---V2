function UiNav(props) {
	console.log();
	const navTxtActiveHandler = () => {
		//Activate TEXT
		props.setNavTxtState(true);

		//Deactivate the rests
		props.setNavFontState(false);
		props.setNavColorState(false);
	};

	const navFontActiveHandler = () => {
		//Activate TEXT
		props.setNavFontState(true);

		//Deactivate the rests
		props.setNavTxtState(false);
		props.setNavColorState(false);
	};

	const navColorActiveHandler = () => {
		//Activate TEXT
		props.setNavColorState(true);

		//Deactivate the rests
		props.setNavTxtState(false);
		props.setNavFontState(false);
	};

	return (
		<div className="ui-input-nav">
			<ul className="ui-input-nav-lists">
				<li
					className={`ui-input-nav-list ${
						props.navState.txtState ? 'nav-active' : ''
					}`}
					onClick={navTxtActiveHandler}
				>
					Text
				</li>

				<li
					className={`ui-input-nav-list ${
						props.navState.fontState ? 'nav-active' : ''
					}`}
					onClick={navFontActiveHandler}
				>
					Font Family
				</li>

				<li
					className={`ui-input-nav-list ${
						props.navState.colorState ? 'nav-active' : ''
					}`}
					onClick={navColorActiveHandler}
				>
					Color
				</li>
			</ul>
		</div>
	);
}

export default UiNav;
