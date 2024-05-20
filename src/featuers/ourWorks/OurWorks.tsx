import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import s from './ourWorks.module.css'
import {fetchPrefixFolder} from "./ourWorks.reducer";
import {Link} from "react-router-dom";
import {PATH} from "../../components/Pages/Pages";


export const OurWorks = () => {


    useEffect(() => {
            if (!Object.keys(works).length)
                dispatch(fetchPrefixFolder())
        }
        , [])
    const dispatch = useAppDispatch()
    const works = useAppSelector(state => state.ourWorks.works)
    console.log(works)

    return (
        <section className={s.wrapper}>
            <div className={s.title}>Наши работы</div>

            <div className={s.list}>
                {
                    Object.keys(works).map((key, index) => (
                        <Link key={index} to={`${PATH.PROJECTS}/${key}`} className={s.work}>
                            <div className={s.image}
                                 style={{backgroundImage:`url(${works[key][0]})`}}/>
                            <div className={s.info}>{key}</div>
                        </Link>
                    ))
                }
            </div>


        </section>
    )
};

