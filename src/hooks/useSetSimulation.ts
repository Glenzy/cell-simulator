import {
  useState,
  useEffect
} from 'react';
import { IState } from '../interfaces/state-interface';
import { ICell } from './../interfaces/cell-interface';

const useSetSimulation = () => {

  const [cellArray, setCellData] = useState<IState>();
  const [cellsSet, setCellsSet] = useState()

  const generateCellData = () => {
    let cellArray = [];
    let key = 0;
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        cellArray.push({ id: `${key}`, isActive: false, x: j, y: i, });
        key++
      }
      setCellData(cellArray as IState);
    }
  }
  const updateCells = (x: number | undefined, y: number | undefined, type: string) => {

    const upDatedCellArray =
      cellArray && cellArray.map((item) => {
        if (type === 'simulation') {

        }

        if (type === 'selected') {
          if (item.y === y && item.x === x) {
            item.isActive = true;
            console.log(checkNeighbours(item.x, item.y));
          }
        }
        if (type === 'reset-btn') {
          item.isActive = false;
        }

        return item;
      });
    setCellData(upDatedCellArray as IState);
  }

  useEffect(() => {
    if (!cellsSet) {
      generateCellData();
      setCellsSet(true);
    }
  });

  const checkNeighbours = (x: number, y: number) => {
    let neighbors = 0;

    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1]
    ];
    for (let i = 0; i < directions.length; i++) {
      const dir = directions[i];
      let y1 = y + dir[0];
      let x1 = x + dir[1];
    }

    cellArray && cellArray.map((cell: ICell) => {
      if (cell.x === x && cell.y === y) {
        return
      }
      if (cell.isActive) {
        if (cell.x === x + 1 || cell.x === x - 1 || cell.x === x && cell.y === y + 1 || cell.y === y - 1 || cell.y === y) {
          return neighbors++;
        }
      }
      return
    });
    return neighbors;
  }



  return {
    cellArray,
    updateCells
  }
}

export default useSetSimulation;