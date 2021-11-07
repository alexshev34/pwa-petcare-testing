import React from "react";
import s from './AddTaskUserEmployee.module.css';

const AddTaskUserEmployee = () => {
    return(
    <body>
        <main>
            <form className={s.task}>
                <label className={s.task__label}>Название</label>
                <input className={s.task__input} type="text"/>
                <label className={s.task__label}>Описание</label>
                <input className={s.task__input} type="text"/>
                <label className={s.task__label}>Время первого выполнения</label>
                <input className={s.task__input} type="time"/>
                <label className={s.task__label}>Повторений в день</label>
                <input className={s.task__input} type="number"/>
                <label className={s.task__label}>Время между повторами</label>
                <input className={s.task__input} type="text"/>
                <button className={s.task__btn} type="submit">Добавить</button>
            </form>
        </main>
    </body> 
    );
}

export default AddTaskUserEmployee;