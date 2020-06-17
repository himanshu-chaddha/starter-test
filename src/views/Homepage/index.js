import React, { Component } from "react";
import {
  Container,
  Row,
} from "reactstrap";
import UserCards from "../UserCards"

export default class index extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <UserCards />
          </Row>
        </Container>
      </div>
    );
  }
}
