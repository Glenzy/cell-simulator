import {
  useState,
  useEffect
} from 'react';
import { IState } from '../interfaces/state-interface';
import { ICell } from './../interfaces/cell-interface';
import { number } from 'prop-types';

const useSetSimulation = () => {

  const [cellArray, setCellData] = useState<IState>();
  const [cellsSet, setCellsSet] = useState()
  const [simulationStarted, setStartSimulation] = useState(false)


  const generateCellData = () => {
    let cellArray = [];
    let key = 0;
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        cellArray.push({ id: key, isActive: false, x: j, y: i, });
        key++
      }
      setCellData(cellArray as IState);
    }
  }


  const updateCells = (id: number | undefined, type: string) => {

    const upDatedCellArray =
      cellArray && cellArray.map((cell) => {
        if (type === 'start-btn') {
          setStartSimulation(true);
          runSimulation(cell);
        }

        if (type === 'selected') {
          if (cell.id === id) {
            //console.log('cell ID', cell.id);
            cell.isActive = true;
            console.log(checkNeighbours(cell.id));
          }
        }
        if (type === 'reset-btn') {
          cell.isActive = false;
        }

        return cell;
      });
    setCellData(upDatedCellArray as IState);
  }

  useEffect(() => {
    if (!cellsSet) {
      generateCellData();
      setCellsSet(true);
    }
    if (simulationStarted) {
      updateCells(undefined, 'simulation');
    }
  });

  const runSimulation = (cell: any) => {
    if (cell.isActive === true && checkNeighbours(cell.id) === 2 || checkNeighbours(cell.id) === 3) {
      return cell;
    }
    if (cell.isActive === false && checkNeighbours(cell.id) === 3) {
      cell.isActive === true;
      return cell;
    }
    if (cell.isActive === true && checkNeighbours(cell.id) <= 2) {
      cell.isActive === false;
      return cell;
    }
    if (cell.isActive === true && checkNeighbours(cell.id) > 3) {
      cell.isActive === false;
      return cell;
    }
    return cell;
  }

  const checkNeighbours = (id: number) => {
    let neighbors = 0;
    if (cellArray && cellArray[id]) {
      //top
      if (cellArray[id - 20] && cellArray[id - 20].isActive) {
        neighbors++
      }
      //bottom
      if (cellArray[id + 20] && cellArray[id + 20].isActive) {
        neighbors++
      }
      if (cellArray[id - 1] && cellArray[id - 1].isActive) {
        neighbors++
      }
      if (cellArray[id + 1] && cellArray[id + 1].isActive) {
        neighbors++
      }
    }
    return neighbors;
  }



  return {
    cellArray,
    updateCells
  }
}

export default useSetSimulation;