import React, { Component } from "react";
import { Wizard } from "../../core/components/wizard";
import { Label, NavBar } from "../../core/components";
import {
  // eslint-disable-next-line
  defaultWizardContext,
  // eslint-disable-next-line
  populatedWizardContext //for testing
} from "../../utils/variables";

// ShippingLabelMaker -> Wizard -> Each Step
export default class ShippingLabelMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wizardContext: defaultWizardContext, // for production
      // wizardContext: populatedWizardContext, // for tesing
      steps: [
        "Input Sender's Details",
        "Input Receiver's Details",
        "Input Package Weight",
        "Select Shipping Option",
        "Review Details For Confirmation"
      ],
      showWizard: true,
      labelCompleted: false
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
    // Present label when steps are done
    this.setState({ labelCompleted: true, showWizard: false });
  }

  updateContext(newContextDetails) {
    // Method to allow steps to setState on ShippingLabelMaker Component
    this.setState({ wizardContext: newContextDetails });
  }

  handleClick() {
    // Toggles between Label and Wizard button to see respective views
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
