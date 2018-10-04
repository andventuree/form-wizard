import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  AddressForm,
  WeightForm,
  ShipOptionForm,
  ConfirmSummary
} from "../../../features/shipping-label-maker";
import { ProgressBar } from "../../components";

export default class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0
    };
    this.onAction = this.onAction.bind(this);
  }

  onAction(action) {
    // The steps will instruct the wizard to move forward or backwards,
    // or end the wizard.
    let { currentStep } = this.state;
    if (action === "prev" && currentStep > 0) {
      this.setState({ currentStep: currentStep - 1 });
    } else if (action === "next" && currentStep < this.props.steps.length - 1) {
      this.setState({ currentStep: currentStep + 1 });
    } else if (action === "end" && currentStep === 4) {
      this.props.onComplete();
      this.setState({ currentStep: this.props.steps.length - 1 });
    }
  }

  render() {
    let { header, steps, wizardContext, updateContext } = this.props;
    let currentProgress = (this.state.currentStep / steps.length) * 100;
    return (
      <div className="container wizard">
        <div className="wizard--header">
          <i className="fas fa-magic wizard--header-icon" />
          <span className="wizard--header-text">Label Wizard</span>
        </div>
        <ProgressBar currentProgress={currentProgress} />
        {this.state.currentStep === 0 ? (
          <AddressForm
            wizardContext={wizardContext}
            onAction={this.onAction}
            addressee="sender"
            updateContext={updateContext}
            title={header(this.state.currentStep)}
            className="wizard--step wizard--step-01"
          />
        ) : null}
        {this.state.currentStep === 1 ? (
          <AddressForm
            wizardContext={wizardContext}
            onAction={this.onAction}
            addressee="receiver"
            updateContext={updateContext}
            title={header(this.state.currentStep)}
            className="wizard--step wizard--step-01"
          />
        ) : null}
        {this.state.currentStep === 2 ? (
          <WeightForm
            wizardContext={wizardContext}
            onAction={this.onAction}
            updateContext={updateContext}
            title={header(this.state.currentStep)}
            className="wizard--step wizard--step-2"
          />
        ) : null}
        {this.state.currentStep === 3 ? (
          <ShipOptionForm
            wizardContext={wizardContext}
            onAction={this.onAction}
            updateContext={updateContext}
            title={header(this.state.currentStep)}
            className="wizard--step wizard--step-3"
          />
        ) : null}
        {this.state.currentStep === 4 ? (
          <ConfirmSummary
            wizardContext={wizardContext}
            onAction={this.onAction}
            updateContext={updateContext}
            title={header(this.state.currentStep)}
            className="wizard--step wizard--step-4"
          />
        ) : null}
      </div>
    );
  }
}

Wizard.propTypes = {
  header: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
  updateContext: PropTypes.func.isRequired
};
