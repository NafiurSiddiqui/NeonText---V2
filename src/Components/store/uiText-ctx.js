import React, { useState } from 'react';
//UI state management here.

//? should you create multiple context in one file or separte?
//? in such case, how would you provide each of them?

//Create Context
const textCtx = React.createContext({

    })

//provide context

export const TextCtxProvider = (props)=>{
    //set uiInput state management here


    const [userText, setUserText] = useState('');
	const [deletedText, setdeletedText] = useState('');
	const [delTxtState, setDelTxtState] = useState(false);
	const [isTouched, setIsTouched] = useState(false);
	const [storeText, setStoreText] = useState();
	

    //create all of them inside an object
    const textState ={};
    //return the provider
    <textCtx.Provider value={textState}>
        {props.children}
    </textCtx.Provider>
 };