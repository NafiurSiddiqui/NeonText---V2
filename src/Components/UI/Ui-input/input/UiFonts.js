import ImagesBtn from '../../../Images';

function UiFonts(props) {
	return (
		<section
			className={`ui-input-form fontFamily  ${
				props.navState ? 'ui-active' : ''
			}`}
		>
			<h3 className="ui-input-form-heading">CHOOSE FONT</h3>
			<ul className="ui-input-fontFamily-lists">
				<li className="ui-input-fontFamily-list Amanda">
					<img
						className="ui-input-fontFamily-list__image"
						src={ImagesBtn.amanda}
						alt="Font family Amanda"
						id="Amanda"
					/>
				</li>
				<li className="ui-input-fontFamily-list Allura">
					<img
						className="ui-input-fontFamily-list__image"
						src={ImagesBtn.allura}
						alt="Font family Allura"
						id="Allura"
					/>
				</li>
				<li className="ui-input-fontFamily-list Tangerine">
					<img
						className="ui-input-fontFamily-list__image"
						src={ImagesBtn.tangerine}
						alt="Font Family Tangerine"
						id="Tangerine"
					/>
				</li>
				<li className="ui-input-fontFamily-list Amsterdam">
					<img
						className="ui-input-fontFamily-list__image"
						src={ImagesBtn.amsterdam}
						alt="Font Family"
						id="Amsterdam"
					/>
				</li>
				<li className="ui-input-fontFamily-list RasterSlice">
					<img
						className="ui-input-fontFamily-list__image"
						src={ImagesBtn.raster}
						alt="Font family Raster"
						id="RasterSlice"
					/>
				</li>
				<li className="ui-input-fontFamily-list HerrVonMuellerhoff">
					<img
						className="ui-input-fontFamily-list__image"
						src={ImagesBtn.herrVonMuellerhoff}
						alt="Font family Herr von Muellerhoff"
						id="HerrVonMuellerhoff"
					/>
				</li>
				<li className="ui-input-fontFamily-list Cookie">
					<img
						className="ui-input-fontFamily-list__image"
						src={ImagesBtn.cookie}
						alt="Font family Cookie"
						id="Cookie"
					/>
				</li>
				<li className="ui-input-fontFamily-list Orbitron">
					<img
						className="ui-input-fontFamily-list__image"
						src={ImagesBtn.orbitron}
						alt="Font family Orbitron"
						id="Orbitron"
					/>
				</li>
			</ul>
		</section>
	);
}
export default UiFonts;
