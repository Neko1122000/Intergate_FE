import React from 'react';
import GoogleLogin from 'react-google-login';

const LoginButton = () => {

    const responseSuccess = (res) => {
        console.log(res);
    };

    const responseFailure = (res) => {
        console.log(res);
    };

    return (
        // <button onClick={signIn}>Login</button>
        <GoogleLogin
        clientId="905434550263-fe4nhl3ec5u3r1tnkd77pq64053ddb6m.apps.googleusercontent.com"
        render={renderProps => (
            <button className="btn btn-primary d-block w-100 btn-signin" id="sign-in-google"
                    type="button"
                    onClick={renderProps.onClick}
            >Sign In with Google
            </button>
        )}
        buttonText="Login"
        scope="https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/gmail.readonly"
        onSuccess={responseSuccess}
        onFailure={responseFailure}
        cookiePolicy={'single_host_origin'}
      />
    );
};

export default LoginButton;