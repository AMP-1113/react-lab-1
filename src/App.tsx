import React from 'react';
import './App.css';
import Header from './Components/Header'
import AdDesigner from './Components/AdDesigner'
import votes from './Components/Votes'

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="AdDesigner">
        <AdDesigner />
      </div>

    </div>
  );
}

export default App;
