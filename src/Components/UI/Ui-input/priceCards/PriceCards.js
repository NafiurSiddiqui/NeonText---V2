import PriceCard from './PriceCard';

function PriceCards() {
	return (
		<div class="ui-price-card__container">
			<ul class="ui-price-cards">
				<PriceCard size="small" price={null} length={null} height={null} />
				<PriceCard size="medium" price={null} length={null} height={null} />
				<PriceCard size="large" price={null} length={null} height={null} />
			</ul>
		</div>
	);
}
export default PriceCards;
