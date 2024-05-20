import React, {FC} from 'react';
import s from './work.module.css'

type WorkProps = {
    prefix: string
    url: string[];
}

export const Work: FC<WorkProps> = ({prefix, url}) => {


    return (
        <div>

            <div>
                <div>{prefix}</div>

                {url.map((url, index) => (
                    <div className={s.imgContainer} key={index}>
                    <img src={url} key={index} alt={`img ${url}`} className={s.img}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

