import React from "react";
import Scholarship from "./Scholarship";

function Scholarships() {
  const obj = {
    margin: "75px 50px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    justifyItems: "center",
    gap: "50px 0px",
  };
  return (
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
    </div>
  );
}

export default Scholarships;
