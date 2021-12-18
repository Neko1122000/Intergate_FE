import React, {useState, Suspense, lazy} from "react";
import Tabs from "./home/Tabs"
import PrivateRouter from './google.login/PrivateRouter';
import PublicRouter from './google.login/PublicRouter';
import {AppRoutes} from './Routes';
import {BrowserRouter, Routes, Router} from 'react-router-dom';

const BasePage = () => {
    return (
        <div>
            <PublicRouter path="/" component={Tabs} />
            <PrivateRouter path="/" component={Tabs} />
        </div>
    )
}

export default BasePage;