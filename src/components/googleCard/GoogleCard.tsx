import React from 'react';
import s from './googleCard.module.css'

export const GoogleCard = () => {

    const width = window.innerWidth;

    return (
        <div className={s.googleCard}>
            {
                width <= 768
                    ?
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89453.94385093871!2d27.529875310369427!3d53.902035413465526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQuiwg0JzQuNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sby!4v1715114279096!5m2!1sru!2sby"
                        width="400" height="300" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    :
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106364.77877428671!2d27.535639233766123!3d53.907724881137874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQuiwg0JzQuNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sby!4v1715113662217!5m2!1sru!2sby"
                        width="700" height="450" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
            }
        </div>
    );
};

