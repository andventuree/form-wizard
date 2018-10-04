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
    return (
      <div className="wizard--step">
        <div className="wizard--step-header">{title}</div>
        <form className="wizard--step-form">
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault01">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="col-md-8 mb-3">
              <label htmlFor="validationDefault02">Address</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                name="street"
                value={this.state.street}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-5 mb-3">
              <label htmlFor="validationDefault03">City</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault04">State</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault04"
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
