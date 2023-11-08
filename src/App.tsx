import React from 'react';
import s from './App.module.css';
import Navbar from "./navbar/Navbar";
import {HomePage} from "./main/HomePage";
import {Reputation} from "./reputation/Reputation";
import {Contacts} from "./contacts/Contacts";


function App() {
    return (
        <div className={s.App}>
            <Navbar/>
            <HomePage/>
            <Reputation/>
            <Contacts/>
        </div>
    );
}

export default App;
