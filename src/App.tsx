import React, { Component } from 'react';
import Cell from './components/cell/cell';

import './App.scss';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

class App extends Component {
  handleCellClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event);
  }

  generateCells = () => {
    let CellArray = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++)
        CellArray.push(<Cell key={`${i}-${j}`} id={`${i}-${j}`} rowId={`${i}`} ClickHandler={this.handleCellClick} active={false} />)
    }
    return CellArray
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Cell Simulator</h1>
          <div className="flex-grid-container">
            {this.generateCells()}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
