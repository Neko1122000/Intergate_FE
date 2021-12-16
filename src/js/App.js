import '../css/App.css';
import React, { useState } from 'react';
import Tabs from "./components/Tabs"
import PrivateRouter from './components/google.login/PrivateRouter';
import PublicRouter from './components/google.login/PublicRouter';
import {BrowserRouter, Switch, Router} from 'react-router-dom';
import BasePage from './BasePage';
import { Routes } from './Routes';
// import PrivatePage from './components/google.login/PrivatePage'
// import PublicPage from './components/google.login/PublicPage'

const doLogin = (username, password, cb) => {
    // login
    fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password 
        })
    })
    .then(res => res.json())
    .then(res => {
        cb(res.data.accessToken);
    });
};

const doRegister = (username, password, cb) => {
    // register
    fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password 
        })
    })
    .then(res => res.json())
    .then(res => {
        cb(res.data.accessToken);
    });
};

export default function App() {
    const [isAuthorized, setAuthorized] = useState(!!localStorage.getItem('accessToken'), false);
    const setAccessToken = (accessToken) => {
        console.log(accessToken);
        localStorage.setItem('accessToken', accessToken);
        setAuthorized(true);
    }

    return (
        <div className="App" style={{display: "block"}}>
            <div className="welcome">Hệ thống đồng bộ lịch biểu
            <br/>
                Nhóm 2 - K63T - Tích hợp hệ thống
            </div>

            {/*<Tabs />*/}

            <BrowserRouter>
                <Routes isAuthorized={isAuthorized} setAccessToken={setAccessToken} doLogin={doLogin} doRegister={doRegister}/>
            </BrowserRouter>

            {/*
            <BrowserRouter>
                <div>
                    <PublicRouter  path="/" component={Tabs} />
                    <PrivateRouter path="/" component={Tabs} />
                </div>
            </BrowserRouter>
            */}
        </div>
    );
}

