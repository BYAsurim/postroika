import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../home/Home";
import {AboutUs} from "../aboutUs/AboutUs";
import {Projects} from "../projects/Projects";
import {Contacts} from "../contacts/Contacts";


export const PATH ={
    HOME:'/',
    ABOUT_US: '/about',
    PROJECTS: '/projects',
    CONTACTS: '/contact',
} as const


export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={PATH.HOME} element={<Home/>}/>
                <Route path={PATH.ABOUT_US} element={<AboutUs/>}/>
                <Route path={PATH.PROJECTS} element={<Projects/>}/>
                <Route path={PATH.CONTACTS} element={<Contacts/>}/>
                <Route path='/404' element={<h1>404: PAGE NOT FOUND</h1>}/>
                <Route path='*' element={<Navigate to={'/404'}/>}/>
            </Routes>
        </div>
    );
};

