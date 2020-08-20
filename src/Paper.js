import React from 'react';
import './App.css';
import Item from './Item';

const Paper = ( props ) => {
    return(
        <div className="paper">
          <Item text="Hello World" active={ true }/>
        </div>
    )
}

export default Paper;