import React from 'react';
import s from './AboutUs.module.css'
import checkMark from '../../images/checkMark.svg'
import {ContactsFooter} from "../contactsFooter/ContactsFooter";

export const AboutUs = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <div className={s.title}>О нас</div>
                <div>
                    Если вы ищите бригаду профессиональных мастеров, способных выполнить строительные и отделочные
                    работы любой сложности, то ваш поиск окончен. Специалисты компании ProPainting –
                    высококвалифицированные
                    профессионалы с огромным багажом знаний и несколькими сотнями реализованным проектов за плечами.
                    Наша компания представлена на рынке с 2005 года. За долгое время работы мы успели заслужить
                    репутацию
                    надежного подрядчика, которому можно доверять.
                    Мы – та компания, которую рекомендуют друзьям. Более половины наших клиентов обратились к нам по
                    рекомендации своих знакомых, соседей, родственников, которые остались довольны результатами нашего
                    труда.
                    Это очень ценно для нас. Спасибо за доверие. Мы работаем для вас.
                </div>
            </div>
            <div className={s.img}/>
            <div className={s.content}>
                <div className={s.title}>НАШИ ПРЕИМУЩЕСТВА</div>
                <div>
                    <img src={checkMark} alt="check" className={s.checkMark}/>
                    <span> Располагаем всем необходимым оборудованием и инструментом для качественного выполнения штукатурных работ любой сложности.</span>
                </div>
                <div>
                    <img src={checkMark} alt="check" className={s.checkMark}/>
                    <span>
                    Благодаря высокому качеству работ мы заслужили хорошую репутацию у заказчиков. К нашим услугам прибегают не только частные лица, но и строительные компании.
                </span>
                </div>
                <div>
                    <img src={checkMark} alt="check" className={s.checkMark}/>
                    <span>
                    Работаем оперативно, всегда соблюдаем установленные сроки выполнения работ.
                </span>
                </div>
                <div>
                    <img src={checkMark} alt="check" className={s.checkMark}/>
                    <span>
                    Разумные расценки на штукатурные работы. Итоговая цена утверждается по согласованию с клиентом предварительно и не изменяется в ходе проведения работ. Выполненные работы оплачиваются только после их сдачи заказчику.
                </span>
                </div>
                <div>
                    <img src={checkMark} alt="check" className={s.checkMark}/>
                    <span>
                    Бесплатно консультируем клиентов по вопросам выбора штукатурных составов, бесплатный выезд специалиста на объект для замеров и составления подробной сметы.
                </span>
                </div>

            </div>
            <ContactsFooter/>
        </div>
    );
};

