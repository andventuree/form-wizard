import React, { Component } from "react";
import "./app.scss";
import { WelcomePrompt } from "./core/components";
import { ShippingLabelMaker } from "./features/shipping-label-maker";

class App extends Component {
  constructor() {
    super();
    this.state = {
      started: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ started: true });
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          {this.state.started ? (
            <ShippingLabelMaker />
          ) : (
            <WelcomePrompt handleClick={this.handleClick} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
