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
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    let { wizardContext, updateContext, onAction } = this.props;
    if (!isNaN(parseInt(this.state.weight))) {
      wizardContext.weight = this.state.weight;
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
            <label htmlFor="weight">
              <span className="wizard--step-2-spacing">Pounds (Lbs)</span>
            </label>
            <input
              type="number"
              className="form-control col-md-2"
              name="weight"
              id="weight"
              min="1"
              max="200"
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
      </div>
    );
  }
}

WeightForm.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
  updateContext: PropTypes.func.isRequired
};
