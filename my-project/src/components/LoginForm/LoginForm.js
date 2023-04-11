import React from "react";
import './LoginForm.css';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { Formik, Field, Form } from 'formik';
import { API_URL } from '../../constants/constants';


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
              const url = `${API_URL}/users?login=${values.login}&password=${values.password}`;
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
          <Field id="login" name="login" placeholder="Login" className="loginInput" />

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