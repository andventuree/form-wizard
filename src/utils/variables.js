// Helper variables

// Starting state
export const defaultWizardContext = {
  from: {
    name: "",
    street: "",
    city: "",
    state: "",
    zip: ""
  },
  to: {
    name: "",
    street: "",
    city: "",
    state: "",
    zip: ""
  },
  weight: "1", //defaults to 1 lb
  shippingOption: "1" //defaults to ground shipping
};

export const populatedWizardContext = {
  //for Testing
  from: {
    name: "John Smith",
    street: "131 Dartmouth St",
    city: "Boston",
    state: "MA",
    zip: "02116"
  },
  to: {
    name: "Linda Jackson",
    street: "40 Fulton St",
    city: "New York",
    state: "NY",
    zip: "10038"
  },
  weight: "20",
  shippingOption: "1"
};

// Used for navigation between steps
// Used in all step components
export const WizardAction = {
  prev: 1,
  next: 2,
  end: 3
};

// Used in step 4 (ShipOption)
export const ShippingOption = {
  ground: 1,
  priority: 2
};

// Used in step 5 (ConfirmSummary)
// Used in conjunction with shippingCost fn
export const shippingRate = 0.4;

// Regex

// Validate a ZIP code (U.S. postal code), allowing both formats:
// five-digit 12345
// nine-digit (called ZIP+4) 12345-6789
export const zipValidator = new RegExp("^[0-9]{5}(?:-[0-9]{4})?$");
