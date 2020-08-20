import React, { useState } from 'react';
import './App.css';
import Paper from './Paper';
import Bottom from './Bottom';
import Top from './Top';

function App() {
  const [ mode , setMode ] = useState("all");

  const bottomHandler = ( event ) => {
    setMode( event.target.id );
  }
  return (
    <div className="app-div">
      <div className="app-title">
        <p>to<span>dos</span></p>
      </div>
      <div className="todo-area">
        <Top />
        <Paper mode={mode}/>
        <Bottom bottomHandler={bottomHandler}/>
      </div>
    </div>
  );
}

export default App;
