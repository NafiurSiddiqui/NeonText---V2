import React from 'react';
//UI state management here.

//? should you create multiple context in one file or separte?
//? in such case, how would you provide each of them?

//Create Context
const textCtx = React.createContext({

    })

//provide context

export const TextCtxProvider = (props)=>{
    //set uiInput state management here



	

    //create all of them inside an object
    const textState ={};
    //return the provider
    <textCtx.Provider value={textState}>
        {props.children}
    </textCtx.Provider>
 };