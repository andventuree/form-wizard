import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  StepNavBtns,
  AddressBlock,
  ShipMethodBlock,
  WeightBlock
} from "../../core/components";
import { shippingCost, shippingRate, validateInput } from "../../utils";

export default class ConfirmSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingCost: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let totalCost = shippingCost(
      this.props.wizardContext.weight,
      shippingRate,
      this.props.wizardContext.shippingOption
    );
    this.setState({ shippingCost: totalCost });
  }

  handleSubmit() {
    //This method provides flexibility to do any
    //final validation before form is submitted (as necessary)
    if (validateInput(this.props.wizardContext)) {
      this.props.onAction("end");
    }
  }

  render() {
    let { title, onAction, wizardContext } = this.props;
    return (
      <div className="wizard__step">
        <div className="wizard__step-header">{title}</div>
        <form>
          <div className="wizard__step-form">
            <div className="row">
              <AddressBlock
                details={wizardContext.from}
                direction="Send From"
              />
              <AddressBlock details={wizardContext.to} direction="Deliver To" />
            </div>
            <div className="row">
              <ShipMethodBlock shippingOption={wizardContext.shippingOption} />
              <WeightBlock weight={wizardContext.weight} />
            </div>
            <div className="row wizard__step-cost">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-3 col-sm-3">Cost:</div>
                  <div className="col-md-9 col-sm-9">
                    ${this.state.shippingCost}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <StepNavBtns
            onAction={onAction}
            currentStep={4}
            handleSubmit={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

ConfirmSummary.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
  updateContext: PropTypes.func.isRequired
};
