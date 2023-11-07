import React from 'react';
import s from './App.module.css';
import Navbar from "./navbar/Navbar";
import {HomePage} from "./main/HomePage";



function App() {
    return (
        <div className={s.App}>
            <Navbar/>
            <div>
              <HomePage/>
            </div>
        </div>
    );
}

export default App;
