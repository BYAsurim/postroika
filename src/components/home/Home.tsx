import React from 'react';
import {HomePage} from "../main/HomePage";
import {Reputation} from "../../featuers/reputation/Reputation";
import {OurServices} from "../OurServices/OurServices";
import {AboutUs} from "../aboutUs/AboutUs";
import {OurWorks} from "../../featuers/ourWorks/OurWorks";

const Home = () => {
    return (
        <div>
            <HomePage/>
            <AboutUs/>
            <OurServices/>
            <OurWorks/>
            {/*<Reputation/>*/}
        </div>
    );
};

export default Home;