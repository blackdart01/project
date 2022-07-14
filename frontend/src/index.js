import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./Components/Profile/Login";
import Signup from "./Components/Profile/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "./Components/Home/Dashboard";
import Contact from "./Components/Home/Contact";
import Prof from "./Components/Profile/Prof";
import Matched from "./Components/Profile/Matched";
import Applied from "./Components/Profile/Applied";
import Fav from "./Components/Profile/Fav";
import Achievements from "./Components/Profile/Achievements";
import Awarded from "./Components/Profile/Awarded";
import QnA from "./Components/Profile/QnA";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/profile/login" element={<Login />}></Route>
        <Route path="/profile/signup" element={<Signup />}></Route>
        <Route path="/prof" element={<Prof />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/prof" element={<Prof />}></Route>
        <Route path="/matched" element={<Matched />}></Route>
        <Route path="/achievements" element={<Achievements />}></Route>
        <Route path="/applied" element={<Applied />}></Route>
        <Route path="/fav" element={<Fav />}></Route>
        <Route path="/awarded" element={<Awarded />}></Route>
        <Route path="/qna" element={<QnA />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
