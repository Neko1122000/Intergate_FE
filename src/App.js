import React, {useState} from 'react';
import { BrowserRouter,Routes, Route,Link} from "react-router-dom";
import './css/App.css';
import {AppRoutes} from './components/Routes';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/home/Home';

const doLogin = (username, password, cb) => {
    // login
    fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/signin`, {
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
        if (!res.error) {
            cb(res.data.accessToken);
        } else {
            console.log('error');
        }
    });
};

const doRegister = (username, password, cb) => {
    // register
    fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/signup`, {
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

function App() {
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

        <BrowserRouter>
            <AppRoutes isAuthorized={isAuthorized} setAccessToken={setAccessToken} doLogin={doLogin} doRegister={doRegister}/>
        </BrowserRouter>

    </div>
  );

}
export default App;
