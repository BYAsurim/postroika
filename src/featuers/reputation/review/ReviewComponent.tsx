import React from 'react';
import s from './ReviewComponent.module.css'

type ReviewComponentPropsType = {
    img: string
    name: string
    comment: string
}

export const ReviewComponent: React.FC<ReviewComponentPropsType> = ({
                                                                        img,
                                                                        name,
                                                                        comment
                                                                    }) => {


    return (
        <div className={s.wrapper}>
            <div className={s.imgName}>
            <img src={img} alt="icon" className={s.icon}/>
            <div>{name}</div>
            </div>
            <div className={s.comment}>{comment}</div>

        </div>
    );
};

