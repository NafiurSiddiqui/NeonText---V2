import { useEffect, useState } from 'react';

function BtnColor(props) {

	//State for CSS properties
	const [textShadowGlow, settextShadowGlow] = useState();
	const [colorGlow, setColorGlow] = useState( props.colorCode || null);

	


	useEffect(() => {
		if ((props.bulbClicked && props.bulbActive) ||(props.bulbClicked && props.bulbActive && !props.hoverActive )) {
			//for TextShadow
			settextShadowGlow(`0 0 4px white, 0 0 4px ${props.colorActive}, 0 0 8px ${props.colorActive},
			0 0 12px ${props.colorActive}, 0 0 16px ${props.colorActive}, 0 0 18px ${props.colorActive}`);
			//for Color
			setColorGlow('rgb(248, 248, 248)')
		}else if (props.hoverActive && props.targetBulb) {
			settextShadowGlow(`0 0 4px white, 0 0 4px ${props.targetColor}, 0 0 8px ${props.targetColor},
			0 0 12px ${props.targetColor}, 0 0 16px ${props.targetColor}, 0 0 18px ${props.targetColor}`);
			setColorGlow('rgb(248, 248, 248)')
			
		}
		else  
		{
			settextShadowGlow('none');
			setColorGlow(props.colorCode)
		}

	}, [props])
	

	

	// console.log(textShadowGlow);

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
				style={{
					textShadow: textShadowGlow,
					color: colorGlow
				}}
			></i>
			<p className="input-color-list-heading">{props.colorName}</p>
		</li>
	);
}
export default BtnColor;
