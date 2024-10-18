import React from 'react';
import s from './HomePage.module.css'


export const HomePage = () => {
    return (

        <div className={s.backgroundImg}>
            <div className={s.container}>
                <h1 className={s.h1}>
                    Профессиональная покраска и штукатурка стен в Минске
                </h1>
                <h2 className={s.text}>
                    Наша компания предоставляет полный спектр услуг по покраске и штукатурке стен, а также других отделочных работ.
                </h2>
                <button className={s.button}>
                    Посмотреть услуги
                </button>
            </div>
        </div>
    );
};

