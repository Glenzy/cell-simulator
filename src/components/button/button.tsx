import * as React from 'react';
import { IButton } from './../../interfaces/button-interface';

const Button = (Props: IButton) => <button tabIndex={Props.tabindex} name={Props.name} className={Props.classes} onClick={Props.ClickHandler}>{Props.text}</button>


export default Button