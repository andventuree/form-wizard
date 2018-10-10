import React from "react";
import PropTypes from "prop-types";

const WelcomePrompt = ({ handleClick }) => {
  return (
    <div className="jumbotron welcome">
      <h1 className="display-4">Welcome!</h1>
      <p className="lead">
        This is a simple Form Wizard where you can plug in your shipping
        information and our Wizard will handle the rest.
      </p>
      <button className="btn btn-info" onClick={handleClick}>
        Get Started
      </button>
    </div>
  );
};

WelcomePrompt.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default WelcomePrompt;
