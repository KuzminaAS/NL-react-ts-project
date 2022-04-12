import React, {useState, useCallback} from 'react';
import s from './Input.module.scss';
import IconWarning from "../../assets/warning.svg";
import Iconok from "../../assets/ok.svg";
interface Props {
    value: string,
    id?: number;
    name: string;
    type?: string | undefined,
    errorMessage?: string | undefined;
    pattern?: string | undefined;
    required?: boolean | undefined,
    onChange:(e:React.ChangeEvent<HTMLInputElement>) => void
    className: string,
    placeholder?: string
}
const Input: React.FC<Props> = ({ errorMessage, onChange, className, name, value, id, ...inputProps }) => {
  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = (e: React.ChangeEvent) => {
    setFocused(true);
  };

  const onChangeHandler = useCallback((e) => {
    onChange(e);
  }, [onChange]);

  return (
    <div className={s.Wrap}>
    <input
      key={id}
      className={className}
      name={name}
      value={value}
      {...inputProps}
      onBlur={handleFocus}
      data-focused={focused.toString()}
      onChange={onChangeHandler}
      />
      {focused ? <span className={s.icon_warning}><IconWarning /></span> : ''}
      {focused ?<span className={s.icon_ok}><Iconok /></span>: ''}
     {focused ? <span className={s.error}>* {errorMessage}</span> : ''} 
     </div>
  )
}
export default React.memo(Input);
