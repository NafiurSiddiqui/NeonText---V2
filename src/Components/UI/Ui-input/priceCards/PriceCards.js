import PriceCard from './PriceCard';

function PriceCards() {
	return (
		<div className="ui-price-card__container">
			<ul className="ui-price-cards">
				<PriceCard size="small" price={null} length={null} height={null} />
				<PriceCard size="medium" price={null} length={null} height={null} />
				<PriceCard size="large" price={null} length={null} height={null} />
			</ul>
		</div>
	);
}
export default PriceCards;
