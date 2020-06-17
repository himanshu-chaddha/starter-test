import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUserList } from "../../actions/getUserListData";

class index extends Component {
  componentDidMount() {
    this.props.getUserList();
  }
  render() {
    return (
      <>
        {this.props.userList.map((user) => {
          let linkTo = `/user/${user.id}`;
          return (
            <Col key={user.id} sm="3" style={{ padding: "10px" }}>
              <Card>
                <CardBody>
                  <CardTitle>{user.name}</CardTitle>
                  <CardSubtitle>{user.email}</CardSubtitle>
                  <CardSubtitle>{user.phone}</CardSubtitle>
                  <CardSubtitle>{user.website}</CardSubtitle>
                  <br></br>
                  <CardSubtitle>{user.company.name}</CardSubtitle>
                  <CardSubtitle>{user.company.catchPhrase}</CardSubtitle>
                  <Link to={linkTo}>Details</Link>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.AppReducer.userList,
  };
};

export default connect(mapStateToProps, {
  getUserList,
})(index);
