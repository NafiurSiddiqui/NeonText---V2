import ImagesBtn from '../../../Images';

function UiFonts(props) {
	const fontHandler = (e) => {
		//if--click is list
		if (e.target.localName === 'li') {
			//get the fontName
			// e.target.classList[1]
			console.log(e.target.classList[1]);
			props.getFontFamily(e.target.classList[1]);
			//access display and set the fontFamily
		}

		if (e.target.localName === 'img') {
			// console.log(e.target.id);
			props.getFontFamily(e.target.id);
		}

		//if--image
		//---get the id
		// console.log(e.target.id);
	};
	//get the font value

	//set the font to the diplay.font-family

	//set the button to active

	return (
		<section
			className={`ui-input-form fontFamily  ${
				props.navState ? 'ui-active' : ''
			}`}
		>
			<h3 className="ui-input-form-heading">CHOOSE FONT</h3>
			<ul className="ui-input-fontFamily-lists">
				<li className="ui-input-fontFamily-list Amanda" onClick={fontHandler}>
					<img
						className="ui-input-fontFamily-list__image"
						src={ImagesBtn.amanda}
						alt="Font family Amanda"
						id="Amanda"
						onClick={fontHandler}
					/>
				</li>
				<li className="ui-input-fontFamily-list Allura" onClick={fontHandler}>
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
