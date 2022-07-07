function BtnColor(props) {


	const glow = `0 0 4px white, 0 0 4px ${props.targetColor }, 0 0 8px ${props.targetColor},
	0 0 12px ${props.targetColor}, 0 0 16px ${props.targetColor}, 0 0 18px ${props.targetColor}`;

	const hoverGlow = `${props.hoverActive && props.targetBulb ? glow : 'none'}`;

	const hoverGlowColor =  `${props.hoverActive && props.targetBulb ? 'rgb(248, 248, 248)': props.colorCode}`;

	// const bulbActive = `${props.dataActive ? glow:props.colorCode}`
	// console.log(props.bulbClicked);
	// console.log(props.targetColor);
	// console.log();


	return (
		<li
			className={`input-color-list ${props.colorClass}`}
			title="Some cool Description of this color"
			onClick={props.onClick}
			key={props.keys}
			onMouseEnter={props.onMouseOver}
			onMouseLeave={props.onMouseOut}
			data-colorcode={props.colorCode}
			
		>
			<i
				className="fa fa-lightbulb-o"
				data-active={props.BulbActive}
				onClick={props.onClick}
				data-color={props.colorClass}
				style={{ textShadow:props.bulbActive && props.bulbClicked && glow}}
			></i>
			<p className="input-color-list-heading">{props.colorName}</p>
		</li>
	);
}
export default BtnColor;
