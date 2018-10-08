import React, { Component } from "react";
import PropTypes from "prop-types";
import { StepNavBtns } from "../../core/components";

export default class ShipOptionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingOption: "1"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ shippingOption: this.props.wizardContext.shippingOption });
  }

  handleChange(e) {
    //Fancy regex validations can go here
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    //This method provides flexibility to do any
    //final validation before form is submitted (as necessary)
    let { wizardContext, updateContext, onAction } = this.props;
    if (!isNaN(parseInt(this.state.shippingOption))) {
      wizardContext.shippingOption = this.state.shippingOption;
      updateContext(wizardContext);
      onAction("next");
    }
  }

  render() {
    let { title, onAction } = this.props;
    return (
      <div className="wizard--step">
        <div className="wizard--step-header">{title}</div>
        <form>
          <div className="wizard--step-form">
            <div className="form-check">
              <input
                id="ground"
                className="form-check-input"
                type="radio"
                name="shippingOption"
                onChange={this.handleChange}
                checked={this.state.shippingOption === "1"}
                value={"1"}
              />
              <label className="form-check-label" htmlFor="ground">
                Ground
              </label>
            </div>
            <div className="form-check">
              <input
                id="priority"
                className="form-check-input"
                type="radio"
                name="shippingOption"
                onChange={this.handleChange}
                checked={this.state.shippingOption === "2"}
                value={"2"}
              />
              <label className="form-check-label" htmlFor="priority">
                Priority
              </label>
            </div>
          </div>
          <StepNavBtns
            currentStep={3}
            onAction={onAction}
            handleSubmit={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

ShipOptionForm.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
  updateContext: PropTypes.func.isRequired
};
