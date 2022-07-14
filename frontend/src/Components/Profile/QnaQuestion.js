import React from "react";
import { Button, Collapse } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const QnaQuestion = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: "1em" }}>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="text-1"
        aria-expanded={open}
        style={{
          display: "flex",
          backgroundColor: "#3bb19b",
          width: "100%",
          textAlign: "center",
        }}
      >
        {props.obj.ques}
      </Button>
      <Collapse in={open}>
        <div id="text-1">{props.obj.ans}</div>
      </Collapse>
    </div>
  );
};

export default QnaQuestion;
