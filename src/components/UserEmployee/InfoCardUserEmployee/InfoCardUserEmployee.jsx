import React from 'react';
import s from './InfoCardUserEmployee.module.css';

const InfoCardUserEmployee = () => {
    return (
        <body>
            <main class={s.main}>
                <section class={s.picture}>
                    <img class={s.picture__img} src="https://i.ibb.co/pzS5kmR/image-1.png" alt="" />
                </section>
                <section class={s.info}>
                    <div class={s.info__card}>
                        <p class={s.info__title}>Антон</p>
                        <p class={s.info__text}>Дата поступления:</p>
                        <p class={s.info__text}>Пол:</p>
                        <p class={s.info__text}>Дата рождения:</p>
                        <p class={s.info__text}>Вид:</p>
                        <p class={s.info__text}>Порода:</p>
                        <p class={s.info__text}>Окрас:</p>
                        <p class={s.info__title}>Хозяин</p>
                        <p class={s.info__text}>Имя:</p>
                        <p class={s.info__text}>Адрес почты:</p>
                        <p class={s.info__text}>Телефон:</p>
                        <p class={s.info__text}>Серия и номер паспорта:</p>
                        <p class={s.info__title}>Здоровье</p>
                        <p class={s.info__text}>Прививки:</p>
                        <p class={s.info__text}>Заболевания:</p>
                        <p class={s.info__text}>Ветеринар/Клиника:</p>
                        <p class={s.info__text}>Рекомендации по уходу:</p>
                    </div>
                </section>
            </main>
        </body>
    )
}

export default InfoCardUserEmployee;