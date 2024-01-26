import React, {useEffect, useState} from 'react';
import s from './Reputation.module.css'
import {ReviewComponent} from "./review/ReviewComponent";
import icon from '../../images/icon.svg'

import {commentsResponseType, fetchDataFromFirestore, setDataToFirestore} from "./stateReputation";

export const Reputation = () => {
    useEffect(() => {
        fetchDataFromFirestore()
            .then(res => {
                setContent2(res)
            })
            .catch(rej => {
                console.log(rej)
            })
    }, []);


    const [content2, setContent2] = useState<commentsResponseType[]>([])
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const saveDataToFirestore = () => {
        setDataToFirestore(name, comment)
            .then(() => {
                setContent2([{name: name, comment: comment}, ...content2])
            })
        setName('')
        setComment('')
    }

    return (
        <div className={s.wrapper}>
            <h4 className={s.text}>Наши отзывы</h4>
            <div className={s.container}>
                {
                    content2?.map((el, index) => {
                        return <ReviewComponent
                            key={index}
                            img={icon}
                            name={el.name}
                            comment={el.comment}
                        />
                    })
                }
            </div>
            <div>
                <h1>Save Data to Firebase Firestore</h1>
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

