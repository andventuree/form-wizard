import React, { Component } from "react";
import PropTypes from "prop-types";
import { StepNavBtns, UsStatesDropdown } from "../../core/components";
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

  //Changes are not reflected immediately on wizardContext
  //Changes are only reflected on the state of this component
  handleChange(e) {
    //Type validations can go here
    this.setState({ [e.target.name]: e.target.value });
  }

  //Submit answers to reflect changes on wizardContext
  handleSubmit() {
    let { wizardContext, addressee, updateContext, onAction } = this.props;
    //1a) Validate input [Additional regex validations can go here (as necessary)]
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
      <section className="wizard__step">
        <div className="wizard__step-header">{title}</div>
        <form>
          <div className="wizard__step-form">
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
                <select
                  className="form-control"
                  id="state"
                  name="state"
                  value={this.state.state}
                  onChange={this.handleChange}
                  required
                >
                  <option disabled>Choose...</option>
                  <UsStatesDropdown />
                </select>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input
                  type="number"
                  className="form-control"
                  id="zip"
                  name="zip"
                  value={this.state.zip}
                  onChange={this.handleChange}
                  required
                />
              </div>
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
      </section>
    );
  }
}

AddressForm.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
  addressee: PropTypes.string.isRequired,
  updateContext: PropTypes.func.isRequired
};

// <input
// type="text"
// className="form-control"
// id="state"
// name="state"
// value={this.state.state}
// onChange={this.handleChange}
// required
// />
