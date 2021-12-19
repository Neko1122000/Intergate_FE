import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../css/Form.css';

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className="auth-form">
            <h3>Login</h3>
            <div className="form-group">
                <label>Username</label>
                <input type="username" className="form-control" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" />
                <label>Password</label>
                <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
            </div>
            <div className="form-control__submit2" >
                <button className="meo"
                    type="submit" style={{width:'100px',margin:'10px',border:'1px solid gray', borderRadius: '10px'}}>
                    <Link onClick={e => {
                        e.preventDefault();
                        props.doLogin(username, password, (accessToken) => {
                            props.setAccessToken(accessToken);
                            props.history.push('/');
                        });
                    }} style={{textDecoration:'none', color:'black'}} to="/home">Confirm</Link>
                </button>
                <button className="meo" type="submit" style={{width:'300px',border:'1px solid gray',borderRadius: '10px'}} >  
                        <Link style={{textDecoration:'none', color:'black'}} to="/sign-up"> Don't have an account? Sign up!</Link>
                </button>
            </div>
        </form>
    );
}

export default Login;