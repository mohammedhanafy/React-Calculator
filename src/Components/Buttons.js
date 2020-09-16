import React, { useState, useContext, useEffect } from 'react';
import Display from './Display';
import { GlobalContext } from '../context-api';

const buttons = (props) => {

    const { displayValue, setDisplayValue, unSetDisplayValue } = useContext(GlobalContext);

    useEffect(() => {
        if(displayValue !== '') {
            setFirstNumber(displayValue);
            setSecondNumber('');
        }
    }, [displayValue]);

    const [firstNumber, setFirstNumber] = useState('');
    
    const [secondNumber, setSecondNumber] = useState('');

    const [arthemticOperation, setArthemticOperation] = useState('');

    const clickNumberHandler = (no) => {
        if(firstNumber === '') {
            setFirstNumber(no);
        } else {
            if(arthemticOperation !== '') {
                if(secondNumber === '') {
                    setSecondNumber(no);
                } else {
                    setSecondNumber(secondNumber + '' + no);
                }
            } else {
                setFirstNumber(firstNumber + '' + no);
            }
        }
    }

    const clickArthemticOperationHandler = (arthOper) => {
        if(firstNumber === '') {
            return;
        } else {
            if(secondNumber === '') {
                unSetDisplayValue();
                setArthemticOperation(arthOper);                
            } else {
                setDisplayValue(firstNumber, secondNumber, arthemticOperation);
            }
        }
    }

    const clickEraseHandler = () => {
        setFirstNumber('');
        setSecondNumber('');
        unSetDisplayValue();
    }

    return (
        <div>
            <Display displayValue={displayValue} firstNumber={firstNumber} secondNumber={secondNumber} />
            <div className="row">
                <button onClick={() => clickEraseHandler()}>AC</button>
                <button onClick={() => clickArthemticOperationHandler('/')}>÷</button>
            </div>
            <div className="row">
                <button onClick={() => clickNumberHandler(7)}>7</button>
                <button onClick={() => clickNumberHandler(8)}>8</button>
                <button onClick={() => clickNumberHandler(9)}>9</button>
                <button onClick={() => clickArthemticOperationHandler('*')}>x</button>
            </div>
            <div className="row">
                <button onClick={() => clickNumberHandler(4)}>4</button>
                <button onClick={() => clickNumberHandler(5)}>5</button>
                <button onClick={() => clickNumberHandler(6)}>6</button>
                <button onClick={() => clickArthemticOperationHandler('-')}>-</button>
            </div>
            <div className="row">
                <button onClick={() => clickNumberHandler(1)}>1</button>
                <button onClick={() => clickNumberHandler(2)}>2</button>
                <button onClick={() => clickNumberHandler(3)}>3</button>
                <button onClick={() => clickArthemticOperationHandler('+')}>+</button>
            </div>
            <div className="row">
                <button onClick={() => clickNumberHandler(0)}>0</button>
                <button onClick={() => clickNumberHandler('.')}>.</button>
                <button onClick={() => clickArthemticOperationHandler('=')}>=</button>
            </div>
        </div>
    )
}

export default buttons;