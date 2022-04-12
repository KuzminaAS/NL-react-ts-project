import React from "react";
import s from './Controls.module.scss';


interface IControls {
  onClick?(): void,
  style?: React.CSSProperties,
  text?: string,
  type?: "button" | "submit" | "reset" | undefined
}

const Controls: React.FC<IControls> = props => {
  return <div className={s.Controls}>
    <button className={s.Controls__btn} style={props.style} onClick={props.onClick} type={props.type}>{props.text}</button>
  </div>
}
export default React.memo(Controls);
