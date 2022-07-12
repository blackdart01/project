import React from "react";
import { NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ProfileMenu(props) {
  return (
    <div>
      {/* <ul>
        <li>LogIn</li>
        <li>SignUp</li>
        <li>LogOut</li>
      </ul> */}
      <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="login">Log In</NavDropdown.Item>
        <NavDropdown.Item href="signup">Sign Up</NavDropdown.Item>
        {/* <NavDropdown.Divider /> */}
        <NavDropdown.Item href="logout">Log Out</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

export default ProfileMenu;
