import React from "react";
import { Header, Grid, Icon } from "semantic-ui-react";
import "./Nav.css";
import MenuDropdown from "../MenuDropdown";

function Nav() {
  return (
    <Grid textAlign="center" id="nav">
      <Grid.Row columns={2} verticalAlign="bottom">
        <Grid.Column>
          <Header size="huge" id="emily">
            <Icon name="code" size="large" id="code" />
            emily wirtz
          </Header>
        </Grid.Column>
        <Grid.Column>
          <MenuDropdown />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Nav;
