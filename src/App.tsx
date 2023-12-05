import React from 'react';
import s from './App.module.css';
import Home from "./home/Home";
import {Navigate, Route, Routes} from "react-router-dom";
import {Contacts} from "./contacts/Contacts";
import {Projects} from "./projects/Projects";
import {AboutUs} from "./aboutUs/AboutUs";


function App() {
    return (
        <div className={s.App}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<AboutUs/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<Contacts/>}/>
                <Route path='/404' element={<h1>404: PAGE NOT FOUND</h1>}/>
                <Route path='*' element={<Navigate to={'/404'}/>}/>
            </Routes>
        </div>
    );
}

export default App;
