import React from 'react';
import './App.css';
import { connect } from 'react-redux';

const Bottom = ( props ) => {
    return(
        <div className="todo-bottom">
          <span>{props.count} item left</span>
          <ul className="todo-bottom-option">
            <li>All</li>
            <li>Active</li>
            <li>Completed</li>
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