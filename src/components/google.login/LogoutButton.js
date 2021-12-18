import React, {useState} from 'react';
import { useGoogleLogout } from 'react-google-login';
//import { useNavigate } from "react-router-dom";

function LogoutButton(props) {
    const onLogoutSuccess = (res) => {
        alert('Loogged out Successfully');
    };
    const onFailure = () => {
        console.log('Handle failure success');
    };

    return (
        // <button onClick={signOut}>Logout</button>
        <div>
            <button className="btn btn-primary d-block w-30 btn-signin" id="sign-in-google"
                    type="button"
                    style={{position: 'fixed', top: 50, right: 20}}
                    onClick={() => {
                        localStorage.clear();
                        window.location.reload();
                    }}
            >Sign out
            </button>
        </div>
    );
};

export default LogoutButton;