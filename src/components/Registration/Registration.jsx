import React from 'react';
import { useState } from 'react';
import {useHttp} from '../../hooks/http.hookRegistration';
import s from './Registration.module.css';

const Registration = () => {

    const {loading, request} = useHttp()
    const [values, setValues] = useState({
        email: '',
        name: '',
        password: ''
    })
 

    const registerHandler = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const data = await request ('http://45.86.180.111:3000/person', 'PUT', { ...values }) //данные которые передаются с сервера
        }
        catch (e) {

        }
    }

    return (
    <body>
        <main>
            <form className={s.registration} onSubmit={handleSubmit}>
                <label className={s.registration__label}>Имя</label>
                <input className={s.registration__input} type="text" id="name" name="name" onChange={registerHandler} placeholder="Введите Имя"/>
                {/* <label className={s.registration__label}>Телефон</label>
                <input className={s.registration__input} type="text" placeholder="8-900-000-00-00"/> */}
                <label className={s.registration__label}>Логин</label>
                <input className={s.registration__input} type="text" id="email" name="email" placeholder="Логин" onChange={registerHandler}/>
                <label className={s.registration__label}>Пароль</label>
                <input className={s.registration__input} type="password" id="password" name="password" onChange={registerHandler}/>
                <button type="submit" className={s.registration__btn}>Зарегестрироваться как сотрудник</button>
                <button type="submit" className={s.registration__btn}>Зарегестрироваться как клиент</button>
            </form>
        </main>
    </body>
    )
}

export default Registration;