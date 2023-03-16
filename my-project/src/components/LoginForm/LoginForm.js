import React from "react";
import './LoginForm.css';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { useFormik } from 'formik';


const LoginForm = () => {
    const [isShown, setIsShown] = useState(false);
    const eye = (event) => {
        event.preventDefault();
        if (!isShown) {
            setIsShown(true);
        } else {
            setIsShown(false);
        }
    }
    const formik = useFormik({
        initialValues: {
          login: '',
          password: '',
        },
        onSubmit: values => {
            console.log(values);
            const url = `https://640c844094ce1239b0af21e9.mockapi.io/api/users?login=${values.login}&password=${values.password}`;
            const user = fetch(url)
                .then(response => response.json())
                .then(user => {
                    console.log(user);
                    console.log(user[0].jwt)
                    localStorage.setItem("JWT" , user[0].jwt);
                })
        },
      });
      return (
        <form onSubmit={formik.handleSubmit} className='loginForm'>

          <input
            id="login"
            name="login"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.login}
            placeholder="User name"
            className="loginInput"
          />

        <div >
          <input
            id="password"
            name="password"
            type={isShown ? "text" : "password"}
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
            className="loginInput"
          />
          <i onClick={eye}>
            {isShown ? <IoEye /> : <IoEyeOff />}
          </i>
        </div>

          <button type="submit" className="loginButton">Login</button>
        </form>
      );
}

export default LoginForm;