import React from 'react';
import s from "../contacts/Contacts.module.css"
import phone from '../../images/phone-icon.svg'
import mail from '../../images/mail.svg'
import time from '../../images/time.svg'
import {GoogleCard} from "../googleCard/GoogleCard";

export const Contacts = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>Контакты</div>
            <div className={s.text}>
                По любым вопросам касательно проведения штукатурных работ, с предложениями о сотрудничестве Вы можете
                связаться с нами любым удобным способом:
            </div>
            <div className={s.container}>
                <div className={s.item}>
                    <img src={phone} alt="phone" className={s.svg}/>
                    <span className={s.name}>ТЕЛЕФОН</span>

                    <a href="tel:+84 1102 2703" className={s.information}>+84 1102 2703</a>
                </div>
                <div className={s.item}>
                    <img src={mail} alt="phone" className={s.svg}/>
                    <span className={s.name}>ПОЧТА</span>
                    <a href="mailto:Hello@Thebox.Com" className={s.information}>Hello@Thebox.Com</a>
                </div>
                <div className={s.item}>
                    <img src={time} alt="phone" className={s.svg}/>
                    <span className={s.name}>ВРЕМЯ РАБОТЫ</span>
                    <span>Без выходных с 10:00 до 21:00</span>
                </div>
            </div>
                <GoogleCard/>

        </div>
    );
}

