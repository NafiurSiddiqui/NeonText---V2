import React from 'react';
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
		captureUserText: () => {},
		captureStorageText: () => {},
		getStorageStatus: () => {},
		setDelTxtState: () => {},
		setTxtState: () => {},
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
	debouncer: {
		debounceStatus: false,
		setDebounceState: () => {},
	},
});

//provide context

export const TextCtxProvider = (props) => {
	//set uiInput state management here
	//UiText state
	const [captureUserText, setCaptureUserText] = useState('');
	const [capturedStorageText, setCapturedStorageText] = useState();
	const [storageStatus, setStorageStatus] = useState();
	const [delTxtState, setDelTxtState] = useState();
	const [txtState, setTxtState] = useState(false);

	//DIMENSION
	const [width, setWidth] = useState();
	const [capturedLetterHeight, setCapturedLetterHeight] = useState();
	//UiFont state
	const [fontFamily, setFontFamily] = useState();
	const [fontState, getFontState] = useState(false);
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

	const captureUserTextHandler = (userText) => {
		setCaptureUserText(userText);
	};

	const captureStorageTextHandler = (storageText) => {
		setCapturedStorageText(storageText);
	};

	const storageStatusHandler = (status) => {
		setStorageStatus(status);
	};

	const activeColorHandler = (color) => {
		setColorActive(color);
	};

	const widthHandler = (width) => {
		setWidth(width);
	};

	//create all of them inside an object
	const textState = {};
	//return the provider
	<textCtx.Provider value={textState}>{props.children}</textCtx.Provider>;
};
