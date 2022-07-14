import React from "react";
import Scholarship from "./Scholarship";
const MatchedScholarships = () => {
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
    <div style={{ obj }}>
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
    </div>
  );
};

export default MatchedScholarships;
