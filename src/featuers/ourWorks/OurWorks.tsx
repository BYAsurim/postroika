import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import s from './ourWorks.module.css'
import {fetchDescription, fetchPrefixFolder} from "./ourWorks.reducer";
import {Link} from "react-router-dom";
import {PATH} from "../../components/Pages/Pages";


export const OurWorks = () => {

    useEffect(() => {
        if (!Object.keys(works).length) {
            dispatch(fetchPrefixFolder())
        }
        if (!Object.keys(description).length) {
            dispatch(fetchDescription())
        }
    }, [])

    const dispatch = useAppDispatch()
    const works = useAppSelector(state => state.ourWorks.works)
    const description = useAppSelector(state => state.ourWorks.description)
    return (
        <section className={s.wrapper}>
            <div className={s.title}>Примеры работ</div>

            <div className={s.list}>
                {
                    Object.keys(works).map((key, index) => (
                        <Link key={index} to={`${PATH.PROJECTS}/${key}`} className={s.work}>

                            <img src={works[key][0]} alt={works[key][0]} className={s.image}/>
                            <div className={s.info}>{key}</div>
                            <span className={s.text}>
                               {description[key]}
                            </span>
                        </Link>
                    ))
                }
            </div>


        </section>
    )
};





