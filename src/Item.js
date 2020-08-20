import React, { useState, useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";

const Item = (props) => {
    const [readonly, setreadonly] = useState(true);
    const [text, setText] = useState("");
    const [id, setId] = useState("");
    const [ status , setStatus ] = useState("");
    
    useEffect(() => {
        setText(props.text);
        setId(props.id);
        setStatus( props.active );
    }, [props.text, props.id, props.active ]);

    return (
        <span className="paper-item">
            <input
                className={ !status ? "cross-item" : ""}
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
                    <span className="tick-icon" id={id} onClick={(e) => { props.markTaskAsDone( e.target.id );}}>
                        &#10003;
                    </span>
                ) : null}
                <span className="remove-icon" id={id} onClick={(e) => { props.removeTask( e.target.id )}}>
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
        },
        markTaskAsDone: ( id ) => {
            dispatch({
                type: "DONE",
                payload:{
                    id: id,
                }
            })
        },
        removeTask: ( id ) => {
            dispatch({
                type: "REMOVE",
                payload:{
                    id: id,
                }
            })
        }
    }
}

export default connect( null , mapDispatchToProps )( Item );
