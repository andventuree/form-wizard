import React from "react";

const StepNavBtns = ({ onAction, currentStep }) => {
  return (
    <div>
      {currentStep === 0 ? null : (
        <button className="btn btn-warning" onClick={() => onAction("prev")}>
          Prev
        </button>
      )}

      {currentStep === 4 ? null : (
        <button
          className="btn btn-warning"
          onClick={() => onAction("next")}
          type="submit"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default StepNavBtns;

// <button onClick={() => onAction("end")}>Start Over?</button>
