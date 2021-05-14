import React from 'react';
import './App.css';
import Header from './Components/Header'
import AdDesigner from './Components/AdDesigner'
import Votes from './Components/Votes'
import Ad from './Components/Ad';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header name="Adam" />
      </div>
      {/* <div className="Ad">
        <Ad flavor="Chocolate" fontSize={100} darkTheme={true}/>
        <Ad flavor="Vanilla" fontSize={100} darkTheme={false}/>
        <Ad flavor="Strawberry" fontSize={100} darkTheme={true}/>
      </div> */}
      <div className="contentContainer">
        <div className="AdDesignerContainer">
          <AdDesigner />
        </div>
        <div className="VotesContainer">
          <Votes />
        </div>
      </div>
    </div>
  );
}

export default App;
