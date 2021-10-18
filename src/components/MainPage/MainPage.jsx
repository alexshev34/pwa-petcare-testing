import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './MainPage.module.css';

const MainPage = () => {
    return (
        <body>
            <main className={s.main}>
                <section className={s.main__list}>
                    <h2 className={s.main__title}>Зайти в сервис как</h2>
                    <NavLink to="/login-employee" className={s.main__btn}>Сотрудник</NavLink>
                    <NavLink to="/login-customer" className={s.main__btn}>Клиент</NavLink>
                    <NavLink to="/registration" className={s.main__btn}>Зарегистрироваться</NavLink>
                </section>
            </main>
        </body>
    )
}

export default MainPage;