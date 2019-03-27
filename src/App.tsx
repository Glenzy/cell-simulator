import * as React from 'react';
import Cell from './components/cell/cell';
import Button from './components/button/button';
import useSetSimulation from './hooks/useSetSimulation'


import './App.scss';
import { IState } from './interfaces/state-interface';

const App: React.FC<IState | {}> = () => {

  const { cellArray, updateCells } = useSetSimulation();
  const [animationRunning, setAnimationRunning] = React.useState(false);

  let requestID: number;
  let prevRequestID: number = 0;

  function startAnimtion() {
    requestID = requestAnimationFrame(function (time) {
      startCellUpdates(requestID);
    });
  }

  function startCellUpdates(requestID: number) {
    console.log('StartCellUpdate', requestID);
    console.log('##########################', prevRequestID);
    console.log('##########################', animationRunning);
    if (requestID > (prevRequestID + 10)) {
      prevRequestID = requestID;
      updateCells(undefined, 'simulation');
    }
    if (animationRunning) {
      return startAnimtion();
    }
    return
  }


  const handleCellClick = (event: React.MouseEvent<HTMLElement>) => {
    const id = Number((event.target as HTMLInputElement).dataset.id);
    updateCells(id, 'selected');
  }


  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    const buttonType = (event.target as HTMLInputElement).name;
    if (buttonType === 'start-btn') {
      setAnimationRunning(true)
      startAnimtion()
    }
    if (buttonType === 'reset-btn') {
      return setAnimationRunning(false)
    }
    updateCells(undefined, buttonType);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Cell Simulator</h1>
      </header>
      <section>
        <div className="flex-grid-container">
          {cellArray && cellArray.map((cell: any, index) => {
            return <Cell
              key={index}
              id={cell.id}
              isActive={cell.isActive}
              x={cell.x}
              y={cell.y}
              ClickHandler={handleCellClick}
            />
          })}
        </div>
        <Button
          text="Start Simulation"
          name="start-btn"
          ClickHandler={handleButtonClick}
          tabindex={0}
          ariaRole="Start cell simulation"
          classes="button is-primary"
        />
        <Button
          text="Reset Simulation"
          name="reset-btn"
          ClickHandler={handleButtonClick}
          tabindex={1}
          ariaRole="Reset cell simulation"
          classes="button is-danger"
        />
      </section>
    </div>
  );
}

export default App;
