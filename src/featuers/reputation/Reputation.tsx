import React, {useEffect, useState} from 'react';
import s from './Reputation.module.css'
import {ReviewComponent} from "./review/ReviewComponent";
import icon from '../../images/icon.svg'
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import {ReputationForm} from "../../components/reputationForm/ReputationForm";
import {fetchReputationData} from "./reputation.reduser";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";

export const Reputation = () => {

    const reputation = useAppSelector(state => state.comments.reputation)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchReputationData())
    }, []);

    const [open, isOpen] = useState(false)


    const responsive = {
        365: {items: 1},
        768: {items: 2},
        1024: {items: 3}
    }


    return (
        <div className={s.wrapper}>
            <h4 className={s.text}>Наши отзывы</h4>

            <div className={s.container}>
                <AliceCarousel mouseTracking
                               items={reputation?.map((el, index) => {
                                   return <ReviewComponent
                                       key={index}
                                       img={icon}
                                       name={el.name}
                                       comment={el.comment}
                                   />
                               })}
                               responsive={responsive}
                               controlsStrategy={'alternate'}
                               disableButtonsControls
                />
            </div>

            <button className={s.addReview} onClick={() => isOpen(!open)}>оставить отзыв</button>

            {open && <div className={s.bg} onClick={() => isOpen(!open)}></div>}
            <aside className={s.modal}>
                {open &&
                    <ReputationForm
                        isOpen={isOpen}
                    />
                }
            </aside>
        </div>
    );
};

