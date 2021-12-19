import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId = '905434550263-fe4nhl3ec5u3r1tnkd77pq64053ddb6m.apps.googleusercontent.com';

function LogoutButton(props){
    const onLogoutSuccess = (res) => {
        alert('Loogged out Successfully');
    };
    const onFailure = () => {
        console.log('Handle failure success');
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure
    });


    return (
        // <button onClick={signOut}>Logout</button>
        <button className="btn btn-primary d-block w-100 btn-signin" id="sign-in-google"
                type="button"
                onClick={signOut}
        >Sign out
        </button>
    );
};

export default LogoutButton;