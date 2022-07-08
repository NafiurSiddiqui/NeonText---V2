import { useRef } from "react";

function NeonSwitch() {

	 const switchRef = useRef();

	 console.log(switchRef);
	return (
		<label className="switch">
			<input type="checkbox" id="neonSwitch" ref={switchRef}/>
			<span className="slider round">
				<span>On</span>
				<span>Off</span>
			</span>
		</label>
	);
}
export default NeonSwitch;
