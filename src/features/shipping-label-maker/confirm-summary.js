import React, { Component } from "react";
import PropTypes from "prop-types";
import { StepNavBtns, AddressBlock } from "../../core/components";
import { shippingCost, shippingRate } from "../../utils";

export default class ConfirmSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingCost: 0
    };
  }

  componentDidMount() {
    let totalCost = shippingCost(
      this.props.wizardContext.weight,
      shippingRate,
      this.props.wizardContext.shippingOption
    );
    this.setState({ shippingCost: totalCost });
  }

  render() {
    let { title, onAction, wizardContext, currentStep } = this.props;
    return (
      <div>
        <div>
          <div>{`Step ${currentStep + 1}: ${title}`}</div>
        </div>
        <div className="row">
          <AddressBlock details={wizardContext.from} direction="Send From" />
          <AddressBlock details={wizardContext.to} direction="Deliver To" />
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-0" />
          <div className="col-md-2 col-sm-9">Weight: </div>
          <div className="col-md-2 col-sm-3">
            {wizardContext.weight}
            lbs
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-0" />
          <div className="col-md-2 col-sm-9">Method: </div>
          <div className="col-md-2 col-sm-3">
            {wizardContext.shippingOption === 1 ? "Ground" : "Priority"}
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-0" />
          <div className="col-md-2 col-sm-9">Cost:</div>
          <div className="col-md-2 col-sm-3">${this.state.shippingCost}</div>
        </div>
        <StepNavBtns onAction={onAction} currentStep={4} />
      </div>
    );
  }
}

ConfirmSummary.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
  updateContext: PropTypes.func.isRequired
};
