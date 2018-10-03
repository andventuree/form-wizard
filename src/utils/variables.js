// Helper variables

// Starting state
export let defaultWizardContext = {
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
  weight: 1,
  shippingOption: 1 //defaults to ground shipping
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
