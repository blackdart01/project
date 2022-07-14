import React from "react";
import Header from "../Header";
import DashboardSection from "../Home/DashboardSection";
import QnaComponent from "./QnaComponent";

const QnA = () => {
  return (
    <div>
      <Header />
      <div className="d-flex" style={{ justifyContent: "center" }}>
        <DashboardSection />
        <QnaComponent />
      </div>
    </div>
  );
};

export default QnA;
