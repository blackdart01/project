import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Scholarship() {
  const objFlex = {
    display: "flex",
    justifyContent: "center",
  };
  // const lineObj = {
  //   width: "1px",
  //   height: "50px",
  //   backgroundColor: "black",
  //   margin: "0 20px 0 -5px",
  // };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>SA's Ameer wala Scholarship</Card.Title>
          <hr style={{ height: "2px" }} />
          <div style={objFlex}>
            <div
              style={{
                width: "50%",
                borderRight: "1px solid",
                textAlign: "center",
              }}
            >
              <Card.Subtitle style={{ display: "block", margin: "0 auto" }}>
                Award
              </Card.Subtitle>
              <Card.Text>150 rs dega</Card.Text>
            </div>
            {/* <div style={lineObj}></div> */}
            <div
              style={{
                width: "50%",
                borderLeft: "1px solid",
                textAlign: "center",
              }}
            >
              <Card.Subtitle>Eligibility</Card.Subtitle>
              <Card.Text>Shadi ki umar honi chahiye</Card.Text>
            </div>
          </div>
          <br />
          <Button variant="primary">View Scholarship</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
}

export default Scholarship;
