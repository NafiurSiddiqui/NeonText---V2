import { useRef, useState } from 'react';
import ImagesBtn from '../../../Images';

function UiFonts(props) {
	const [btnActive, setbtnActive] = useState();

	const btnValue = useRef();

	const fontHandler = (e) => {
		//if--click is list
		if (e.target.localName === 'li') {
			//get the fontName
			const targetClass = e.target.classList[1];
			props.getFontFamily(targetClass);
			props.getFontState(true);
			// setbtnActive(true);

			console.log(targetClass);

			//if - current Id matches with the listOfFonts

			// console.log(what[0].btnActive);

			//-----set that  status to true
			//---- that status is True && add btnActive to that id
		}

		if (e.target.localName === 'img') {
			props.getFontFamily(e.target.id);
			props.getFontState(true);
			setbtnActive(true);
		}
	};
	// console.log(btnValue);
	// const btnActivation = btnActive ? 'btn-active' : '';

	return (
		<section
			className={`ui-input-form fontFamily  ${
				props.navState ? 'ui-active' : ''
			}`}
		>
			<h3 className="ui-input-form-heading">CHOOSE FONT</h3>
			<ul className="ui-input-fontFamily-lists">
				<li
					className={`ui-input-fontFamily-list Amanda  `}
					ref={btnValue}
					onClick={fontHandler}
				>
					<img
						className="ui-input-fontFamily-list__image"
						src={ImagesBtn.amanda}
						alt="Font family Amanda"
						id="Amanda"
						onClick={fontHandler}
					/>
				</li>
				<li className={`ui-input-fontFamily-list Allura`} onClick={fontHandler}>
					<img
						className="ui-input-fontFamily-list__image"
						src={ImagesBtn.allura}
						alt="Font family Allura"
						id="Allura"
						onClick={fontHandler}
					/>
				</li>
				<li
					className="ui-input-fontFamily-list Tangerine"
					onClick={fontHandler}
				>
					<img
						className="ui-input-fontFamily-list__image"
						src={ImagesBtn.tangerine}
						alt="Font Family Tangerine"
						id="Tangerine"
						onClick={fontHandler}
					/>
				</li>
				<li
					className="ui-input-fontFamily-list Amsterdam"
					onClick={fontHandler}
				>
					<img
						className="ui-input-fontFamily-list__image"
						src={ImagesBtn.amsterdam}
						alt="Font Family"
						id="Amsterdam"
						onClick={fontHandler}
					/>
				</li>
				<li
					className="ui-input-fontFamily-list RasterSlice"
					onClick={fontHandler}
				>
					<img
						className="ui-input-fontFamily-list__image"
						src={ImagesBtn.raster}
						alt="Font family Raster"
						id="RasterSlice"
						onClick={fontHandler}
					/>
				</li>
				<li
					className="ui-input-fontFamily-list HerrVonMuellerhoff"
					onClick={fontHandler}
				>
					<img
						className="ui-input-fontFamily-list__image"
						src={ImagesBtn.herrVonMuellerhoff}
						alt="Font family Herr von Muellerhoff"
						id="HerrVonMuellerhoff"
						onClick={fontHandler}
					/>
				</li>
				<li className="ui-input-fontFamily-list Cookie" onClick={fontHandler}>
					<img
						className="ui-input-fontFamily-list__image"
						src={ImagesBtn.cookie}
						alt="Font family Cookie"
						id="Cookie"
						onClick={fontHandler}
					/>
				</li>
				<li className="ui-input-fontFamily-list Orbitron" onClick={fontHandler}>
					<img
						className="ui-input-fontFamily-list__image"
						src={ImagesBtn.orbitron}
						alt="Font family Orbitron"
						id="Orbitron"
						onClick={fontHandler}
					/>
				</li>
			</ul>
		</section>
	);
}
export default UiFonts;
