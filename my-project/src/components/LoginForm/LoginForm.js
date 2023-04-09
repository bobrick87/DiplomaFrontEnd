import React from "react";
import './LoginForm.css';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { Formik, Field, Form } from 'formik';

import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const navigate = useNavigate();
    const [isShown, setIsShown] = useState(false);
    const toggleEye = (event) => {
        event.preventDefault();
        if (!isShown) {
            setIsShown(true);
        } else {
            setIsShown(false);
        }
    }

      return (
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        onSubmit={values => {
              const url = `https://640c844094ce1239b0af21e9.mockapi.io/api/users?login=${values.login}&password=${values.password}`;
                fetch(url)
                  .then(response => response.json())
                  .then(user => {
                      console.log(user);
                      console.log(user[0].jwt)
                      if (user.length === 1)  {
                      localStorage.setItem("JWT" , user[0].jwt);
                      navigate('/');
                      } 
                  })
          }}
      >
        <Form>
          <Field id="login" name="login" placeholder="Password" className="loginInput" />

          <div >
            <Field id="password" name="password" placeholder="Password" type={isShown ? "text" : "password"} className="loginInput" />
            <i className="eye_icon" onClick={toggleEye}>
              {isShown ? <IoEye /> : <IoEyeOff />}
            </i>
          </div>
          
          <button type="submit" className="loginButton">Submit</button>
        </Form>
      </Formik>


      );
}

export default LoginForm;