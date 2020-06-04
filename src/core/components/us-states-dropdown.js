import React from "react";

const UsStatesDropdown = () => {
  const usStates = [ "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", 
    "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", 
    "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ]
  return (
    <React.Fragment>
      {usStates.map(state => <option value={state}>{state}</option>)}
    </React.Fragment>
  );
};

export default UsStatesDropdown;
