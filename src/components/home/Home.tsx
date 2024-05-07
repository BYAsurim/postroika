import React from 'react';
import {HomePage} from "../main/HomePage";
import {Reputation} from "../../featuers/reputation/Reputation";
import {ContactsFooter} from "../contactsFooter/ContactsFooter";

const Home = () => {
    return (
        <div>
            <HomePage/>
            <Reputation/>
            <ContactsFooter/>
        </div>
    );
};

export default Home;