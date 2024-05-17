import React, {useEffect} from 'react';
import {useAppDispatch} from "../../common/hooks/hooks";
import s from './ourWorks.module.css'
import {fetchImageUrl} from "./ourWorks.reducer";


export const OurWorks = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchImageUrl())
    })


    return (
        <div className={s.wrapper}>
            <div className={s.title}>Наши работы</div>
            <div>
                <img src={'url'} alt="img"/>

            </div>

        </div>

    );
};

