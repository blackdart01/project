import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import logs from "../Css/signup.module.css";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
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
      <div className={logs.signup_container}>
        <div className={logs.signup_form_container}>
          <div className={logs.left}>
            <h1>Welcome Back</h1>
            <Link to="../profile/login" target={"_self"}>
              <button type="button" className={logs.white_btn}>
                Sign in
              </button>
            </Link>
          </div>
          <div className={logs.right}>
            <form className={logs.form_container} onSubmit={handleSubmit}>
              <h1>Create Account</h1>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                required
                className={logs.input}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
                required
                className={logs.input}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className={logs.input}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={logs.input}
              />
              {error && <div className={logs.error_msg}>{error}</div>}
              <button type="submit" className={logs.green_btn}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
