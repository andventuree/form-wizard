import React, { Component } from "react";
import PropTypes from "prop-types";
import { StepNavBtns } from "../../core/components";

export default class ShipOptionForm extends Component {
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
    let { title, onAction, currentStep } = this.props;
    return (
      <div>
        <div>
          <div>{`Step ${currentStep + 1}: ${title}`}</div>
        </div>
        <form>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="shipOption"
              id="ground"
              value={1}
              defaultChecked
            />
            <label className="form-check-label" htmlFor="ground">
              Ground
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="shipOption"
              id="priority"
              value={2}
            />
            <label className="form-check-label" htmlFor="priority">
              Priority
            </label>
          </div>
        </form>
        <StepNavBtns onAction={onAction} currentStep={3} />
      </div>
    );
  }
}

ShipOptionForm.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
  updateContext: PropTypes.func.isRequired
};
