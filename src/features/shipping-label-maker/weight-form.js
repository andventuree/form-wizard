import React, { Component } from "react";
import PropTypes from "prop-types";
import { StepNavBtns } from "../../core/components";

export default class WeightForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    let { wizardContext, updateContext } = this.props;
    wizardContext[e.target.name] = e.target.value;
    updateContext(wizardContext);
  };

  render() {
    let { title, onAction, wizardContext } = this.props;
    return (
      <div className="wizard--step">
        <div className="wizard--step-header">{title}</div>
        <form className="wizard--step-form">
          <div>
            <label htmlFor="weight">
              <span className="wizard--step-2-spacing">Pounds</span>
            </label>
            <input
              type="number"
              className="form-control col-md-2"
              name="weight"
              id="weight"
              min="1"
              max="200"
              onChange={this.handleChange}
              value={wizardContext.weight}
              required
            />
          </div>
        </form>
        <StepNavBtns onAction={onAction} currentStep={2} />
      </div>
    );
  }
}

WeightForm.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
  updateContext: PropTypes.func.isRequired
};

// <label htmlFor="weight">Weight</label>
