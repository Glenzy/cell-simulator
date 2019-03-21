import * as React from 'react';
import { ICell } from '../../interfaces/cell-interface';

const Cell = (Props: ICell) => <div data-name={Props.id} className={"flex-grid " + (Props.active ? "active" : "")} onClick={Props.ClickHandler}></div>


export default Cell