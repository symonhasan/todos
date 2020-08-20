import React, { useState, useEffect } from 'react';
import './App.css';

const Item = (props) => {
    const [ readonly , setreadonly ] = useState( true );
    const [ text , setText ] = useState("");
    const [ id , setId ] = useState("");

    useEffect(() => {
        setText( props.text );
        setId( props.id );
    } , [ props.text , props.id ])
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
                {props.active ? <span className="tick-icon" id={id}>&#10003;</span> : null }
                <span className="remove-icon" id={id}>x</span>
            </div>
        </span>
    )
}

export default Item;