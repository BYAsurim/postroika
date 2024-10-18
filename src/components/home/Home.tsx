import React from 'react';
import {HomePage} from "../main/HomePage";
import {Reputation} from "../../featuers/reputation/Reputation";
import {OurServices} from "../OurServices/OurServices";

const Home = () => {
    return (
        <div>
            <HomePage/>
            <OurServices/>
            <Reputation/>
        </div>
    );
};

export default Home;