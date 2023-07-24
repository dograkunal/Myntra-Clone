import React from 'react';

export const Button = ({ text, clickHandler }) => {
    return <div>
        <button onClick={clickHandler} type="submit" className="submitBtn">
            {text}
        </button>
    </div>
};