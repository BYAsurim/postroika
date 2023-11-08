import React from 'react';
import s from './HomePage.module.css'


export const HomePage = () => {
    return (
        <div className={s.backgroundImg}>
            <h2 className={s.h2}>
                Реализуем любые проекты под ваш заказ!
            </h2>
            <div className={s.text}>
                Услуги маляра,
                покраска стен,
                декоративная покраска стен,
                нанесение жидких обоев,
                покраска потолка и др.
            </div>
        </div>
    );
};

