import React from "react";
import { Container, Segment, Icon } from "semantic-ui-react";
import "./NoMatch.css";
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <Container className="noMatch">
      <Segment raised textAlign="center" centered="true">
        <Icon name="angle double left" size="huge" color="yellow" />
        <Icon name="angle double left" size="huge" color="yellow" />
        <Icon name="angle double left" size="huge" color="yellow" />
        <Icon name="angle double left" size="huge" color="yellow" />

        <p as="h2" color="yellow" size="huge" className="oops">
          Oops! Let's get you back{" "}
          <Link to={process.env.PUBLIC_URL + "/home"}>home</Link>
        </p>
      </Segment>
    </Container>
  );
}
