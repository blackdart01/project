import React from "react";
import DashboardSection from "../Home/DashboardSection";
import { Button, Collapse, Form, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
const ProfFields = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <div>
      <div className="d-flex" style={{ justifyContent: "center" }}>
        <DashboardSection />
        <div
          style={{
            width: "65.2%",
            marginTop: "75px",
            paddingLeft: "25px",
            borderLeft: "1px solid #dadada",
          }}
        >
          <Form>
            <Button
              onClick={() => setOpen1(!open1)}
              style={{ backgroundColor: "#3bb19b", width: "100%" }}
              aria-controls="personal-collapse-text"
              aria-expanded={open1}
            >
              Personal Information
            </Button>
            <Collapse
              in={open1}
              style={{
                marginTop: "25px",
                border: "1px solid #dadada",
                borderRadius: "5px",
                //   padding: "10px 15px",
              }}
            >
              <div id="personal-collapse-text">
                <Form style={{ padding: "25px" }}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <div
                      style={{
                        // justifyContent: "space-evenly",
                        // alignItems: "center",
                        display: "grid",
                        margin: "auto auto",
                        gridTemplateColumns: "1fr 1fr",
                      }}
                    >
                      <div
                        style={{
                          display: "block",
                          margin: "auto",
                          width: "90%",
                          marginBottom: "10px",
                        }}
                      >
                        <Form.Label>
                          <b>First Name*</b>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter First Name"
                        />
                      </div>
                      <div
                        style={{
                          display: "block",
                          margin: "auto",
                          width: "90%",
                          marginBottom: "10px",
                        }}
                      >
                        <Form.Label>
                          <b>Last Name*</b>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Last Name"
                        />
                      </div>
                      {/* <Form.Text className="text-muted"> */}
                      {/* We'll never share your email with anyone else. */}
                      <div
                        style={{
                          display: "block",
                          margin: "auto",
                          width: "90%",
                          marginBottom: "10px",
                        }}
                      >
                        <Form.Label>
                          <b>Email*</b>
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </div>
                      <div
                        style={{
                          display: "block",
                          margin: "auto",
                          width: "90%",
                          marginBottom: "10px",
                        }}
                      >
                        <Form.Label>
                          <b>Contact Number*</b>
                        </Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Enter Contact Number"
                        />
                      </div>
                      <div
                        style={{
                          display: "block",
                          margin: "auto",
                          width: "90%",
                          marginBottom: "10px",
                        }}
                      >
                        <Form.Label>
                          <b>DOB*</b>
                        </Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Enter Date Of Birth"
                        />
                      </div>
                      <div
                        style={{
                          display: "block",
                          margin: "auto",
                          width: "90%",
                          marginBottom: "10px",
                        }}
                      >
                        <Form.Label>
                          <b>Whatsapp Number*</b>
                        </Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Enter Whatsapp Number"
                        />
                      </div>
                      <div
                        style={{
                          display: "block",
                          margin: "auto",
                          width: "90%",
                          marginBottom: "10px",
                        }}
                      >
                        <Form.Label>
                          <b>Gender*</b>
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Select</option>
                          <option value="1">Male</option>
                          <option value="2">Female</option>
                          <option value="3">Transgender</option>
                          <option value="4">Bisexual</option>
                          <option value="5">Others</option>
                        </Form.Select>
                      </div>
                      <div
                        style={{
                          display: "block",
                          margin: "auto",
                          width: "90%",
                          marginBottom: "10px",
                        }}
                      >
                        <Form.Label>
                          <b>State*</b>
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Select</option>
                          <option value="1">Chhattisgarh</option>
                          <option value="2">Delhi</option>
                          <option value="3">MP</option>
                          <option value="3">Maharashtra</option>
                          <option value="3">Orissa</option>
                          <option value="3">Karnataka</option>
                          <option value="3">TN</option>
                          <option value="3">Rajasthan</option>
                          <option value="3">UP</option>
                        </Form.Select>
                      </div>
                      <div
                        style={{
                          display: "block",
                          margin: "auto",
                          width: "90%",
                          marginBottom: "10px",
                        }}
                      >
                        <Form.Label>
                          <b>District*</b>
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Select</option>
                          <option value="1">Raipur</option>
                          <option value="2">Arang</option>
                          <option value="3">Dhamtari</option>
                          <option value="3">Mahasamund</option>
                          <option value="3">Bhilai</option>
                          <option value="3">Bilaspur</option>
                          <option value="3">Korba</option>
                        </Form.Select>
                      </div>
                      <div
                        style={{
                          display: "block",
                          margin: "auto",
                          width: "90%",
                          marginBottom: "10px",
                        }}
                      >
                        <Form.Label>
                          <b>Religion*</b>
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>select</option>
                          <option value="1">Hindu</option>
                          <option value="2">Muslim</option>
                          <option value="3">Christian</option>
                          <option value="3">Sikh</option>
                          <option value="3">Buddhist</option>
                        </Form.Select>
                      </div>
                      <div
                        style={{
                          display: "block",
                          margin: "auto",
                          width: "90%",
                          marginBottom: "10px",
                        }}
                      >
                        <Form.Label>
                          <b>Category*</b>
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Select</option>
                          <option value="1">General</option>
                          <option value="2">OBC - NCL</option>
                          <option value="3">OBC - CL</option>
                          <option value="3">SC</option>
                          <option value="3">ST</option>
                          <option value="3">VJ-NT</option>
                          <option value="3">NTDNT</option>
                          <option value="3">Other Reservations</option>
                        </Form.Select>
                      </div>
                    </div>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicCheckbox"
                    style={{ display: "block", margin: "auto", width: "95%" }}
                  >
                    <Form.Check
                      type="checkbox"
                      label="Each Information above is true, if found invalid the account shall be immediatly blocked"
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ backgroundColor: "#3bb19b" }}
                  >
                    Save
                  </Button>
                </Form>
              </div>
            </Collapse>
            {/* ************************** */}
            <div
              style={{
                width: "100%",
                marginTop: "75px",
                //   paddingLeft: "25px",
                //   borderLeft: "1px solid #dadada",
              }}
            >
              <Button
                onClick={() => setOpen2(!open2)}
                style={{ backgroundColor: "#3bb19b", width: "100%" }}
                aria-controls="educational-collapse-text"
                aria-expanded={open2}
              >
                Educational Details
              </Button>
              <Collapse
                in={open2}
                style={{
                  marginTop: "25px",
                  border: "1px solid #dadada",
                  borderRadius: "5px",
                  padding: "10px 15px",
                }}
              >
                <div id="educational-collapse-text">
                  {/* ************************* */}
                  <Form
                    style={{
                      padding: "25px",
                    }}
                  >
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>
                          <b>Present Class/Degree*</b>
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Select</option>
                          <option value="1">BE/BTECH</option>
                          <option value="2">Bsc</option>
                          <option value="3">ME/MTECH</option>
                          <option value="4">Msc</option>
                          <option value="5">B.Ed</option>
                          <option value="6">B.Pharma</option>
                          <option value="7">BBA</option>
                          <option value="7">BCom</option>
                          <option value="7">BCS</option>
                          <option value="7">B.Arch</option>
                          <option value="7">LLB</option>
                          <option value="7">MBBS</option>
                          <option value="7">MD</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>
                          <b>Course/Subject/Stream*</b>
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Select</option>
                          <option value="1">BE/BTECH</option>
                          <option value="2">Bsc</option>
                          <option value="3">ME/MTECH</option>
                          <option value="4">Msc</option>
                          <option value="5">B.Ed</option>
                          <option value="6">B.Pharma</option>
                          <option value="7">BBA</option>
                          <option value="7">BCom</option>
                          <option value="7">BCS</option>
                          <option value="7">B.Arch</option>
                          <option value="7">LLB</option>
                          <option value="7">MBBS</option>
                          <option value="7">MD</option>
                        </Form.Select>
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>
                        <b>College/University Name*</b>
                      </Form.Label>
                      <Form.Control placeholder="IIT DELHI" />
                    </Form.Group>
                    <hr />
                    <b>Senior School Details</b>
                    <Form.Group className="mb-3" controlId="formGridAddress2">
                      <Form.Label>
                        <b>School Name*</b>
                      </Form.Label>
                      <Form.Control placeholder="DPS Raipur" />
                    </Form.Group>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>State</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          defaultValue="Choose..."
                        >
                          <option>Select</option>
                          <option value="1">Chhattisgarh</option>
                          <option value="2">Delhi</option>
                          <option value="3">MP</option>
                          <option value="3">Maharashtra</option>
                          <option value="3">Orissa</option>
                          <option value="3">Karnataka</option>
                          <option value="3">TN</option>
                          <option value="3">Rajasthan</option>
                          <option value="3">UP</option>
                        </Form.Select>

                        {/* <Form.Control /> */}
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>City</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Select</option>
                          <option value="1">Raipur</option>
                          <option value="2">Arang</option>
                          <option value="3">Dhamtari</option>
                          <option value="3">Mahasamund</option>
                          <option value="3">Bhilai</option>
                          <option value="3">Bilaspur</option>
                          <option value="3">Korba</option>
                        </Form.Select>
                      </Form.Group>

                      {/* <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group> */}
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    {/* **************** */}
                    <hr />
                    <b>Junior School Details</b>
                    <Form.Group className="mb-3" controlId="formGridAddress2">
                      <Form.Label>
                        <b>School Name*</b>
                      </Form.Label>
                      <Form.Control placeholder="DPS Raipur" />
                    </Form.Group>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridCity">
                        {/* <Form.Control /> */}
                        <Form.Label>State</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          defaultValue="Choose..."
                        >
                          <option>Select</option>
                          <option value="1">Chhattisgarh</option>
                          <option value="2">Delhi</option>
                          <option value="3">MP</option>
                          <option value="3">Maharashtra</option>
                          <option value="3">Orissa</option>
                          <option value="3">Karnataka</option>
                          <option value="3">TN</option>
                          <option value="3">Rajasthan</option>
                          <option value="3">UP</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>City</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Select</option>
                          <option value="1">Raipur</option>
                          <option value="2">Arang</option>
                          <option value="3">Dhamtari</option>
                          <option value="3">Mahasamund</option>
                          <option value="3">Bhilai</option>
                          <option value="3">Bilaspur</option>
                          <option value="3">Korba</option>
                        </Form.Select>
                      </Form.Group>

                      {/* <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group> */}
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button
                      variant="primary"
                      style={{ backgroundColor: "#3bb19b" }}
                      type="submit"
                    >
                      Save
                    </Button>
                  </Form>
                  {/* ********************* */}
                </div>
              </Collapse>
            </div>
            <Button
              variant="primary"
              style={{
                backgroundColor: "#3bb19b",
                display: "block",
                padding: "5px 50px",
                margin: "50px auto",
              }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProfFields;
