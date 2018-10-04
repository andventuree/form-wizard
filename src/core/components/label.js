import React from "react";
import PropTypes from "prop-types";
import { AddressBlock } from "../components";

const Label = ({ wizardContext }) => {
  return (
    <div>
      Label is ready. Print and paste label on your package.
      <div>
        <AddressBlock details={wizardContext.from} direction="Send From" />
        <AddressBlock details={wizardContext.to} direction="Deliver To" />
      </div>
    </div>
  );
};

export default Label;

Label.propTypes = {
  wizardContext: PropTypes.object.isRequired
};
