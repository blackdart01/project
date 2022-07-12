import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./Components/Profile/Login";
import Signup from "./Components/Profile/Signup";
// import Log from "./Components/Profile/Log";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      {/* <Header /> */}
      {/* <Scholarships /> */}
      <Routes>
        <Route path="/" element={<App />}></Route>
        {/* <Route path="/profile" element={<ProfileMenu />}></Route> */}
        <Route path="/profile/login" element={<Login />}></Route>
        <Route path="/profile/signup" element={<Signup />}></Route>
        {/* <Route path="/profile/logout" element={<Log />}></Route> */}
      </Routes>
    </Router>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
