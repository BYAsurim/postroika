import React from 'react';
import s from './Contacts.module.css'
import logo from "../../images/logo.svg";
import instagram from '../../images/instagram-icon.svg'
import telegram from '../../images/telegram-icon.svg'
import vkontakte from '../../images/vk-icon.svg'


export const Contacts = () => {

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <span className={s.text}><div className={s.colorText}> Наш адрес:</div> 6391 Elgin St. Celina, Delaware 10299</span>
                <span className={s.text}><div className={s.colorText}> Телефон:</div> +84 1102 2703</span>
                <span className={s.text}><div className={s.colorText}>Email:</div> hello@thebox.com</span>

            </div>
            <div className={s.containerSocial}>
                <img src={logo} alt={'img'} className={s.logo}/>
                <span><div className={s.colorText}> Наши социальные сети:</div></span>
                <div className={s.socialIcon}>
                    <a href={"https://www.instagram.com/maliarni_raboti?igsh=MXQ4bzYxN3B0MWt4aw=="} target="_blank"
                       rel="noopener noreferrer">
                        <img src={instagram} alt="img" className={s.img}/>
                    </a>
                    <a href={'http://t.me/+375298665173'} target="_blank">
                        <img src={telegram} alt="img" className={s.img}/>
                    </a>
                    <a href={'https://vk.com/id331033132'}>
                        <img src={vkontakte} alt="img" className={s.img}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

