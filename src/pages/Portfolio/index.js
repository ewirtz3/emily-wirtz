import React from "react";
import { Container, Segment, Header } from "semantic-ui-react";
import PortfolioCards from "../../components/PortfolioCards";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <Container id="portfolio-container">
      <Segment raised centered="true" id="portfolio-segment">
        <Header size="large" id="portfolio-header">
          Portfolio
        </Header>
        <Header sub>Check out my work, both solo and as part of a team</Header>
        <PortfolioCards />
      </Segment>
    </Container>
  );
}
