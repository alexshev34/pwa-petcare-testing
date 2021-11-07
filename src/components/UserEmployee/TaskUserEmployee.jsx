import {React, useState} from "react";
import { NavLink } from "react-router-dom";
import s from './TaskUserEmployee.module.css';
const TaskUserEmployee = () => {

    const [selected, setSelected] = useState(false)


    const toggle = (selected) => {
   
        if(selected === true) {
          return setSelected(false)

        }
        else{
           return setSelected(true)
        }
    }
    return(
        <body>
            <main className={s.main}>
                <section className={s.main__list}>
                    <h2 className={s.main__title}>Задачи</h2>
                    <div className={s.main__btn}>
                        <div className={s.main__wrapper} onClick={(e) => toggle(selected)}>
                            <p className={s.main__text}>Покормить Антона</p>
                            <p className={s.main__text}>12:30</p>
                        </div>  
                        <div className={selected === true ? s.main__show : s.main__hidden}>
                            <p className={s.main__show}>Описание: Не давать Антону колбасу</p>
                            <button className={s.main__complete}>Завершить</button>
                            <NavLink className={s.main__link} to="/info-card">Подробнее</NavLink>
                        </div>
                    </div>
                    <div className={s.main__btn}>
                        <div className={s.main__wrapper} onClick={(e) => toggle(selected)}>
                            <p className={s.main__text}>Покормить Шерри</p>
                            <p className={s.main__text}>12:30</p>
                        </div>
                    </div>
                    <div className={s.main__btn}>
                        <div className={s.main__wrapper} onClick={(e) => toggle(selected)}>
                            <p className={s.main__text}>Выгулять Антона</p>
                            <p className={s.main__text}>12:50</p>
                        </div>
                    </div>
                </section>
            </main>
        </body>
    )
}

export default TaskUserEmployee;