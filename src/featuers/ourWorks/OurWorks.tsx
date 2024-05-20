import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import s from './ourWorks.module.css'
import {fetchPrefixFolder} from "./ourWorks.reducer";
import {Work} from "./work/Work";
import {Route, Routes} from "react-router-dom";


export const OurWorks = () => {


    useEffect(() => {
            if (!Object.keys(works).length)
                dispatch(fetchPrefixFolder())
        }
        , [])
    const dispatch = useAppDispatch()
    const works = useAppSelector(state => state.ourWorks.works)


    return (
        <div className={s.wrapper}>
            <div className={s.title}>Наши работы</div>

            <Routes>
                {
                    Object.keys(works).map((key) => (
                        <Route path={'/'} element={<Work key={key} prefix={key} url={works[key]}/>}/>
                    ))
                }
            </Routes>

        </div>
    )
};

