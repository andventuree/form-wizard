import React from "react";
import PropTypes from "prop-types";

const combineAddressRow = addressee => {
  return `${addressee.city} ${addressee.state}, ${addressee.zip}`;
};

const Label = ({ wizardContext }) => {
  let sender = wizardContext.from;
  let receiver = wizardContext.to;

  return (
    <div className="container label__container">
      <div className="label__header">
        Label is ready. Print and paste label on your package.
      </div>
      <div className="label__sticker">
        <div className="row">
          <div className="col-md-8 col-sm-8 col-xs-8">
            <div>SHIP FROM:</div>
            <div>{sender.name}</div>
            <div>{sender.street}</div>
            <div>{combineAddressRow(sender)}</div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-4 center font-large right">
            {wizardContext.weight} LBS
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-sm-4 col-xs-3" />
          <div className="col-md-1 col-sm-1 col-xs-1 ">SHIP TO:</div>
          <div className="col-md-4 col-sm-4 col-xs-4 center">
            <div>{receiver.name}</div>
            <div>{receiver.street}</div>
            <div>{combineAddressRow(receiver)}</div>
          </div>
          <div className="col-md-4 col-sm-3 col-xs-4" />
        </div>
        <hr />
        <div className="row label__option">
          <div className="col-md-4 ">
            {wizardContext.shippingOption === "1" ? "GROUND" : "PRIORITY"}
          </div>
          <div className="col-md-8 right">{combineAddressRow(receiver)}</div>
        </div>
        <div className="row" />
      </div>
    </div>
  );
};

export default Label;

Label.propTypes = {
  wizardContext: PropTypes.object.isRequired
};
