import React, { Component } from "react";
import PropTypes from "prop-types";
import { StepNavBtns } from "../../core/components";

export default class WeightForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: "1"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ weight: this.props.wizardContext.weight });
  }

  handleChange(e) {
    //Type validations can go here
    if (parseInt(e.target.value) > 1000) return;
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    //This method provides flexibility to do any
    //final validation before form is submitted (as necessary)
    const { wizardContext, updateContext, onAction } = this.props;
    if (!isNaN(parseInt(this.state.weight))) {
      wizardContext.weight = this.state.weight;
      updateContext(wizardContext);
      onAction("next");
    }
  }

  render() {
    const { title, onAction } = this.props;
    return (
      <section className="wizard__step">
        <div className="wizard__step-header">{title}</div>
        <form>
          <div className="wizard__step-form">
            <label htmlFor="weight">
              <span>Pounds (Lbs)</span>
            </label>
            <input
              type="number"
              className="form-control col-md-2"
              name="weight"
              id="weight"
              min="1"
              max="1000"
              onChange={this.handleChange}
              value={this.state.weight}
              required
            />
          </div>
          <StepNavBtns
            currentStep={2}
            onAction={onAction}
            handleSubmit={this.handleSubmit}
          />
        </form>
      </section>
    );
  }
}

WeightForm.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
  updateContext: PropTypes.func.isRequired
};
