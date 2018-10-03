import React, { Component } from "react";
import PropTypes from "prop-types";
import { StepNavBtns } from "../../core/components";

export default class ShipOption extends Component {
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
    let { title, onAction } = this.props;
    return (
      <div>
        <div>
          <h3>{title}</h3>
        </div>
        This is the ShipOption component.
        <form>
          <ul>
            <li>
              <label htmlFor="shipOption">
                <input
                  type="radio"
                  name="shipOption"
                  value={1}
                  defaultChecked
                />
                Ground
              </label>
            </li>
            <li>
              <label htmlFor="shipOption">
                <input type="radio" name="shipOption" value={2} />
                Priority
              </label>
            </li>
          </ul>
        </form>
        <StepNavBtns onAction={onAction} currentStep={3} />
      </div>
    );
  }
}

ShipOption.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
  updateContext: PropTypes.func.isRequired
};
