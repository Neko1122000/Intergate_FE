import React from "react";
import "../../css/Login-Form-Clean.css"
import "../../bootstrap/css/bootstrap.min.css"

export default function FirstTab() {
    return (
        <div className="FirstTab">
            <section className="text-center bg-light features-icons">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3"/>
                            <section className="login-clean">
                                <form id="uet-auth-form">
                                    <h2 className="visually-hidden">Login Form</h2>
                                    <div className="illustration">
                                        <img src="uet-logo.png" alt={"UET Logo"}/>
                                    </div>
                                    <div className="mb-3">
                                        <input className="form-control" type="text"
                                             id="uet-username-1" name="username"
                                             placeholder="Username"/>
                                        </div>
                                    <div className="mb-3">
                                        <input className="form-control" type="password"
                                         id="uet-password-1" name="password"
                                         placeholder="Password"/>
                                    </div>
                                    <button className="btn btn-primary d-block w-100" type="submit">Sign In</button>
                                    <div className="mb-3"/>
                                </form>
                            </section>
                        </div>
                        <div className="col-lg-4">
                            <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3"/>
                            <section className="login-clean">
                                <form id="google-auth-form">
                                    <h2 className="visually-hidden">Login Form</h2>
                                    <div className="illustration">
                                        <img src="google.png" width="76" alt={"Chrome Logo"}/>
                                    </div>
                                    <div className="mb-3">
                                        <div id="g-signin2"
                                            className="justify-content-center align-items-center text-center"
                                            data-width="240" data-height="36" data-longtitle="true"/>
                                        <button className="btn btn-primary d-block w-100" id="sign-out-google"
                                                type="button">Sign Out
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <script src="/src/bootstrap/js/bootstrap.min.js"/>
            <script src="/src/js/authen_func/auth-google.js"/>
            <script src="/src/js/authen_func/z-auth.js"/>
            <script src="/src/js/authen_func/authConfig.js"/>
            <script src="/src/js/authen_func/graphConfig.js"/>
            <script src="/src/js/authen_func/authPopup.js"/>
            <script src="/src/js/authen_func/graph.js"/>
        </div>
    );
};
