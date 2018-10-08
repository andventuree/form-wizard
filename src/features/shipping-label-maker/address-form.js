import React, { Component } from "react";
import PropTypes from "prop-types";
import { StepNavBtns } from "../../core/components";
import { validateInput } from "../../utils";

export default class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      street: "",
      city: "",
      state: "",
      zip: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Every time a form component is mounted, the previous answers are loaded
  componentDidMount() {
    let { wizardContext, addressee } = this.props;
    addressee === "sender"
      ? this.setState(wizardContext.from)
      : this.setState(wizardContext.to);
  }

  //With handleChange, any current changes are added onto state AND
  //not immediately reflected in wizardContext w/o submitting form
  handleChange(e) {
    //this is a spot where you can put custom validators
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    let { wizardContext, addressee, updateContext, onAction } = this.props;
    //1a) Validate input
    if (validateInput(this.state)) {
      //2) Construct payload to pass back to ShippingLabelMaker (parent)
      if (addressee === "sender") wizardContext.from = this.state;
      else wizardContext.to = this.state;
      //3) Save new answers to parent's state
      updateContext(wizardContext);
      //4) Then, allow onAction to navigate away
      onAction("next");
    }
    //1b) If input is invalid, browser validation messages appear
  }

  render() {
    let { title, onAction, addressee } = this.props;
    return (
      <div className="wizard--step">
        <div className="wizard--step-header">{title}</div>
        <form className="wizard--step-form">
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="full-name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="col-md-8 mb-3">
              <label htmlFor="Street">Street</label>
              <input
                type="text"
                className="form-control"
                id="Street"
                name="street"
                value={this.state.street}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-5 mb-3">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="state">State</label>
              <input
                type="text"
                className="form-control"
                id="state"
                name="state"
                value={this.state.state}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationDefault05">Zip</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault05"
                name="zip"
                value={this.state.zip}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          {addressee === "sender" ? (
            <StepNavBtns
              currentStep={0}
              onAction={onAction}
              handleSubmit={this.handleSubmit}
            />
          ) : (
            <StepNavBtns
              currentStep={1}
              onAction={onAction}
              handleSubmit={this.handleSubmit}
            />
          )}
        </form>
      </div>
    );
  }
}

AddressForm.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
  addressee: PropTypes.string.isRequired,
  updateContext: PropTypes.func.isRequired
};
