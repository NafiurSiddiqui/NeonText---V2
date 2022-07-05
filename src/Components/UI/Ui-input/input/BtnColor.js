function BtnColor(props) {

	return (
		<li className={`input-color-list ${props.classColor}`} title="Some cool Description of this color" onClick={props.onClick} key={props.keys}>
			<i className="fa fa-lightbulb-o" data-color={props.dataColor} data-active={props.dataActive} onClick={props.onClick}></i>
			<p className="input-color-list-heading">{props.colorName}</p>
		</li>
	);
}
export default BtnColor;
