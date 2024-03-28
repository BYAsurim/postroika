import React, {FC} from 'react';
import s from './Navbar.module.css'
import image from '../../images/logo.svg'
import {Link, NavLink} from "react-router-dom";
import {PATH} from "../Pages/Pages";
import closeIcon from '../../images/closeOutline.svg'
import burger from '../../images/burger.svg'

type PropsType = {
    open: boolean
    handleClose: () => void
    handleOpen: () => void
}
const Navbar: FC<PropsType> = ({open, handleClose, handleOpen}) => {

    const sidebarClass = s.sidebar + (open ? ' ' + s.open : '')

    return (<>
        <nav>
            <div className={s.wrapper}>
                <div >
                    <img className={s.logo} src={image} alt={'img'}/>
                </div>
                <div className={s.wrapperLink}>
                    <Link to={PATH.HOME} className={s.link}>
                        <div className={s.item}>Главная</div>
                    </Link>
                    <Link to={PATH.ABOUT_US} className={s.link}>
                        <div className={s.item}>О нас</div>
                    </Link>
                    <Link to={PATH.PROJECTS} className={s.link}>
                        <div className={s.item}>Проекты</div>
                    </Link>
                    <Link to={PATH.CONTACTS} className={s.link}>
                        <div className={s.item}>Контакты</div>
                    </Link>
                </div>
            </div>

            <div className={s.burger} onClick={handleOpen}>
                <img src={burger} alt="open"/>
                MENU
            </div>
            {open && <div className={s.background} onClick={handleClose}/>}
            <aside className={sidebarClass}>
                <button className={s.close}>
                    <img src={closeIcon} alt="close" onClick={handleClose}/>
                </button>

                <NavLink to={PATH.HOME} className={s.link} onClick={handleClose}>
                    <div className={s.item}>Главная</div>
                </NavLink>
                <NavLink to={PATH.ABOUT_US} className={s.link} onClick={handleClose}>
                    <div className={s.item}>О нас</div>
                </NavLink>
                <NavLink to={PATH.PROJECTS} className={s.link} onClick={handleClose}>
                    <div className={s.item}>Проекты</div>
                </NavLink>
                <NavLink to={PATH.CONTACTS} className={s.link} onClick={handleClose}>
                    <div className={s.item}>Контакты</div>
                </NavLink>
            </aside>
        </nav>
    </>);
};

export default Navbar;