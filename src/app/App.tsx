import React from 'react';
import s from './App.module.css';
import {Pages} from "../components/Pages/Pages";
import Layout from "../components/lauout/Layout";
import '../firebase';


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
