import React from 'react';
import s from './Navbar.module.css'
import image from '../images/painter.jpg'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.wrapper}>
            <img src={image} alt={'img'} className={s.img}/>
            <Link to={'/'}>
                <div className={s.item}>Главная</div>
            </Link>
            <Link to={'about'}>
                <div className={s.item}>О нас</div>
            </Link>
            <Link to={'projects'}>
                <div className={s.item}>Проекты</div>
            </Link>
            <Link to={'contact'}>
                <div className={s.item}>Контакты</div>
            </Link>

        </div>
    );
};

export default Navbar;