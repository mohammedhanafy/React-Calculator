import React from 'react';

const display = ({ displayValue, firstNumber, secondNumber }) => {
    return (
        <div>
            { displayValue !== '' && displayValue >= 0 ? displayValue 
            : secondNumber !== '' && secondNumber >= 0 ? secondNumber : firstNumber }
        </div>
    )
}

export default display;