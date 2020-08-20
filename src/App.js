import React from 'react';
import './App.css';
import Paper from './Paper';
import Bottom from './Bottom';
import Top from './Top';

function App() {
  return (
    <div className="app-div">
      <div className="app-title">
        <p>to<span>dos</span></p>
      </div>
      <div className="todo-area">
        <Top />
        <Paper />
        <Bottom />
      </div>
    </div>
  );
}

export default App;
