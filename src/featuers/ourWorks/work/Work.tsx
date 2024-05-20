import React, {FC} from 'react';

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
                    <img src={url} key={index} alt={`img ${url}`}/>
                ))}
            </div>

        </div>
    );
};

