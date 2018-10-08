import React from "react";
import PropTypes from "prop-types";

const AuthForm = ({ username, password, handleChange, handleSubmit }) => {
  return (
    <div className="auth__container">
      <form onSubmit={handleSubmit}>
        <div className="margin-bottom-small ">
          But first! Please sign in. Simply fill in both username and password
          with anything to log in.
        </div>
        <div className="input-group input-group-sm mb-3 ">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Username
            </span>
          </div>
          <input
            type="username"
            className="form-control"
            name="username"
            onChange={handleChange}
            value={username}
          />
        </div>
        <div className="input-group input-group-sm mb-3 ">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Password
            </span>
          </div>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleChange}
            value={password}
          />
        </div>
        <div className="">
          <button className="btn btn-secondary" type="submit">
            Ready to see the wizard
          </button>
        </div>
      </form>
    </div>
  );
};

AuthForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default AuthForm;
