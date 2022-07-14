import React from "react";
import Scholarship from "./Scholarship";
// import { useState } from "react";
// import { faLineChart } from "@fortawesome/free-solid-svg-icons";
// import MatchedScholarships from "./MatchedScholarships";
const DashboardScholarships = (props) => {
  const obj = {
    margin: "0 20px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    marginLeft: "auto",
    marginRight: "auto",
    justifyItems: "center",
    gap: "50px",
    paddingLeft: "25px",
    justifyContent: "space-between",
    borderLeft: "1px solid #dadada",
  };
  return (
    <div>
      <h2
        style={{
          borderLeft: "1px solid #dadada",
          margin: "75px 0 15px 0px",
          paddingLeft: "25px",
        }}
      >
        {props.txt} Scholarships
      </h2>
      <div style={obj}>
        <Scholarship />
        <Scholarship />
        <Scholarship />
        <Scholarship />
        <Scholarship />
        <Scholarship />
        <Scholarship />
        <Scholarship />
        <Scholarship />
        <Scholarship />
        <Scholarship />
        <Scholarship />
        <Scholarship />
        {/* <MatchedScholarships /> */}
      </div>
    </div>
  );
};

export default DashboardScholarships;
