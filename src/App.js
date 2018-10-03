import React, { Component } from "react";
import "./app.css";
import { ShippingLabelMaker } from "./features/shipping-label-maker";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShippingLabelMaker />
      </div>
    );
  }
}

export default App;
