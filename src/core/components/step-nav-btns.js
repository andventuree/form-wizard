import React from "react";
import PropTypes from "prop-types";

const StepNavBtns = ({ onAction, currentStep, handleSubmit }) => {
  return (
    <div>
      {currentStep === 0 ? null : (
        <button
          className="btn btn-warning wizard__buttons-prev"
          onClick={() => onAction("prev")}
        >
          &#10094; Prev
        </button>
      )}

      {currentStep === 4 ? (
        <button
          className="btn btn-secondary"
          onClick={() => handleSubmit()}
          type="submit"
        >
          Generate Label
        </button>
      ) : (
        <button
          className="btn btn-warning"
          onClick={() => handleSubmit()}
          type="submit"
        >
          Next &#10095;
        </button>
      )}
    </div>
  );
};

StepNavBtns.propTypes = {
  onAction: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default StepNavBtns;
