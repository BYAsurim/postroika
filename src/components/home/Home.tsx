import React from 'react';
import {HomePage} from "../main/HomePage";
import {Reputation} from "../../featuers/reputation/Reputation";
import {Contacts} from "../contacts/Contacts";

const Home = () => {
    return (
        <div>
            <HomePage/>
            <Reputation/>
            <Contacts/>
        </div>
    );
};

export default Home;