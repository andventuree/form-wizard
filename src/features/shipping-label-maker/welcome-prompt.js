import React from "react";

const WelcomePrompt = ({ handleClick }) => {
  return (
    <div className="jumbotron welcome">
      <h1 className="display-4">Welcome!</h1>
      <p className="lead">
        This is a simple Shipping Label Maker where you can plug in your
        shipping information and our Label Wizard will handle the rest.
      </p>
      <button className="btn btn-info" onClick={handleClick}>
        Get Started
      </button>
    </div>
  );
};

export default WelcomePrompt;
