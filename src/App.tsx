import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Cell Simulator</h1>
          <div className="flex-grid-container">
            <div className="flex-grid"></div>
            <div className="flex-grid"></div>
            <div className="flex-grid"></div>
            <div className="flex-grid"></div>
            <div className="flex-grid"></div>
            <div className="flex-grid"></div>
            <div className="flex-grid"></div>
            <div className="flex-grid"></div>
            <div className="flex-grid"></div>
            <div className="flex-grid"></div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
