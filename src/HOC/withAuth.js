import React, { Component } from "react";

const withAuth = isAuthenticated => ProtectedComponent => {
  return class withAuth extends Component {
    isLoggedIn() {
      return isAuthenticated;
    }

    render() {
      return this.isLoggedIn() ? <ProtectedComponent /> : null;
    }
  };
};

export default withAuth;
