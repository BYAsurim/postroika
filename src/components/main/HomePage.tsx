import React from 'react';
import s from './HomePage.module.css'


export const HomePage = () => {
    return (

        <div className={s.backgroundImg}>
            <div className={s.container}>
                <h1 className={s.h1}>
                    Профессиональная покраска и штукатурка стен в минске
                </h1>
                <h2 className={s.text}>
                    Услуги маляра,
                    покраска стен,
                    декоративная покраска стен,
                    нанесение жидких обоев,
                    покраска потолка и др.
                </h2>
            </div>
        </div>
    );
};

