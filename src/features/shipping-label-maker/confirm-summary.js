import React, { Component } from "react";
import PropTypes from "prop-types";
import { StepNavBtns } from "../../core/components";
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
    let { title, onAction, wizardContext } = this.props;
    return (
      <div>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <div>
            Sender:
            <div>
              Name: <span>{wizardContext.to.name}</span>
            </div>
            <div>
              Street: <span>{wizardContext.to.street}</span>
            </div>
            <div>
              City: <span>{wizardContext.to.city}</span>
            </div>
            <div>
              State: <span>{wizardContext.to.state}</span>
            </div>
            <div>
              Zip: <span>{wizardContext.to.zip}</span>
            </div>
          </div>
          <div>
            Receiver:
            <div>
              Name: <span>{wizardContext.from.name}</span>
            </div>
            <div>
              Street: <span>{wizardContext.from.street}</span>
            </div>
            <div>
              City: <span>{wizardContext.from.city}</span>
            </div>
            <div>
              State: <span>{wizardContext.from.state}</span>
            </div>
            <div>
              Zip: <span>{wizardContext.from.zip}</span>
            </div>
          </div>
          <div>Weight: {wizardContext.weight} lbs</div>
          <div>
            Shipping Option:{" "}
            {wizardContext.shippingOption === 1 ? "Ground" : "Priority"}
          </div>
        </div>
        <div>${this.state.shippingCost}</div>
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
