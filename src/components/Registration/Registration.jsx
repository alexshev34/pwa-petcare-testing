import React from 'react';
import s from './Registration.module.css';

const Registration = () => {
    return (
    <body>
        <main>
            <form className={s.registration}>
                <label className={s.registration__label}>Название организации</label>
                <input className={s.registration__input} type="text" placeholder="Гостиница для животных №1"/>
                <label className={s.registration__label}>Телефон</label>
                <input className={s.registration__input} type="text" placeholder="8-900-000-00-00"/>
                <label className={s.registration__label}>Логин</label>
                <input className={s.registration__input} type="text" placeholder="Логин"/>
                <label className={s.registration__label}>Пароль</label>
                <input className={s.registration__input} type="password"/>
                <button className={s.registration__btn}>Зарегестрироваться как сотрудник</button>
                <button className={s.registration__btn}>Зарегестрироваться как клиент</button>
            </form>
        </main>
    </body>
    )
}

export default Registration;