import React from 'react';
import s from './App.module.css';
import Navbar from "./components/navbar/Navbar";
import Pages from "./components/Pages/Pages";
import Layout from "./components/lauout/Layout";


function App() {
    return (
        <div className={s.App}>
            <Layout>
                <Pages/>
            </Layout>
        </div>
    );
}

export default App;
