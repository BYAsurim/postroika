import React, {FC} from 'react';
import s from './Navbar.module.css'
import Logo from '../../images/logoSvg.svg'
import logoText from '../../images/ProPaintingLogo.svg'
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
                <div className={s.logoWrapper}>
                    <img src={logoText} alt="ProPainting" className={s.logoText}/>
                    <img className={s.logo} src={Logo} alt={'img'}/>
                </div>
                <div className={s.wrapperLink}>
                    <Link to={PATH.HOME} className={s.link}>
                        <div className={s.item}>О компании</div>
                    </Link>
                    <Link to={PATH.ABOUT_US} className={s.link}>
                        <div className={s.item}>Услуги</div>
                    </Link>
                    <Link to={PATH.PROJECTS} className={s.link}>
                        <div className={s.item}>Отзывы</div>
                    </Link>
                    <Link to={PATH.CONTACTS} className={s.link}>
                        <div className={s.item}>Контакты</div>
                    </Link>
                </div>
                <button className={s.buttonNumber}>
                    +375 29 270 36 43
                </button>
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
                    <div className={s.item}>О компании</div>
                </NavLink>
                <NavLink to={PATH.ABOUT_US} className={s.link} onClick={handleClose}>
                    <div className={s.item}>Услуги</div>
                </NavLink>
                <NavLink to={PATH.PROJECTS} className={s.link} onClick={handleClose}>
                    <div className={s.item}>Отзывы</div>
                </NavLink>
                <NavLink to={PATH.CONTACTS} className={s.link} onClick={handleClose}>
                    <div className={s.item}>Контакты</div>
                </NavLink>
            </aside>
        </nav>
    </>);
};

export default Navbar;