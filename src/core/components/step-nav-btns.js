import React from "react";

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

export default StepNavBtns;
