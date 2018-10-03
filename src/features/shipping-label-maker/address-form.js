import React, { Component } from "react";
import PropTypes from "prop-types";
import { StepNavBtns } from "../../core/components";

export default class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let { wizardContext, addressee } = this.props;
    if (addressee === "sender") {
      this.setState(wizardContext.to);
    } else {
      this.setState(wizardContext.from);
    }
  }

  handleChange = e => {
    let { wizardContext, addressee, updateContext } = this.props;
    if (addressee === "sender") {
      wizardContext["to"][e.target.name] = e.target.value;
      this.setState(wizardContext.to);
    } else {
      wizardContext["from"][e.target.name] = e.target.value;
      this.setState(wizardContext.from);
    }
    updateContext(wizardContext);
  };

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    let { title, onAction, addressee } = this.props;
    // console.log("this.props.wizardContext: ", this.props.wizardContext);
    console.log(this.state);
    return (
      <div>
        <div>
          <h3>{title}</h3>
        </div>
        This is the {addressee} address component.
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            required
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            required
            name="street"
            value={this.state.street}
            onChange={this.handleChange}
          />
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            required
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            required
            name="state"
            value={this.state.state}
            onChange={this.handleChange}
          />
          <label htmlFor="zip">Zip Code</label>
          <input
            type="text"
            id="zip"
            required
            name="zip"
            value={this.state.zip}
            onChange={this.handleChange}
          />
        </form>
        {addressee === "sender" ? (
          <StepNavBtns onAction={onAction} currentStep={0} />
        ) : (
          <StepNavBtns onAction={onAction} currentStep={1} />
        )}
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
