import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    displayValue: ''
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const setDisplayValue = (firstNumber, secondNumber, arthemticOperation) => {

        const output = eval(firstNumber + arthemticOperation + secondNumber);

        dispatch({type: 'OUTPUT', payload: output});
    }

    const unSetDisplayValue = () => {
        dispatch({type: 'UNSET_DISPLAY_VALUE'});
    }
 
    return (
        <GlobalContext.Provider value={{
            displayValue: state.displayValue,
            setDisplayValue,
            unSetDisplayValue
        }}>
            {children}
        </GlobalContext.Provider>
    )
}