import React, { Component } from "react";
import { Wizard } from "../../core/components/wizard";
import { Label } from "../../core/components";
import {
  defaultWizardContext,
  populatedWizardContext //for testing
} from "../../utils/variables";

// Highest parent element
// ShippingLabelMaker -> Wizard -> Each Step
export default class ShippingLabelMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wizardContext: populatedWizardContext || defaultWizardContext,
      steps: [
        "Input Sender's Details",
        "Input Receiver's Details",
        "Input Package Weight",
        "Select Shipping Option",
        "Review Details For Confirmation"
      ],
      labelStarted: false,
      showWizard: false,
      showLabel: false,
      labelCompleted: false
    };
    this.onComplete = this.onComplete.bind(this);
    this.header = this.header.bind(this);
    this.updateContext = this.updateContext.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onComplete() {
    //Since step has reached the end, construct the wizardContext
    this.setState({ labelCompleted: true, showLabel: true, showWizard: false });
  }

  header(currentStep) {
    // Creates titles/header for current step
    return `Step ${currentStep + 1}: ${this.state.steps[currentStep]}`;
  }

  updateContext(newContextDetails) {
    // Method to allow steps to setState on ShippingLabelMaker Component
    this.setState({ wizardContext: newContextDetails });
  }

  handleClick(view) {
    // Handles views
    view === "wizard"
      ? this.setState({ showWizard: true, showLabel: false, started: true })
      : this.setState({ showWizard: false, showLabel: true });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron welcome">
          <h1 className="display-4">Welcome!</h1>
          <p className="lead">
            This is a simple Shipping Label Maker where you can plug in your
            shipping information and our Label Wizard will handle the rest.
          </p>
          <button
            className="btn btn-info"
            onClick={() => this.handleClick("wizard")}
          >
            {this.state.started ? "Wizard" : "Get Started"}
          </button>
          {this.state.labelCompleted ? (
            <button
              className="btn btn-info"
              onClick={() => this.handleClick("label")}
            >
              Completed Label
            </button>
          ) : null}
        </div>
        {this.state.showWizard ? (
          <Wizard
            className="container"
            header={this.header}
            steps={this.state.steps}
            wizardContext={this.state.wizardContext}
            onComplete={this.onComplete}
            updateContext={this.updateContext}
          />
        ) : null}
        {this.state.showLabel ? (
          <Label wizardContext={this.state.wizardContext} />
        ) : null}
      </div>
    );
  }
}
