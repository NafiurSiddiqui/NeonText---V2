import PriceCard from './PriceCard';

function PriceCards(props) {

	let userText;
	let storageText;
	const letterHeight = props.letterHeight;
	let width;
	


	// console.log(`userText: ${userText}, storageTEXT: ${storageText}, LetterHeight: ${letterHeight}`)


	// console.log(userText === undefined);

	// console.log(storageText === undefined);

	// if (userText === undefined || storageText === undefined){
	// 	userText = '---';
	// 	storageText = '---'
	// }else{
	// 	userText = props.userText;
	// 	storageText = props.storageText;
	// }

	props.userText === undefined ? userText = '---': userText= props.userText;
	
	props.storageText === undefined || null ? storageText = ' ---': storageText = props.storageText;
	
	if (props.userText !== undefined){
		width = props.userText.length;
		
	}

	if (props.storageText !== undefined || null){
		width = props.storageText.length;
	}

	// console.log(width);
	// console.log(storageText);
	
	const storageTextStatus = storageText === null || undefined; //returns boolean

	//PRICE
	const priceSmall = storageTextStatus? `${userText.length * 80}`:`${storageText.length * 80}`;
	const priceMid = storageTextStatus? `${userText.length * 95}`:`${storageText.length* 95}`;
	const priceLarge = storageTextStatus? `${userText.length * 105}`:`${storageText.length* 105}`;
	//WIDTH
	const lengthSmall = ` ${width} CM`;
	const lengthMid = ` ${width * 2} CM`;
	const lengthLarge = ` ${width * 3} CM`;
	//HEIGHT
	console.log(letterHeight);
	



	return (
		<div className="ui-price-card__container">
			<ul className="ui-price-cards">
				<PriceCard size="small" price={priceSmall} length={lengthSmall} height={null} />
				<PriceCard size="medium" price={priceMid} length={lengthMid} height={null} />
				<PriceCard size="large" price={priceLarge} length={lengthLarge} height={null} />
			</ul>
		</div>
	);
}
export default PriceCards;
