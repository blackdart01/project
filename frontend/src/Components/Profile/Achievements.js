import React from "react";
import Header from "../Header";
import DashboardSection from "../Home/DashboardSection";
import AchievementsDetail from "./AchievementsDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
const Achievements = () => {
  let appnd = () => {
    console.log("hello world");
  };
  return (
    <div>
      <Header />
      <div className="d-flex" style={{ justifyContent: "center" }}>
        <DashboardSection />
        <div>
          <AchievementsDetail />
          <Button
            variant="primary"
            type="button"
            style={{
              margin: "50px 0 0 20px",
              borderLeft: "1px solid #dadada",
              padding: "5px 10px",
              textAlign: "center",
              border: "none",
              backgroundColor: "#3bb19b",
            }}
            onClick={appnd}
          >
            + Add More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
