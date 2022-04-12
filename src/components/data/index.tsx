import React from 'react';
import s from './Data.module.scss';

interface Props {
    data: {
        name: string,
        email: string,
        theme: string,
        message: string
    }
}

const Data: React.FC<Props> = props => {
  return (
    <div className={s.Data}>
      <div className={s.Data_bold}> Фио: 
      <span className={s.Data_format}>{props.data.name}</span>
      </div>
      <div className={s.Data_bold}>E-mail:
        <span className={s.Data_format}>{props.data.email}</span>
      </div>
      <div className={s.Data_bold}>Тема:
      <span className={s.Data_format}>{props.data.theme}</span>
      </div>
      <div className={s.Data_bold}> Сообщение: 
        <span className={s.Data_format}>{props.data.message}</span>
      </div>
    </div>
  )
}
export default React.memo(Data);