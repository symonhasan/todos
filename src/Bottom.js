import React from 'react';
import './App.css';
import { connect } from 'react-redux';

const Bottom = ( props ) => {
    return(
        <div className="todo-bottom">
          <span>{props.count} item left</span>
          <ul className="todo-bottom-option">
            <li id="all" onClick={ props.bottomHandler } className={ props.mode === 'all' ? "todo-bottom-option-active" : null}>All</li>
            <li id="active" onClick={ props.bottomHandler } className={ props.mode === 'active' ? "todo-bottom-option-active" : null}>Active</li>
            <li id="completed" onClick={ props.bottomHandler } className={ props.mode === 'completed' ? "todo-bottom-option-active" : null}>Completed</li>
          </ul>
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return{
        count: state.count,
    }
}

export default connect( mapStateToProps )( Bottom );