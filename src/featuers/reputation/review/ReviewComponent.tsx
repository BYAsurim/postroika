import React from 'react';
import s from './ReviewComponent.module.css'

type ReviewComponentPropsType = {
    img: string
    name: string | null
    comment: string | null
}

export const ReviewComponent: React.FC<ReviewComponentPropsType> = ({
                                                                        img,
                                                                        name,
                                                                        comment
                                                                    }) => {


    return (
        <div className={s.wrapper}>
            <div className={s.imgName}>
                <img src={img} alt="icon"/>
                <p className={s.name}>{name}</p>
            </div>
            <p className={s.comment}>{comment}</p>
        </div>
    );
};

