import React, { useState } from 'react';
//UI state management here.

//? should you create multiple context in one file or separte?
//? in such case, how would you provide each of them?
//default neonColor on load
const defaultColor = '#20f020';

//Create Context
const textCtx = React.createContext({
	textInput: {
		userText: '',
		storageText: '',
		storageStatus: null,
		delTxtState: false,
		txtState: false,
		getUserText: () => {},
		getStorageText: () => {},
		getStorageStatus: () => {},
		setDelTxtState: () => {},
		getTxtState: () => {},
	},
	fontInput: {
		fontFamily: null,
		fontState: false,
		setFontFamily: () => {},
		getFontState: () => {},
	},
	colorInput: {
		colorActive: defaultColor,
		setColorActive: () => {},
	},
	dimension: {
		width: 0,
		height: 0,
		widthHandler: () => {},
		heightHandler: () => {},
	},
	debouncer: {
		debounceStatus: false,
		setDebounceState: () => {},
	},
});

//provide context

export const TextCtxProvider = (props) => {
	//set uiInput state management here
	//UiText state
	// const [captureUserText, setCaptureUserText] = useState('');
	const [userText, setUserText] = useState('');
	// const [capturedStorageText, setCapturedStorageText] = useState();
	const [storageText, setStorageText] = useState();
	const [storageStatus, setStorageStatus] = useState();
	const [delTxtState, setDelTxtState] = useState();
	const [txtState, setTxtState] = useState(false);

	//DIMENSION
	const [width, setWidth] = useState();
	const [letterHeight, setLetterHeight] = useState();
	//UiFont state
	const [fontFamily, setFontFamily] = useState();
	const [fontState, setFontState] = useState(false);
	//UiColor State
	const [colorActive, setColorActive] = useState(defaultColor);
	//Debounce state for priceCard
	const [debounceActive, setDebounceActive] = useState(false);

	const debounceHandler = (stat) => {
		setDebounceActive(stat);
	};

	const delTxtStateHandler = (delTxtState) => {
		setDelTxtState(delTxtState);
	};

	const txtStateHandler = (txtState) => {
		setTxtState(txtState);
	};

	const getUserTextHandler = (userText) => {
		setUserText(userText);
	};

	const getStorageTextHandler = (storageText) => {
		setStorageText(storageText);
	};

	const storageStatusHandler = (status) => {
		setStorageStatus(status);
	};

	const fontFamilyHandler = (fontFamily) => {
		setFontFamily(fontFamily);
	};

	const fontStateHandler = (fontState) => {
		setFontState(fontState);
	};

	const activeColorHandler = (color) => {
		setColorActive(color);
	};

	const heightHandler=(height)=>{
		setLetterHeight(height);
	};

	const widthHandler = (width) => {
		setWidth(width);
	};

	//create all of them inside an object
	const textState = {
		//Assign the states here
		textInput: {
			userText: userText,
			storageText: storageText,
			storageStatus: storageStatus,
			delTxtState: delTxtState,
			txtState: txtState,
			getUserText: getUserTextHandler,
			getStorageText: getStorageTextHandler,
			getStorageStatus: storageStatusHandler,
			setDelTxtState: delTxtStateHandler,
			getTxtState: txtStateHandler,
		},
		fontInput: {
			fontFamily: fontFamily,
			fontState: fontState,
			setFontFamily: fontFamilyHandler,
			getFontState: fontStateHandler,
		},
		colorInput: {
			colorActive: colorActive,
			setColorActive: activeColorHandler,
		},
		dimension: {
			width: width,
			height: letterHeight,
			widthHandler:widthHandler,
			heightHandler: heightHandler,
		},
		debouncer: {
			debounceStatus: debounceActive,
			setDebounceState: debounceHandler,
		},
	};
	//return the provider
	return (
		<textCtx.Provider value={textState}>{props.children}</textCtx.Provider>
	);
};

export default textCtx;
