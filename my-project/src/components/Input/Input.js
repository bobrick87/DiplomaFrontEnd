import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <input type={props.type} className={props.className} onChange={props.onChange} placeholder={props.placeholder} />
    )    
}

export default Input;