import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./views/Homepage";
import UserDetails from "./views/UserDetails";
import PostDetails from "./views/PostDetails";
export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/user/:id" component={UserDetails} props={this.props}/>
        <Route exact path="/user/:id/:id" component={PostDetails} />
        <Redirect to="/" />
      </Switch>
    );
  }
}
