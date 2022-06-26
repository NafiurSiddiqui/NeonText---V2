function UiColors(props) {
	return (
		<section
			className={`ui-input-form color  ${props.navState ? 'ui-active' : ''}`}
		>
			<h3 className="ui-input-form-heading">CHOOSE COLOUR</h3>
			<ul className="ui-input-color-lists">
				<li
					className="input-color-list orange"
					title="Description of this color"
				>
					<i
						className="fa fa-lightbulb-o"
						data-color="orange"
						data-active=""
					></i>
					<p className="input-color-list-heading">Orange</p>
				</li>
				<li
					className="input-color-list lightRed"
					title="Description of this color"
				>
					<i
						className="fa fa-lightbulb-o"
						data-color="lightRed"
						data-active=""
					></i>
					<p className="input-color-list-heading">Light Red</p>
				</li>
				<li className="input-color-list red" title="Description of this color">
					<i className="fa fa-lightbulb-o" data-color="red" data-active=""></i>
					<p className="input-color-list-heading">Red</p>
				</li>
				<li
					className="input-color-list deepBlue"
					title="Description of this color"
				>
					<i
						className="fa fa-lightbulb-o"
						data-color="deepBlue"
						data-active=""
					></i>
					<p className="input-color-list-heading">Deep Blue</p>
				</li>
				<li
					className="input-color-list electricBlue"
					title="Description of this color"
				>
					<i
						className="fa fa-lightbulb-o"
						data-color="electricBlue"
						data-active=""
					></i>
					<p className="input-color-list-heading">Electric Blue</p>
				</li>
				<li
					className="input-color-list tropicalBlue"
					title="Description of this color"
				>
					<i
						className="fa fa-lightbulb-o"
						data-color="tropicalBlue"
						data-active=""
					></i>
					<p className="input-color-list-heading">Tropical Blue</p>
				</li>
				<li
					className="input-color-list iceBlue"
					title="Description of this color"
				>
					<i
						className="fa fa-lightbulb-o"
						data-color="iceBlue"
						data-active=""
					></i>
					<p className="input-color-list-heading">Ice Blue</p>
				</li>
				<li
					className="input-color-list green"
					title="Description of this color"
				>
					<i
						className="fa fa-lightbulb-o"
						data-color="green"
						data-active=""
					></i>
					<p className="input-color-list-heading">Green</p>
				</li>
				<li
					className="input-color-list mintGreen"
					title="Description of this color"
				>
					<i
						className="fa fa-lightbulb-o"
						data-color="mintGreen"
						data-active=""
					></i>
					<p className="input-color-list-heading">Mint Green</p>
				</li>
				<li
					className="input-color-list deepGreen"
					title="Description of this color"
				>
					<i
						className="fa fa-lightbulb-o"
						data-color="deepGreen"
						data-active=""
					></i>
					<p className="input-color-list-heading">Deep Green</p>
				</li>
				<li
					className="input-color-list warmWhite"
					title="Description of this color"
				>
					<i
						className="fa fa-lightbulb-o"
						data-color="warmWhite"
						data-active=""
					></i>
					<p className="input-color-list-heading">Warm White</p>
				</li>
				<li
					className="input-color-list white"
					title="Description of this color"
				>
					<i
						className="fa fa-lightbulb-o"
						data-color="white"
						data-active=""
					></i>
					<p className="input-color-list-heading">White</p>
				</li>
			</ul>
		</section>
	);
}
export default UiColors;
