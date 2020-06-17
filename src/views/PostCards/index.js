import React, { Component } from "react";
import { Card, CardBody, Button, Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { getUserPosts, sendDeleteRequest } from "../../actions/getUserListData";

class index extends Component {
  sendDeleteRequest = (id) => {
    this.props.sendDeleteRequest({ id: id });
  };

  handleDetailButton = (post) => {
    this.props.history.push(`/users/${post.userId}/${post.id}`);
  };
  render() {
    return (
      <>
        {this.props.userPosts.map((post) => {
          return (
            <Col key={post.id} sm="12" style={{ padding: "10px" }}>
              <Card>
                <CardBody>
                  <Row>
                    <Col>
                      <Button onClick={() => this.sendDeleteRequest(post.id)}>
                        Delete Button
                      </Button>
                    </Col>
                    <Col>
                      <span>{post.title}</span>
                    </Col>
                    <Col>
                      <Button
                        onClick={(post) => {
                          this.handleDetailButton(post.userId, post.id);
                        }}
                      >
                        Details
                      </Button>
                    </Col>
                  </Row>
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
    userPosts: state.AppReducer.userPosts,
  };
};

export default connect(mapStateToProps, {
  getUserPosts,
  sendDeleteRequest,
})(index);
