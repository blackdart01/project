import React from "react";
import Header from "../Header";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardScholarships from "./DashboardScholarships";
import DashboardSection from "./DashboardSection";
const Dashboard = (props) => {
  return (
    <div>
      <Header />
      <div className="d-flex" style={{ justifyContent: "center" }}>
        <DashboardSection />
        <DashboardScholarships txt={props.txt} />
      </div>
    </div>
  );
};

export default Dashboard;
