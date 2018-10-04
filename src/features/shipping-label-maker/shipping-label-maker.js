import React, { Component } from "react";
import { Wizard } from "../../core/components/wizard";
import { Label } from "../../core/components";
import { NavBar } from "../shipping-label-maker";
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
      // showWizard: true,
      // labelCompleted: false
      showWizard: false,
      labelCompleted: true
    };
    this.onComplete = this.onComplete.bind(this);
    this.header = this.header.bind(this);
    this.updateContext = this.updateContext.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  header(currentStep) {
    // Creates titles/header for current step
    return `Step ${currentStep + 1}: ${this.state.steps[currentStep]}`;
  }

  onComplete() {
    //Since step has reached the end, construct the wizardContext
    this.setState({ labelCompleted: true, showWizard: false });
  }

  updateContext(newContextDetails) {
    // Method to allow steps to setState on ShippingLabelMaker Component
    this.setState({ wizardContext: newContextDetails });
  }

  handleClick() {
    this.setState({ showWizard: !this.state.showWizard });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar
          handleClick={this.handleClick}
          labelCompleted={this.state.labelCompleted}
          showWizard={this.state.showWizard}
        />
        {this.state.showWizard ? (
          <Wizard
            className="container"
            header={this.header}
            steps={this.state.steps}
            wizardContext={this.state.wizardContext}
            onComplete={this.onComplete}
            updateContext={this.updateContext}
          />
        ) : (
          <Label wizardContext={this.state.wizardContext} />
        )}
      </React.Fragment>
    );
  }
}
