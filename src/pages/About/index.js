import React from "react";
import { Container, Header, Grid, Image, Segment } from "semantic-ui-react";
import "./About.css";
import AboutMeBlurb from "../../components/AboutMe";
import profilePic from "./profilePic.jpg";
import resume from "./EmilyWirtz_030121.pdf";

export default function About() {
  return (
    <Container>
      <Grid id="about-me" rows={2}>
        <Grid.Row>
          <Header size="large" id="about-header">
            About Me
          </Header>
        </Grid.Row>
        <Grid.Row>
          <Segment raised>
            <Image
              src={profilePic}
              size="medium"
              id="profile-pic"
              floated="left"
            />
            <AboutMeBlurb />
            <Header size="small">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                View my resume
              </a>
            </Header>
          </Segment>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
