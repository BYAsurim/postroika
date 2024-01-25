import React from 'react';
import s from './ReviewComponent.module.css'

type ReviewComponentPropsType = {
    img: string
    title: string
    comment: string
}

export const ReviewComponent: React.FC<ReviewComponentPropsType> = ({
                                                                        img,
                                                                        title,
                                                                        comment
                                                                    }) => {


    return (
        <div className={s.wrapper}>
            <img src={img} alt="icon" className={s.icon}/>
            <span>{title}</span>
            <span>{comment}</span>

        </div>
    );
};

