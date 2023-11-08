import React from 'react';
import s from './Reputation.module.css'
import {ReviewComponent} from "./ReviewComponent";
import icon from '../images/icon.svg'

export const Reputation = () => {

    const content = [{
        id:1,
        img: icon,
        title: 'Best services',
        comment: 'Nullam senectus porttitor in eget. Eget rutrum leo interdum.'

    },
        {
            id:2,
            img: icon,
            title: 'Best Teams',
            comment: 'Cursus semper tellus volutpat aliquet lacus. .'

        },
        {
            id:3,
            img: icon,
            title: 'Best Designs',
            comment: 'Ultricies at ipsum nunc, tristique nam lectus.'

        }

    ]

    return (
        <div className={s.wrapper}>
            <h4 className={s.text}>Наши отзывы</h4>
            <div className={s.container}>
                {
                    content.map(el => {
                        return <ReviewComponent
                            key={el.id}
                            img={el.img}
                            title={el.title}
                            comment={el.comment}
                        />
                    })
                }


            </div>
        </div>
    );
};

