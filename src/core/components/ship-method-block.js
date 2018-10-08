import React from "react";
import PropTypes from "prop-types";

const ShipMethodBlock = ({ shippingOption }) => {
  return (
    <div className="col-md-6">
      <div className="row">
        <div className="col-md-3 col-sm-3">Method: </div>
        <div className="col-md-9 col-sm-9">
          {shippingOption === "1" ? "Ground" : "Priority"}
        </div>
      </div>
    </div>
  );
};

ShipMethodBlock.propTypes = {
  shippingOption: PropTypes.string.isRequired
};

export default ShipMethodBlock;
