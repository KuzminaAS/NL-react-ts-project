import React from 'react';

import s from './Notification.module.scss';

interface Notification {
    text?: string;
}
const Notification: React.FC<Notification> = props => {
    return <div className={s.Notification}>
         <p className={s.Notification__text}>{props.text}</p>
    </div>
};

export default React.memo(Notification);
