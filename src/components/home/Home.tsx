import React from 'react';
import {HomePage} from "../main/HomePage";
import {Reputation} from "../../featuers/reputation/Reputation";

const Home = () => {
    return (
        <div>
            <HomePage/>
            <Reputation/>
        </div>
    );
};

export default Home;