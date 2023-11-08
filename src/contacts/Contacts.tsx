import React from 'react';
import s from './Contacts.module.css'
import image from "../images/painter.jpg";
import instagram from '../images/instagram-icon.svg'
import telegram from '../images/telegram-icon.svg'
import vkontakte from '../images/vk-icon.svg'


export const Contacts = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <span className={s.text}><div className={s.colorText}> adress:</div> 6391 Elgin St. Celina, Delaware 10299</span>
                <span className={s.text}><div className={s.colorText}> Phone:</div> +84 1102 2703</span>
                <span className={s.text}><div className={s.colorText}>Email:</div> hello@thebox.com</span>

            </div>
            <div className={s.containerSocial}>
                <img src={image} alt={'img'} className={s.img}/>
                <span><div className={s.colorText}> Our social:</div></span>
                <div className={s.socialIcon}>
                    <img src={instagram} alt="img" className={s.img}/>
                    <img src={telegram} alt="img" className={s.img}/>
                    <img src={vkontakte} alt="img" className={s.img}/>
                </div>
            </div>
        </div>
    );
};

