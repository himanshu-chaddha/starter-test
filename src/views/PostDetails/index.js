import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Link to="/">Back</Link>
            </Col>
            <Col>
              <span>UserName</span>
            </Col>
          </Row>
          <br></br>
          <Row>Post Data</Row>
        </Container>
      </div>
    );
  }
}
