import React, {Suspense, lazy} from "react";
import Tabs from "./components/Tabs"
import PrivateRouter from './components/google.login/PrivateRouter';
import PublicRouter from './components/google.login/PublicRouter';
import {BrowserRouter, Switch, Router} from 'react-router-dom';

class BasePage extends React.Component {
    render() {
        return (
            <div>
                <PublicRouter  path="/" component={Tabs} />
                {/*<PrivateRouter path="/private" component={PrivatePage} />*/}
                <PrivateRouter path="/" component={Tabs} />
            </div>
        )
    }
}

export default BasePage;