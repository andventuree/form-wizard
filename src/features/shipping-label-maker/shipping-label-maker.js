import React, { Component } from "react";
import { Wizard } from "../../core/components/wizard";
import { defaultWizardContext } from "../../utils/variables";

export default class ShippingLabelMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wizardContext: defaultWizardContext,
      steps: [
        "Sender's Address",
        "Receiver's Address",
        "Package Weight",
        "Shipping Option",
        "Confirmation"
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
      <div>
        This is the ShippingLabelMaker component. Could put some routing here
        when we're adding Auth.
        <Wizard
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
