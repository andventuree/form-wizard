import React from "react";
import PropTypes from "prop-types";

const WeightBlock = ({ weight }) => {
  return (
    <div className="col-md-6">
      <div className="row">
        <div className="col-md-3 col-sm-3">Weight: </div>
        <div className="col-md-9 col-sm-9">
          {weight}
          lbs
        </div>
      </div>
    </div>
  );
};

WeightBlock.propTypes = {
  weight: PropTypes.number.isRequired
};

export default WeightBlock;
