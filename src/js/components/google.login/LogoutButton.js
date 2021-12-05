import React from 'react';
import { useGoogleAuth } from './GoogleAuthProvider';

const LogoutButton = () => {
    const { signOut } = useGoogleAuth();

    return (
        // <button onClick={signOut}>Logout</button>
        <button className="btn btn-primary d-block w-100 btn-signin" id="sign-in-google"
                type="button"
                onClick={signOut}
        >Log out
        </button>
    );
};

export default LogoutButton;