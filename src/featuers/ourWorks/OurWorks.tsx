import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import s from './ourWorks.module.css'
import {fetchImageUrl} from "./ourWorks.reducer";
import {Work} from "./work/Work";


export const OurWorks = () => {


    useEffect(() => {
        if (!works.length)
            dispatch(fetchImageUrl())
    }, [])
    const dispatch = useAppDispatch()
    const works = useAppSelector(state => state.ourWorks.works)
    const [goWork, setGoWorks] = useState(false)


    return (
        <div className={s.wrapper}>
            <div className={s.title}>Наши работы</div>

            {
                works.length &&
                works.map((work, index) => <Work key={index} prefix={work.prefix} url={work.url}/>)
            }
        </div>
    )
};

