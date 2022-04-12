import React, {useState, useEffect, useCallback, useRef} from 'react';
import s from 'FormSubmition.module.scss';
import Input from '../input';
import Select from '../select';
import Textarea from '../textarea';
import Controls from '../controls';
// import Label from '../label';
import { onChangeUser, createProfile } from '../form-submition/userSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../utils/hooks-redux';
import {fields} from '../../assets/fields';

type OptionType = {
  _id: number,
  title: string
}

interface Props {
    options: OptionType[],
}

const FormSubmition: React.FC<Props> = props => {
    const [userName, setName] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userTheme, setTheme] = useState('');
    const [userMessage, setMessage] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const onRedirectPage = (path: string) => {
        return navigate(`${path}`, { replace: true })
    }

    const onSubmitHandler = useCallback((e: React.FormEvent): void => {
        e.preventDefault();
        const newObj = {
            name: userName,
            email: userEmail,
            theme: userTheme,
            message: userMessage
        }
        dispatch(createProfile(newObj));
        setName('');
        setEmail('');
        setTheme('');
        setMessage('');
        onRedirectPage('/');
        
    }, [dispatch, onRedirectPage]);
    
    const onReset = useCallback(() => {
        setName('');
        setEmail('');
        setTheme('');
        setMessage('');
    }, []);

    const onChangeHandler = useCallback((e) => {
        const { name, value } = e.target;
        dispatch(onChangeUser(name, value));
        switch (name) {
            case 'name': {
                setName(value);
            }
                break;
            case 'email': {
                setEmail(value);
            }
                break;
            case 'theme': {
                setTheme(value);
            }
                break;
            case 'message': {
                setMessage(value);
            }
                break;
        }
    }, [dispatch]);

    // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === 'Enter'|| e.key === 'Space') {
    //         onSubmitHandler(e);
    //     }
        
    // }

    return (
        <div className={s.Form}>
            <form onSubmit={(e) => onSubmitHandler(e)}>
            <h1 className={s.Form__text}>Форма для тебя</h1>
            <div className={s.Form__input_wrapper}>
                    {fields.map((input) => (
                        /* <Label className={s.Form__label} htmlFor={input.name}>{input.name === 'name'? 'Представьтесь пожалуйста' : 'Введите ваш e-mail'}</Label> */
                        <Input key={input.id} className={s.Form__field} {...input} value={input.name === 'name' ? userName : userEmail} onChange={onChangeHandler} />
                    ))}   
                <Select value={userTheme} name="theme" options={props.options} onChange={onChangeHandler}/>
                <Textarea value={userMessage} name="message" rows={6} placeholder={'Введите сообщение'} onChange={onChangeHandler}/>
            </div>
            <div className={s.Form__btn_wrapper}>
                <Controls type='reset' text={'Сбросить'} style={{ width: '128px', backgroundColor: '#bdbdbd' }} onClick={onReset}/>
                <Controls type='submit' text={'Отправить'} style={{ width: '192px', marginLeft: '16px' }}/>
            </div>
            </form>
        </div>
    )
}
export default React.memo(FormSubmition);
