import React from 'react';
import './Button.css'
const Button = ({ onClick, icon, text , buttonClassName, textClassName, textColor,colorIcon, backgroundColor, borderColor}) => {
    return (
        <button onClick={onClick} className={`button-with-icon ${buttonClassName}`} style={{ backgroundColor:backgroundColor, borderColor:borderColor}}>
        {icon && <span className="button-icon" style={{ color: colorIcon}}>{icon}</span>}
        <span  className={`button-text ${textClassName}`} style={{ color: textColor}}>{text}</span>
    </button>
    );
};

export default Button;
