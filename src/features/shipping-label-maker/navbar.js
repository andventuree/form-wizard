import React from "react";
import PropTypes from "prop-types";

const NavBar = ({ handleClick, labelCompleted, showWizard }) => {
  return (
    <div className="navbar">
      <div className="navbar--logo">Shipping Label Maker</div>
      <div className="navbar--button">
        {labelCompleted ? (
          <button className="btn btn-light" onClick={handleClick}>
            {showWizard ? "Label" : "Wizard"}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  labelCompleted: PropTypes.bool.isRequired,
  showWizard: PropTypes.bool.isRequired
};
