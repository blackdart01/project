import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
const AchievementsDetail = () => {
  return (
    <div style={{ width: "100%" }}>
      <Form
        style={{
          marginTop: "75px",
          borderLeft: "1px solid #dadada",
          paddingLeft: "20px",
        }}
      >
        <h3>Awards and Achievements</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Title*</b>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter Title" required />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            <b>Description*</b>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter Description" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="By clicking on the checkbox you confirm that the details entered are authentic as per your knowledge"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ border: "none", backgroundColor: "#3bb19b" }}
        >
          save
        </Button>
      </Form>
    </div>
  );
};

export default AchievementsDetail;
