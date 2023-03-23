import React from "react";
import './Login.css';
import LoginForm from "../../components/LoginForm/LoginForm";
import logo from "../../assets/logo.png"

const Login = () => {

    return (
        <div className="containerLogin">
            <div className="containerLogo">
                <img src={logo} className="loginLogo" alt="Rozetka logo"/>
            </div>
            <LoginForm />
        </div>
    )
}

export default Login;