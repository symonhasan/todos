import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";

const Top = (props) => {
    const [text, setText] = useState("");

    const onChangeHandler = (event) => {
        setText(event.target.value);
    };

    const onEnterPress = (event) => {
        if (event.key === "Enter") {
            props.saveNewTask( text );
            setText("");
        }
    };

    return (
        <div className="todo-area-input">
            <input
                type="text"
                placeholder="What's need to be done?"
                value={text}
                onChange={onChangeHandler}
                onKeyPress={onEnterPress}
            />
        </div>
    );
};

const mapDispatchToProps = ( dispatch ) => {
    return{
        saveNewTask: ( text ) => {
            dispatch({
                type: "NEW_TASK",
                payload: {
                    text: text,
                    status: true,
                }
            })
        }
    }
}

export default connect( null ,mapDispatchToProps)( Top );
