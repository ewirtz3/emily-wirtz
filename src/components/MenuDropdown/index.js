import React from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function MenuDropdown() {
  return (
    <Dropdown
      text="new branch"
      icon="code branch"
      labeled
      button
      className="icon"
      closeOnChange
      wrapSelection
    >
      <Dropdown.Menu>
        <Dropdown.Item>
          <Link to={process.env.PUBLIC_URL + "/home"}>Home</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to={process.env.PUBLIC_URL + "/about"}>About</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to={process.env.PUBLIC_URL + "/portfolio"}>Portfolio</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
