import React from 'react';
import GoogleLogin from 'react-google-login';

/*
const GoogleAuthContext = React.createContext();

export const GoogleAuthProvider = ({ children }) => {

    const googleAuth = useGoogleLogin({
        // clientId: "950594419536-4pvhe5a9p1e4lq09h40s5p6j3ilr7h4u.apps.googleusercontent.com", 
        clientId: "905434550263-fe4nhl3ec5u3r1tnkd77pq64053ddb6m.apps.googleusercontent.com",
        accessType: "offline",
        scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/gmail.readonly",
        onSuccess: (res) => {
            console.log(res);
        }, 
        onFailure: (res) => {
            console.log(res);
        }
    });

    return (
        <GoogleAuthContext.Provider value={googleAuth} >
            {children}
        </GoogleAuthContext.Provider>
    )
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)
*/