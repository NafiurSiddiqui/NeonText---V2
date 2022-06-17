function PriceCard(props) {
	return (
		<li class="ui-price-card">
			<div class="ui-price-card__price-box">
				<span class="ui-price-card__text-size"> {props.size}</span>

				<span class="ui-price-card__small-price"> {props.price || '----'}</span>
			</div>

			<div class="ui-price-card__length-box">
				<div class="ui-price-card__length-container">
					Length:
					<span class="ui-price-card__small-length">
						{props.length || '----'}
					</span>
				</div>

				<div class="ui-price-card__height-container">
					Height:
					<span class="ui-price-card__small-height">
						{props.height || '----'}
					</span>
				</div>
			</div>
		</li>
	);
}
export default PriceCard;
