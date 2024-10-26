import React from 'react';
import s from './AboutUs.module.css'
import worker from '../../images/worker.png'

export const AboutUs = () => {
    return (
        <div className={s.wrapper}>
            <h3 className={s.title}>О компании</h3>
            <div className={s.contentWrapper}>
                <img src={worker} alt="worker" className={s.img}/>
                <div className={s.wrapperText}>
                    <div className={s.subTitle}>Наша команда состоит из квалифицированных мастеров, которые подходят к
                        каждому проекту с
                        вниманием к деталям, обеспечивая высокое качество и соблюдение сроков.
                    </div>
                    <div className={s.text}>
                        С 2005 года мы занимаемся выполнением строительных проектов любой сложности, и за это время
                        завоевали доверие сотен клиентов. Более половины наших клиентов приходят к нам по рекомендациям
                        – это говорит о нашем профессионализме и надежности. Мы делаем всё возможное, чтобы вы остались
                        довольны результатом.
                    </div>
                    <button className={s.button}>Свяжитесь с нами сейчас</button>
                </div>
            </div>
        </div>
    );
};

