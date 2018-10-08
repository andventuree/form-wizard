import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  AddressForm,
  WeightForm,
  ShipOptionForm,
  ConfirmSummary
} from "../../../features/shipping-label-maker";
import { ProgressBar } from "../../components";

// The heart of the app is a “Wizard” component whose primary responsibility
// is to receive a series of steps from its parent and sequencing through them.
export default class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0
    };
    this.onAction = this.onAction.bind(this);
  }

  onAction(action) {
    // The step components will instruct the wizard to move
    // forward or backwards, or end the wizard.
    let { currentStep } = this.state;
    let lastStep = this.props.steps.length - 1;
    if (action === "prev" && currentStep > 0) {
      this.setState({ currentStep: currentStep - 1 });
    } else if (action === "next" && currentStep < lastStep) {
      this.setState({ currentStep: currentStep + 1 });
    } else if (action === "end" && currentStep === 4) {
      this.props.onComplete();
      this.setState({ currentStep: this.props.steps.length - 1 });
    }
  }

  render() {
    let { header, steps, wizardContext, updateContext } = this.props;
    let currentProgress = ((this.state.currentStep + 1) / steps.length) * 100;

    return (
      <div className="container wizard__container">
        <div className="wizard__header">
          <i className="fas fa-magic wizard__header-icon" />
          <span className="wizard__header-text">Label Wizard</span>
        </div>
        <ProgressBar currentProgress={currentProgress} />
        {this.state.currentStep === 0 ? (
          <AddressForm
            addressee="sender"
            wizardContext={wizardContext}
            onAction={this.onAction}
            updateContext={updateContext}
            title={header(this.state.currentStep)}
          />
        ) : null}
        {this.state.currentStep === 1 ? (
          <AddressForm
            addressee="receiver"
            wizardContext={wizardContext}
            onAction={this.onAction}
            updateContext={updateContext}
            title={header(this.state.currentStep)}
          />
        ) : null}
        {this.state.currentStep === 2 ? (
          <WeightForm
            wizardContext={wizardContext}
            onAction={this.onAction}
            updateContext={updateContext}
            title={header(this.state.currentStep)}
          />
        ) : null}
        {this.state.currentStep === 3 ? (
          <ShipOptionForm
            wizardContext={wizardContext}
            onAction={this.onAction}
            updateContext={updateContext}
            title={header(this.state.currentStep)}
          />
        ) : null}
        {this.state.currentStep === 4 ? (
          <ConfirmSummary
            wizardContext={wizardContext}
            onAction={this.onAction}
            updateContext={updateContext}
            title={header(this.state.currentStep)}
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
