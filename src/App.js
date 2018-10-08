import React, { Component } from "react";
import "./app.scss";
import { WelcomePrompt } from "./core/components";
import { AuthForm, ShippingLabelMaker } from "./features/shipping-label-maker";
import { validateInput } from "../src/utils";
import { withAuth } from "../src/core/components/higher-order-comp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      started: false,
      username: "",
      password: "",
      isAuthenticated: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    this.setState({ started: true });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { username, password } = this.state;
    if (validateInput({ username, password })) {
      this.setState({ isAuthenticated: true });
    }
  }

  render() {
    let ProtectedLabelMaker = withAuth(this.state.isAuthenticated)(
      ShippingLabelMaker
    );
    return (
      <div className="app">
        <div className="container">
          {this.state.started ? null : (
            <WelcomePrompt handleClick={this.handleClick} />
          )}
          {this.state.started && !this.state.isAuthenticated ? (
            <AuthForm
              username={this.state.username}
              password={this.state.password}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          ) : null}
          <ProtectedLabelMaker />
        </div>
      </div>
    );
  }
}

export default App;
