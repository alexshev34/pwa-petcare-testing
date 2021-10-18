import React from 'react';
import s from './../Registration/Registration.module.css';

const LoginEmployee = () => {
    return (
    <body>
        <main>
            <form className={s.registration}>
                <label className={s.registration__label}>Логин</label>
                <input className={s.registration__input} type="text" placeholder="Логин"/>
                <label className={s.registration__label}>Пароль</label>
                <input className={s.registration__input} type="password"/>
                <button className={s.registration__btn}>Войти</button>
            </form>
        </main>
    </body>
    )
}

export default LoginEmployee;