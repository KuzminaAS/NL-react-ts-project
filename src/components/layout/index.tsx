import React from "react";
import s from './Layout.module.scss';

interface Props {
  head?: JSX.Element,
  style?: React.CSSProperties,
  content?: React.ReactNode
  children: React.ReactElement | React.ReactNode
}
const Layout: React.FC<Props> = props => {
  return (
    <div className={s.Layout} style={props.style}>
      <div className={s.Layout__head}>
        {props.head}
      </div>
      <div className={s.Layout__center}>
        {props.content || props.children}
      </div>
    </div>
  )
}

export default React.memo(Layout);
