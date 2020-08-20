import React, { useState, useEffect } from 'react';
import './App.css';

const Item = (props) => {
    const [ readonly , setreadonly ] = useState( true );
    const [ text , setText ] = useState("");

    useEffect(() => {
        setText( props.text );
    } , [ props.text ])
    return(
        <span className="paper-item">
            {
                readonly ? (
                    <input type="text" value={text} disabled />
                ) : (
                    <input type="text" value={text} />
                )
            }
            <div className="paper-item-icons">
                {props.active ? <span className="tick-icon">&#10003;</span> : null }
                <span className="remove-icon">x</span>
            </div>
        </span>
    )
}

export default Item;