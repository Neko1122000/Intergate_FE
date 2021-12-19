import React from "react";
import {Link} from "react-router-dom";
import '../css/Form.css';
export default class SignUp extends React.Component {
    render() {
        return (
            <form className="auth-form signup-form">
                <h3>Register</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="username" className="form-control" placeholder="Enter username" />
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-control__submit" >
                    <button type="submit" style={{width:'100px',margin:'10px',border:'1px solid gray', borderRadius: '10px',color:'black'}}>
                        <Link style={{textDecoration:'none', color:'black'}} to="/home">Confirm</Link>
                    </button>
                    <button type="submit" style={{width:'250px',border:'1px solid gray',borderRadius: '10px'}} >  
                        <Link style={{textDecoration:'none', color:'black'}} to="/sign-in">Do have an account?Log in</Link>
                    </button>
                </div>
            </form>
        );
    }
}
