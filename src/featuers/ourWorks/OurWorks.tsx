import React, {useEffect} from 'react';
import {fetchImageName} from "./ourWorks.reducer";
import {useAppDispatch} from "../../common/hooks/hooks";

export const OurWorks = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        // fetchImage().then(res => {
        //     // res && setUrl(res)
        // })
        dispatch(fetchImageName())
    })
    return (
        <div>
            <img src={'url'} alt="img"/>

        </div>

    );
};

