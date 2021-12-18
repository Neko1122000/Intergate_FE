import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { useGoogleAuth } from "./GoogleAuthProvider";

const PublicRouter = ({component: Component, ...rest}) => {

    //const { isSignedIn } = useGoogleAuth();
    const isSignedIn = false;

    return (
        <div>
            <Route {...rest} render={props => (
                !isSignedIn ?
                    <Component {...props} /> :
                    <Redirect exact to="/" />
            )} />
        </div>
    );
};

export default PublicRouter;