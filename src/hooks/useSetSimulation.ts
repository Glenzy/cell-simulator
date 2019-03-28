import {
  useState,
  useEffect
} from 'react';
import { IState } from '../interfaces/state-interface';

const useSetSimulation = () => {

  const [cellArray, setCellData] = useState<IState>();
  const [cellsSet, setCellsSet] = useState()


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
        if (type === "simulation") {
          cell = runSimulation(cell);
        }
        if (type === 'selected') {
          if (cell.id === id) {
            cell.isActive = !cell.isActive;
          }
        }
        if (type === 'reset-btn') {
          //cell.isActive = false;
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
  });

  const runSimulation = (cell: any) => {
    //case A Cell with fewer than two live neighbours dies of under-population.
    if (cell.isActive === true && checkNeighbours(cell.id) <= 2) {
      cell.isActive = false;
      return cell;
    }
    // case A Cell with 2 or 3 live neighbours lives on to the next generation.
    if (cell.isActive === true && checkNeighbours(cell.id) === 2 || cell.isActive === true && checkNeighbours(cell.id) === 3) {
      return cell;
    }
    // case A Cell with more than 3 live neighbours dies of overcrowding.
    if (cell.isActive === true && checkNeighbours(cell.id) > 3) {
      cell.isActive = false;
      return cell;
    }
    // case An empty Cell with exactly 3 live neighbours "comes to life".
    if (cell.isActive === false && checkNeighbours(cell.id) === 3) {
      cell.isActive = true;
      return cell;
    }
    return cell;
  }

  const checkNeighbours = (id: number) => {
    let neighbours = 0;
    const directions = [-20, 20, -1, 1, 21, -21, 19, -19];
    if (cellArray && cellArray[id]) {
      for (let i = 0; i <= directions.length; i++) {
        let direction = directions[i];
        if (cellArray[id + direction] && cellArray[id + direction].isActive) {
          neighbours++;
        }
      }
    }
    return neighbours;
  }



  return {
    cellArray,
    updateCells,
  }
}

export default useSetSimulation;