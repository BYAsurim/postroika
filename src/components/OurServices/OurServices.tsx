import React from 'react';
import s from './ourServices.module.css'

export const OurServices = () => {
    return (
        <div className={s.container}>
            <h3 className={s.title}>Наши услуги</h3>
            <div className={s.wrapper}>
                <div className={s.wrapperCard}>
                    <span className={s.number}>01</span>
                    <span className={s.subTitle}>Малярные работы и покраска стен</span>
                    <span className={s.text}>Профессиональная покраска стен и потолков с использованием высококачественных материалов. Мы предлагаем как стандартную, так и декоративную покраску, включая нанесение жидких обоев.</span>
                </div>
                <div className={s.wrapperCard}>
                    <span className={s.number}>02</span>
                    <span className={s.subTitle}>Штукатурка стен</span>
                    <span className={s.text}>Выполняем штукатурные работы любой сложности: от черновой штукатурки до декоративных покрытий. Гарантируем ровные и гладкие поверхности, которые прослужат долгие годы.</span>
                </div>
                <div className={s.wrapperCard}>
                    <span className={s.number}>03</span>
                    <span className={s.subTitle}>Декоративная покраска и жидкие обои</span>
                    <span className={s.text}>Создайте уникальный интерьер с помощью наших услуг по декоративной покраске. Мы также предлагаем жидкие обои, которые создают приятную текстуру и обеспечивают долговечность покрытия.</span>
                </div>
                <div className={s.wrapperCard}>
                    <span className={s.number}>04</span>
                    <span className={s.subTitle}>Покраска потолков</span>
                    <span className={s.text}>Наши мастера тщательно подготавливают поверхность, устраняют неровности. Мы учитываем все особенности помещения и применяем подходящие методы, будь то стандартная покраска или более сложные декоративные покрытия.</span>
                </div>
                <div className={s.wrapperCard}>
                    <span className={s.number}>05</span>
                    <span className={s.subTitle}>Комплексные ремонтные работы</span>
                    <span className={s.text}>Мы готовы взять на себя весь процесс ремонта: от подготовки стен до финальной покраски, чтобы вам не нужно было беспокоиться о мелочах.</span>
                </div>
            </div>
        </div>
    );
};

