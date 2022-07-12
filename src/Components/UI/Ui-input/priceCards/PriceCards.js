import PriceCard from './PriceCard';

function PriceCards(props) {

	let userText;
	let storageText = '---';
	const letterHeight = props.letterHeight;
	let width = null;
	let storageValue = localStorage.getItem('storeText');
	


	props.userText === undefined ? userText = '---': userText= props.userText;
	
	
	
	if (props.userText !== undefined){
		width = props.userText.length;
		
	}

	if (storageValue !== null){
		width = storageValue.length;
		storageText = storageValue;
	
	}
	
	// console.log(storageText);
	
	
	const storageTextStatus = storageText === '---'; 

	//Debounce true? calculate this.

	

	
	//PRICE
	const priceSmall = storageTextStatus? `${userText.length * 80}`:`${storageText.length * 80}`;
	const priceMid = storageTextStatus? `${userText.length * 95}`:`${storageText.length* 95}`;
	const priceLarge = storageTextStatus? `${userText.length * 105}`:`${storageText.length* 105}`;
	//WIDTH
	const lengthSmall = ` ${width} Cm`;
	const lengthMid = ` ${width * 2} Cm`;
	const lengthLarge = ` ${width * 3} Cm`;
	//HEIGHT
	// console.log(letterHeight);
	const heightSmall = ` ${letterHeight} Cm`;
	const heightMid = ` ${Math.floor(letterHeight * 1.1)} Cm`;
	const heightLarge = ` ${Math.floor(letterHeight * 1.3)} Cm`;
	
	

	return (
		<div className="ui-price-card__container">
			<ul className="ui-price-cards">
				<PriceCard size="small" price={priceSmall} length={lengthSmall} height={heightSmall} />
				<PriceCard size="medium" price={priceMid} length={lengthMid} height={heightMid} />
				<PriceCard size="large" price={priceLarge} length={lengthLarge} height={heightLarge} />
			</ul>
		</div>
	);
}
export default PriceCards;
