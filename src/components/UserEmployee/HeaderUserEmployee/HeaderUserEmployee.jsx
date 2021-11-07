import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './HeaderUserEmployee.module.css';

class HeaderUserEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: false
        };
    }

    toggleState() {
        this.setState({ isOpened: !this.state.isOpened });
    }

    render() {
        let dropdownText;
        if (this.state.isOpened) {
            dropdownText = <ul className={s.header__dropdown}>
                <li className={s.header__item}><NavLink to="/task">Задачи</NavLink></li>
                <li className={s.header__item}><NavLink to="/">Животные</NavLink></li>
                <li className={s.header__item}><NavLink to="/add-user">Почта</NavLink></li>
                <li className={s.header__item}><NavLink to="/my-reviews">Выйти</NavLink></li>
            </ul>;
        }

        return (
            <header>
                <div>
                    <img src="https://i.ibb.co/zVrPg5m/image-13.png" alt="" />
                    <button className={s['specialist-info']} onClick={this.toggleState.bind(this)}>Виталий</button>
                    {dropdownText}
                </div>
                <div>
                    <NavLink to="/add-task"><img src="https://i.ibb.co/F6ftm7z/image-9.png" alt="" /></NavLink>
                </div>
            </header>
        )
    }
}

export default HeaderUserEmployee;