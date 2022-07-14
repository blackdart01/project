import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Header";
import logc from "../Css/login.module.css";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className={logc.login_container}>
        <div className={logc.login_form_container}>
          <div className={logc.left}>
            <form className={logc.form_container} onSubmit={handleSubmit}>
              <h1>Login to Your Account</h1>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className={logc.input}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={logc.input}
              />
              {error && <div className={logc.error_msg}>{error}</div>}
              <button type="submit" className={logc.green_btn}>
                Sign In
              </button>
            </form>
          </div>
          <div className={logc.right}>
            <h1>New Here ?</h1>
            <Link to="../profile/signup" target={"_self"}>
              <button type="button" className={logc.white_btn}>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
