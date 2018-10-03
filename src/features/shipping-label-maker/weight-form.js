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
      <div>
        <div>
          <h3>{title}</h3>
        </div>
        This is the WeightForm component
        <form>
          <label htmlFor="weight">Weight</label>
          <input
            type="number"
            name="weight"
            id="weight"
            min="1"
            max="200"
            onChange={this.handleChange}
            value={wizardContext.weight}
            required
          />
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
