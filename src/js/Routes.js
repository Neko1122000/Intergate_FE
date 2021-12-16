import { Button } from "react-bootstrap";
import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import BasePage from "./BasePage";
//import { Logout, AuthPage } from "./modules/Auth";

const AuthPage = ({doLogin, doRegister, setAccessToken}) => (
    <div>
        <Button 
            variant="primary"
            onClick={() => {
                doLogin('zachtrong', '123456', (token) => {
                    setAccessToken(token);
                })
            }}
        >
            Login
        </Button>

        <Button 
            variant="primary"
            onClick={() => {
                doRegister('account_registration', '123456', (token) => {
                    setAccessToken(token);
                })
            }}
        >
            Register
        </Button>
    </div>
);

const Logout = () => (
    <div>
        Logout
    </div>
);

export function Routes({doLogin, doRegister, isAuthorized, setAccessToken}) {

  return (
    <Switch>
      {!isAuthorized ? (
        /*Render auth page when user at `/auth` and not authorized.*/
        <Route>
          <AuthPage doLogin={doLogin} doRegister={doRegister} setAccessToken={setAccessToken} />
        </Route>
      ) : (
        /*Otherwise redirect to root page (`/`)*/
        <Redirect from="/auth" to="/" />
      )}

      {/*<Route path="/error" component={ErrorsPage} />*/}
      <Route path="/logout" component={Logout} />

      {!isAuthorized ? (
        /*Redirect to `/auth` when user is not authorized*/
        <Redirect to="/auth/login" />
      ) : (
        <BasePage />
      )}
    </Switch>
  );
}
