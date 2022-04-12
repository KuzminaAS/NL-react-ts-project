import React, { useRef, useCallback } from 'react';
// import useClickOutside from "../../utils/use-click-outside";
import s from './Select.module.scss';
import Arrow from '../../assets/arrow.svg';

type OptionType = {_id: number, title: string}
interface Props {
    options: OptionType[],
    name: string
    value: string,
    onChange(e:React.ChangeEvent<HTMLSelectElement>): void
}
const Select: React.FC<Props> = (props) => {
  // const [open, setOpen] = useState(false);

  const ref = useRef(null);

  // useClickOutside(ref, setOpen);

  const onSelect = useCallback((e) => {
    props.onChange(e);
  }, [props.onChange])

  return (
    <div className={s.Wrap}>
    <select name={props.name} className={s.Select} onChange={onSelect} value={props.value} ref={ref}>
      <option className={s.Select__option} defaultValue={props.options[0]._id} disabled>{props.options[0].title}</option>
      {props.options.map(item => (
        <option key={item._id} value={item._id}>{item.title}</option> 
      ))}
    </select>
      <span className={s.Select__arrow}><Arrow/></span>
    </div>
  )
}

export default React.memo(Select);
//className={`${s.Select__arrow}${open ? s.open : null}`}