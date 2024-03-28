import React, {useEffect, useState} from 'react';
import s from './Reputation.module.css'
import {ReviewComponent} from "./review/ReviewComponent";
import icon from '../../images/icon.svg'

import { fetchDataFromFirestore, setDataToFirestore} from "./stateReputation";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import {ReputationForm} from "../../components/reputationForm/ReputationForm";
import {commentsResponseType} from "./reputation.reduser";

export const Reputation = () => {
    useEffect(() => {
        fetchDataFromFirestore()
            .then(res => {

                setContent2(res)
                console.log(res)

            })
            .catch(rej => {
                console.log(rej)
            })

    }, []);


    const [content2, setContent2] = useState<commentsResponseType[]>([])
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [open, isOpen] = useState(false)

    const saveDataToFirestore = () => {
        setDataToFirestore(name, comment)
            .then(() => {
                setContent2([{name: name, comment: comment}, ...content2])
            })
        setName('')
        setComment('')
    }


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
                               items={content2?.map((el, index) => {
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
                {open && <ReputationForm isOpen={isOpen}/>}
            </aside>

            <div>
                <p>Save Data to Firebase Firestore</p>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                />
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={saveDataToFirestore}>Save to Firestore</button>

            </div>

        </div>
    );
};

