import React, {useState, useCallback} from 'react';
import s from 'FormEdit.module.scss';
import Input from '../input';
import Select from '../select';
import Textarea from '../textarea';
import Controls from '../controls';
import { onChangeUser, editProfile } from '../form-edit/editSlice';
import { createProfile } from '../form-submition/userSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../utils/hooks-redux';
import {fields} from '../../assets/fields';

type OptionType = {
  _id: number,
  title: string
}

interface Props {
    data: {
        name: string,
        email: string,
        theme: string,
        message: string
    },
    options: OptionType[],
}

const FormEdit: React.FC<Props> = props => {
    const [userName, setName] = useState(props.data.name);
    const [userEmail, setEmail] = useState(props.data.email);
    const [userTheme, setTheme] = useState((props.data.theme));
    const [userMessage, setMessage] = useState(props.data.message);


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
        dispatch(editProfile(newObj));
        dispatch(createProfile(newObj));
        onRedirectPage('/');
        
    }, [dispatch, onRedirectPage]);
    

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

    return (
        <div className={s.Form}>
            <form onSubmit={(e) => onSubmitHandler(e)}>
            <h1 className={s.Form__text}>Редактировать форму</h1>
            <div className={s.Form__input_wrapper}>
                {fields.map((input) => (
                    <Input key={input.id} name={input.name} placeholder={input.placeholder} className={s.Form__field} errorMessage={input.errorMessage} value={input.name === 'name' ? userName : userEmail} onChange={onChangeHandler} />
                ))}   
                <Select value={userTheme} name="theme" options={props.options} onChange={onChangeHandler}/>
                <Textarea value={userMessage} name="message" rows={6} placeholder={'Cообщение'} onChange={onChangeHandler}/>
            </div>
            <div className={s.Form__btn_wrapper}>
                <Controls type='submit' text={'Сохранить'} style={{ width: '192px' }}/>
            </div>
            </form>
        </div>
    )
}
export default React.memo(FormEdit);
