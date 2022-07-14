import React from "react";
import profile from "../images/user-solid.png";
import search from "../images/search.png";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   solid,
//   regular,
//   brands,
// } from "@fortawesome/fontawesome-svg-core/import.macro";
// import { faUser } from "@fortawesome/free-regular-svg-icons";

function Header(props) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            ScholarBuddy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="../" className="active">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="../contact" className={props.cName}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="../prof" className={props.cName}>
                Dashboard
              </Nav.Link>

              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">
                  <img
                    src={search}
                    alt=""
                    width="20px"
                    height="20px"
                    // style={obj}
                  />
                </Button>
              </Form>
              {/* <Nav.Link href="profile">
                <img
                  src={profile}
                  alt=""
                  width="20px"
                  height="20px"
                  className="md"
                  onClick={<ProfileMenu />}
                />
              </Nav.Link> */}
              <NavDropdown
                title={
                  <span>
                    <img src={profile} alt="" width="20px" height="20px" />
                  </span>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="../profile/login"
                  target="_self"
                >
                  Log In
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="../profile/signup"
                  target="_self"
                >
                  Sign Up
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item
                  as={Link}
                  to="../profile/logout"
                  target="_blank"
                >
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
