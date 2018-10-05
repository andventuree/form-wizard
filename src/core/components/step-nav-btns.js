import React from "react";
import PropTypes from "prop-types";

const StepNavBtns = ({ onAction, currentStep }) => {
  return (
    <div>
      {currentStep === 0 ? null : (
        <button
          className="btn btn-warning wizard--buttons-prev"
          onClick={() => onAction("prev")}
        >
          Prev
        </button>
      )}

      {currentStep === 4 ? null : (
        <button
          className="btn btn-warning"
          onClick={() => onAction("next")}
          // type="submit"
        >
          Next
        </button>
      )}
      {currentStep === 4 ? (
        <button className="btn btn-secondary" onClick={() => onAction("end")}>
          Generate Label
        </button>
      ) : null}
    </div>
  );
};

StepNavBtns.propTypes = {
  onAction: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired
};

export default StepNavBtns;
