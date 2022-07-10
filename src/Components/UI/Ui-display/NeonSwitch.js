
function NeonSwitch(props) {



	
	const switchHandler =()=>{
		
		props.setNeonSwitch(prevState =>{

			return !prevState
		})
	 };
	
	return (
		<label className="switch">
			<input type="checkbox" id="neonSwitch" onClick={switchHandler} defaultChecked={props.neonSwitchState} />
			<span className="slider round">
				<span>On</span>
				<span>Off</span>
			</span>
		</label>
	);
}
export default NeonSwitch;
