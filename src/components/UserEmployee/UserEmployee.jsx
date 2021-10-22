import React from 'react';
import s from './UserEmployee.module.css';

const UserEmployee = () => {
    return (
        <body>
            <main className={s.main}>
                <section className={s.main__list}>
                    <h2 className={s.main__title}>Ваши подопечные</h2>
                    <button className={s.main__btn}>Животное 1</button>
                    <button className={s.main__btn}>Животное 2</button>
                    <button className={s.main__btn}>Животное 3</button>
                    <button className={s.main__btn}>Животное 4</button>
                    <button className={s.main__btn}>Животное 5</button>
                </section>
            </main>
        </body>
    )
}

export default UserEmployee;