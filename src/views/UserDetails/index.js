import React, { Component } from "react";
import {
  Col,
  Row,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import PostCards from "../PostCards";
import { connect } from "react-redux";
import {
  getUserData,
  getUserPosts,
  createUserPost,
} from "../../actions/getUserListData";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalBody: "",
      modalTitle: "",
    };
  }

  componentDidMount() {
    let userId = this.props.history.location.pathname.substring(6,)
    this.props.getUserData({ id: userId });
    this.props.getUserPosts({ id: userId });
  }
  componentDidUpdate() {
  }

  handletoggle = (event) => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onTexthandle1 = (event) => {
    this.setState({
      modalTitle: event.target.value,
    });
  };

  onTexthandle2 = (event) => {
    this.setState(
      {
        modalBody: event.target.value,
      }
    );
  };

  onSubmitHandler = (event) => {
    let body = {
      title: this.state.modalTitle,
      body: this.state.modalBody,
    };
    this.props.createUserPost(body);
    this.handletoggle();
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Link to="/">Back</Link>
            </Col>
            <Col>
              <span>{this.props.userData.name}</span>
            </Col>
            <Col>
              <Button onClick={this.handletoggle}>Add Button</Button>
            </Col>
          </Row>
          <br></br>
          <Row>
            <PostCards userPosts={this.props.userPosts} />
          </Row>
        </Container>
        <Modal isOpen={this.state.modal} toggle={this.handletoggle}>
          <ModalHeader toggle={this.handletoggle}>Add Post</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="modalTitle">Title</Label>
                <Input
                  type="text"
                  name="modalTitle"
                  id="modalTitle"
                  value={this.state.modalTitle}
                  onChange={this.onTexthandle1}
                />
              </FormGroup>
              <FormGroup>
                <Label for="modalBody">Body</Label>
                <Input
                  type="text"
                  name="modalBody"
                  id="modalBody"
                  value={this.state.modalBody}
                  onChange={this.onTexthandle2}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.handletoggle}>
              Cancel
            </Button>
            <Button color="primary" onClick={this.handletoggle}>
              Save
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.AppReducer.userData,
    userPosts: state.AppReducer.userPosts,
  };
};

export default connect(mapStateToProps, {
  getUserData,
  getUserPosts,
  createUserPost,
})(index);
