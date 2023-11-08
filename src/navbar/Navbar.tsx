import React from 'react';
import s from './Navbar.module.css'
import image from '../images/painter.jpg'

const Navbar = () => {
    return (
        <div className={s.wrapper}>
            <img src={image} alt={'img'} className={s.img}/>
                <div className={s.item}>Главная</div>
                <div className={s.item}>О нас</div>
                <div className={s.item}>Проекты</div>
                <div className={s.item}>Контакты</div>
        </div>
    );
};

export default Navbar;