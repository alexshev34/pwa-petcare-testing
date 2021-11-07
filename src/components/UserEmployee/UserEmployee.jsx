import React from 'react';
import s from './UserEmployee.module.css';

const UserEmployee = () => {
    return (
        <body>
            <main className={s.main}>
                <section className={s.main__list}>
                    <h2 className={s.main__title}>Список животных</h2>
                    <div className={s.main__btn}>
                        <div className={s.main__img}>
                            <img src="https://i.ibb.co/rkF9m6t/image-19.png" alt=""/>
                        </div>
                        <div>
                            <p className={s.main__text}>Имя</p>
                            <p className={s.main__text}>Вид</p>
                            <p className={s.main__text}>Владелец</p>
                        </div>
                    </div>
                    <div className={s.main__btn}>
                        <div className={s.main__img}>
                            <img src="https://i.ibb.co/k8xJcmF/image-18.png" alt=""/>
                        </div>
                        <div>
                            <p className={s.main__text}>Имя</p>
                            <p className={s.main__text}>Вид</p>
                            <p className={s.main__text}>Владелец</p>
                        </div>
                    </div>
                    <div className={s.main__btn}>
                        <div className={s.main__img}>
                            <img src="https://i.ibb.co/7jW7C4b/image-7.png" alt=""/>
                        </div>
                        <div>
                            <p className={s.main__text}>Имя</p>
                            <p className={s.main__text}>Вид</p>
                            <p className={s.main__text}>Владелец</p>
                        </div>
                    </div>
                </section>
            </main>
        </body>
    )
}

export default UserEmployee;