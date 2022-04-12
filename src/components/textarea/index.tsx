import React, {useCallback} from 'react';

import s from 'Textarea.module.scss';

interface Props {
    name: string;
    placeholder?: string | undefined;
    value: string,
    rows: number,
    onChange:(e:React.ChangeEvent<HTMLTextAreaElement>) => void
}
const Textarea: React.FC<Props> = props => {

  // Обработчик изменений в поле
  const onChange = useCallback(e => {
    props.onChange(e);
  }, [props.onChange]);

  return (
    <textarea
      className={s.Textarea}
      name={props.name}
      rows={props.rows}
      value={props.value}
      placeholder={props.placeholder}
      onChange={onChange}
    />
  )
}

export default React.memo(Textarea);