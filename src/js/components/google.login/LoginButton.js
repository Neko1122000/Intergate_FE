import React from 'react';
import { useGoogleAuth } from './GoogleAuthProvider';

const LoginButton = () => {

    const { signIn } = useGoogleAuth();

    return (
        // <button onClick={signIn}>Login</button>
        <button className="btn btn-primary d-block w-100 btn-signin" id="sign-in-google"
                type="button"
                onClick={signIn}
        >Sign In with Google
        </button>
    );
};

export default LoginButton;