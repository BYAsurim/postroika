import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globalStyles.css';
import App from './app/App';
import {HashRouter} from "react-router-dom";
import {store} from "./app/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
    <HashRouter>
        <App/>
    </HashRouter>
    </Provider>
);


