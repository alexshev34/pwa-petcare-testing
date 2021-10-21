import React from 'react';
import { useState } from 'react';
import {useHttp} from '../../hooks/http.hookLogin';
import s from './../Registration/Registration.module.css';

const LoginEmployee = () => {

    const { loading, request} = useHttp()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const registerHandler = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const data = await request ('http://45.86.180.111:3000/session', 'POST', { ...values }) //данные которые передаются с сервера
        }
        catch (e) {

        }
    }


    return (
    <body>
        <main>
            <form className={s.registration} onSubmit={handleSubmit}>
                <label className={s.registration__label}>Логин</label>
                <input className={s.registration__input} type="text" id="email" name="email" placeholder="Логин" onChange={registerHandler}/>
                <label className={s.registration__label}>Пароль</label>
                <input className={s.registration__input} type="password" id="password" name="password" onChange={registerHandler}/>
                <button type="submit" className={s.registration__btn}>Войти</button>
            </form>
        </main>
    </body>
    )
}

export default LoginEmployee;