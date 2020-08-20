import React from 'react';
import './App.css';

const Bottom = ( props ) => {
    return(
        <div className="todo-bottom">
          <span>0 item left</span>
          <ul className="todo-bottom-option">
            <li>All</li>
            <li>Active</li>
            <li>Completed</li>
          </ul>
        </div>
    )
}

export default Bottom;