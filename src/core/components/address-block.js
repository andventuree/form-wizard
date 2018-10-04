import React from "react";
import PropTypes from "prop-types";

const AddressBlock = ({ details, direction }) => {
  return (
    <div className="col-md-6">
      <div>{direction}</div>
      <div className="row">
        <div className="col-md-3 col-sm-3">Name:</div>
        <div className="col-md-9 col-sm-9">{details.name}</div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-3">Street: </div>
        <div className="col-md-9 col-sm-9">{details.street}</div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-3">City:</div>
        <div className="col-md-9 col-sm-9">{details.city}</div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-3">State:</div>
        <div className="col-md-9 col-sm-9">{details.state}</div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-3">Zip:</div>
        <div className="col-md-9 col-sm-9">{details.zip}</div>
      </div>
    </div>
  );
};

export default AddressBlock;

AddressBlock.propTypes = {
  details: PropTypes.object.isRequired,
  direction: PropTypes.string.isRequired
};
