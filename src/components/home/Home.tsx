import React from 'react';
import Navbar from "../navbar/Navbar";
import {HomePage} from "../main/HomePage";
import {Reputation} from "../reputation/Reputation";
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