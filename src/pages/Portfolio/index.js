import React from "react";
import { Container, Segment, Header } from "semantic-ui-react";
import PortfolioCards from "../../components/PortfolioCards";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <Container id="portfolio-container">
      <Segment raised centered="true" id="portfolio-segment">
        <Container textAlign="center">
          <Header size="large">
            Check out my work, both solo and as part of a team
          </Header>
        </Container>
        <br />
        <PortfolioCards />
      </Segment>
    </Container>
  );
}
