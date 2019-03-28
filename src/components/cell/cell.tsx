import * as React from 'react';
import { ICell } from '../../interfaces/cell-interface';

const Cell = (Props: ICell) => {
  return (
    <div
      data-x={Props.x}
      data-y={Props.y}
      data-id={Props.id}
      className={"flex-grid " + (Props.isActive ? "active" : "")}
      onClick={Props.ClickHandler}
    />
  )
}


export default Cell