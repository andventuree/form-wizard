import React, { Component } from "react";
import { Wizard } from "../../core/components/wizard";
import {
  defaultWizardContext,
  popluatedWizardContext //for testing
} from "../../utils/variables";

export default class ShippingLabelMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wizardContext: popluatedWizardContext || defaultWizardContext,
      steps: [
        "Input Sender's Details",
        "Input Receiver's Details",
        "Input Package Weight",
        "Select Shipping Option",
        "Review Details For Confirmation"
      ]
    };
    this.onComplete = this.onComplete.bind(this);
    this.header = this.header.bind(this);
    this.updateContext = this.updateContext.bind(this);
  }

  onComplete() {
    //Since step has reached the end, construct the wizardContext
    let wizardContext = {
      from: {
        name: this.state.from.name,
        street: this.state.from.street,
        city: this.state.from.city,
        state: this.state.from.state,
        zip: this.state.from.zip
      },
      to: {
        name: this.state.to.name,
        street: this.state.to.street,
        city: this.state.to.city,
        state: this.state.to.state,
        zip: this.state.to.zip
      },
      weight: this.state.weight,
      shippingOption: this.state.shippingOption
    };
    this.setState({ wizardContext });
  }

  header() {
    return "header method";
  }

  updateContext(newContextDetails) {
    this.setState({ wizardContext: newContextDetails });
  }

  render() {
    console.log("this.state.wizardContext: ", this.state.wizardContext);
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Welcome!</h1>
          <p className="lead">
            This is a simple Shipping Label Maker where you can plug in your
            shipping information and our Label Wizard will handle the rest.
          </p>
        </div>
        <Wizard
          className="container"
          header={this.header}
          steps={this.state.steps}
          wizardContext={this.state.wizardContext}
          onComplete={this.onComplete}
          updateContext={this.updateContext}
        />
      </div>
    );
  }
}

// <hr className="my-4" />
// <a className="btn btn-primary btn-lg" href="#" role="button">
//   Get Started
// </a>
// <a className="btn btn-primary btn-lg" href="#" role="button">
//   See Completed Label
// </a>
