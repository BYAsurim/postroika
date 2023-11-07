import React from 'react';
import s from './HomePage.module.css'
import {Reputation} from "./Reputation";

export const HomePage = () => {
    return (
        <div className={s.backgroundImg}>
        <div className={s.text}>
            Мы лучшие в своем деле ! ! !
        </div>
            <Reputation/>
        </div>
    );
};

