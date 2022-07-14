import React from "react";
import { Card, ListGroup, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../Css/dashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserGraduate,
  faFile,
  faHeart,
  faAward,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
const DashboardSection = () => {
  const padding = {
    padding: "0 5px 0 0",
  };
  return (
    <div>
      <div className="d-flex" style={{ margin: "75px 0px" }}>
        <div>
          <Card
            style={{
              width: "16rem",
              //   border: "1px solid #dadada",
              borderRadius: "250px 250px 0 0",
              //   borderBottom: "1px solid red",
              marginRight: "25px",
              marginBottom: "50px",
              //   borderRadius: "250px",
            }}
          >
            <Card.Img
              variant="top"
              src="https://www.unsplash.it/150/150?gravity=center"
              style={{ borderRadius: "250px" }}
            />
            <Card.Body
              style={{
                textAlign: "center",
              }}
            >
              <Card.Title>Srijan Agrawal</Card.Title>
              <ProgressBar
                now={100}
                variant="success"
                style={{ backgroundColor: "#3bb19b" }}
                // className={styles.ProgressBar}
              />
              <Card.Text>100% Profile Complete</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          {/* <hr /> */}
          <Card style={{ width: "16rem", border: "1px solid #dadada" }}>
            <ListGroup variant="flush" style={{ cursor: "pointer" }}>
              {/* <Nav.Link as={Link} to="../prof" style={{ border: "none" }}> */}
              <ListGroup.Item as={Link} to="../prof" className={styles.hov}>
                <FontAwesomeIcon
                  icon={faUser}
                  style={padding}
                ></FontAwesomeIcon>
                My Profile
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="../matched" className={styles.hov}>
                <FontAwesomeIcon
                  style={padding}
                  icon={faFile}
                ></FontAwesomeIcon>{" "}
                Matched Scholarships
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="../applied" className={styles.hov}>
                <FontAwesomeIcon
                  style={padding}
                  icon={faFile}
                ></FontAwesomeIcon>{" "}
                Applied Scholarships
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="../awarded" className={styles.hov}>
                <FontAwesomeIcon
                  style={padding}
                  icon={faUserGraduate}
                ></FontAwesomeIcon>
                Awarded Scholarships
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="../fav" className={styles.hov}>
                <FontAwesomeIcon
                  style={padding}
                  icon={faHeart}
                ></FontAwesomeIcon>{" "}
                Favoriate Scholarships
              </ListGroup.Item>
              <ListGroup.Item
                as={Link}
                to="../achievements"
                className={styles.hov}
              >
                <FontAwesomeIcon
                  style={padding}
                  icon={faAward}
                ></FontAwesomeIcon>{" "}
                Awards and Achievements
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="../qna" className={styles.hov}>
                <FontAwesomeIcon
                  style={padding}
                  icon={faQuestion}
                ></FontAwesomeIcon>{" "}
                Questions and Answers
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
