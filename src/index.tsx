import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globalStyles.css';
import App from './app/App';
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <HashRouter>
        <App/>
    </HashRouter>
);


