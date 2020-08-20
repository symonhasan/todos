import React, { useState, useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";

const Item = (props) => {
    const [readonly, setreadonly] = useState(true);
    const [text, setText] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        setText(props.text);
        setId(props.id);
    }, [props.text, props.id]);

    return (
        <span className="paper-item">
            <input
                type="text"
                value={text}
                readOnly={readonly}
                id={id}
                onDoubleClick={(e) => {
                    setreadonly(false);
                }}
                onChange={(e) => {
                    setText(e.target.value);
                }}
                onKeyPress={(e) => {
                    if( e.key === 'Enter' ){
                        props.editTask( e.target.id , text );
                        setreadonly( true );
                    }
                }}
            />
            <div className="paper-item-icons">
                {props.active ? (
                    <span className="tick-icon" id={id}>
                        &#10003;
                    </span>
                ) : null}
                <span className="remove-icon" id={id}>
                    x
                </span>
            </div>
        </span>
    );
};

const mapDispatchToProps = ( dispatch ) => {
    return{
        editTask: ( id , text ) => {
            dispatch({
                type: "EDIT_TASK",
                payload: {
                    id: id,
                    text: text,
                }
            })
        }
    }
}

export default connect( null , mapDispatchToProps )( Item );
