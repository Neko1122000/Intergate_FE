import React, {useState} from "react";
import {Link} from "react-router-dom";
import '../css/Form.css';

const SignUp = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className="auth-form signup-form">
            <h3>Sign Up</h3>
            <div className="form-group">
                <label>Username</label>
                <input type="username" value={username} onChange={e => setUsername(e.target.value)} className="form-control" placeholder="Enter username" />
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Enter password" />
            </div>
            <div className="form-control__submit" >
                <button className="meo" type="submit" style={{width:'100px',margin:'10px',border:'1px solid gray', borderRadius: '10px',color:'black'}}>
                    <Link onClick={e => {
                        e.preventDefault();
                        props.doRegister(username, password, (accessToken) => {
                            props.setAccessToken(accessToken);
                            props.history.push('/');
                        });
                    }} style={{textDecoration:'none', color:'black'}} to="/home">Confirm</Link>
                </button>
                <button className="meo" type="submit" style={{width:'250px',border:'1px solid gray',borderRadius: '10px'}} >  
                    <Link style={{textDecoration:'none', color:'black'}} to="/sign-in">Do have an account?Log in</Link>
                </button>
            </div>
        </form>
    );
}

export default SignUp;