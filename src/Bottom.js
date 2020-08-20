import React from 'react';
import './App.css';
import { connect } from 'react-redux';

const Bottom = ( props ) => {
    return(
        <div className="todo-bottom">
          <span>{props.count} item left</span>
          <ul className="todo-bottom-option">
            <li id="all" onClick={ props.bottomHandler }>All</li>
            <li id="active" onClick={ props.bottomHandler }>Active</li>
            <li id="completed" onClick={ props.bottomHandler }>Completed</li>
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