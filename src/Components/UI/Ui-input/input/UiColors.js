import { useState } from 'react';
import BtnColor from './BtnColor';

const colorBulbs = [
	{
		colorName: 'Orange',
		colorClass: 'orange',
		key: 1,
		dataColor: 'orange',
		dataActive: false,
	},
	{
		colorName: 'Light Red',
		colorClass: 'lightRed',
		key: 2,
		dataColor: 'lightRed',
		dataActive: false,
	},
	{
		colorName: 'Red',
		colorClass: 'red',
		key: 3,
		dataColor: 'red',
		dataActive: false,
	},
	{
		colorName: 'Deep Blue',
		colorClass: 'deepBlue',
		key: 4,
		dataColor: 'deepBlue',
		dataActive: false,
	},
	{
		colorName: 'Electric Blue',
		colorClass: 'electricBlue',
		key: 5,
		dataColor: 'electricBlue',
		dataActive: false,
	},
	{
		colorName: 'Tropical Blue',
		colorClass: 'tropicalBlue',
		key: 6,
		dataColor: 'tropicalBlue',
		dataActive: false,
	},
	{
		colorName: 'Ice Blue',
		colorClass: 'iceBlue',
		key: 7,
		dataColor: 'iceBlue',
		dataActive: false,
	},
	{
		colorName: 'Green',
		colorClass: 'green',
		key: 8,
		dataColor: 'green',
		dataActive: false,
	},
	{
		colorName: 'Mint Green',
		colorClass: 'mintGreen',
		key: 9,
		dataColor: 'mintGreen',
		dataActive: false,
	},
	{
		colorName: 'Deep Green',
		colorClass: 'deepGreen',
		key: 10,
		dataColor: 'deepGreen',
		dataActive: false,
	},
	{
		colorName: 'Warm White',
		colorClass: 'warmWhite',
		key: 11,
		dataColor: 'warmWhite',
		dataActive: false,
	},
	{
		colorName: 'White',
		colorClass: 'white',
		key: 12,
		dataColor: 'white',
		dataActive: false,
	},
];

function UiColors(props) {
	const [activeColorName, setActiveColorName] = useState(null);

	//Mouseenter
	//mouseleave

	//setting color

	return (
		<section
			className={`ui-input-form color  ${props.navState ? 'ui-active' : ''}`}
		>
			<h3 className="ui-input-form-heading">CHOOSE COLOUR</h3>
			<ul className="ui-input-color-lists">
				{colorBulbs.map((bulb) => {
					const isActive = bulb.colorName === activeColorName;
					return (
						<BtnColor
							colorClass={bulb.colorClass}
							key={bulb.key}
							dataColor={bulb.dataColor}
							dataActive={isActive}
							colorName={bulb.colorName}
						/>
					);
				})}
				{/* 
					<li className=`input-color-list orange` title="Description of this color">
						<i className="fa fa-lightbulb-o" data-color="orange" data-active=""></i>
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
				</li> */}
			</ul>
		</section>
	);
}
export default UiColors;
