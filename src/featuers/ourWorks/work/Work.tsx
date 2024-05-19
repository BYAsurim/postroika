import React, {FC} from 'react';

type WorkProps = {
    prefix:string | null
    url: string[];
}

export const Work:FC<WorkProps> = ({prefix,url}) => {



    return (
        <div>
            {url.length ? <div>{prefix}</div> : <div></div>}
            <div>
                {url.map((el, index) => (
                    <img key={index} src={el} alt={`image ${el}`}/>
                ))
                }
            </div>
        </div>
    );
};

