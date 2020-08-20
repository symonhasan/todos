import React from 'react';
import './App.css';
import Item from './Item';
import { connect } from 'react-redux';

const Paper = ( props ) => {
    return(
        <div className="paper">
          {
              props.tasks.map( ( element , index ) => {
                  return <Item text={element.text} active={element.status} key={index} id={index}/>;
              })
          }
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return{
        tasks: state.tasks,
    }
}

export default connect( mapStateToProps )( Paper );