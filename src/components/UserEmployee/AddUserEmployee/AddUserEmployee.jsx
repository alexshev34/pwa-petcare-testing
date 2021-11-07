import React from 'react';
import s from './AddUserEmployee.module.css';

const AddUserEmployee = () => {
    return (
        <body>
            <main>
                <h2 className={s.main__title}>Добавить сотрудника</h2>
                <form className={s.add}>
                    <label className={s.add__label}>Почта</label>
                    <input className={s.add__input} type="text" placeholder="E-mail" />
                    <button className={s.add__btn} type="submit">Добавить</button>
                </form>
            </main>
        </body>
    );
}

export default AddUserEmployee;