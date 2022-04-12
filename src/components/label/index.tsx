import React from "react";
import s from './Label.module.scss';


interface ILabel {
    htmlFor: string,
    children: string,
    className?: string
}

const Label: React.FC<ILabel> = props => {
  return <div className={s.Label}>
    <label className={s.className} htmlFor={props.htmlFor}>{props.children}</label>
  </div>
}
export default React.memo(Label);
