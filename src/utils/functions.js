// Helper functions

export const shippingCost = (weight, shippingRate, shippingOption) => {
  return (
    weight *
    shippingRate *
    (shippingOption === shippingOption.ground ? 1 : 1.5)
  ).toFixed(2);
};

export const validateInput = obj => {
  for (let key in obj) {
    if (typeof obj[key] === "function") {
      let nestedObj = obj[key];
      validateInput(nestedObj);
    } else if (obj[key] === "") {
      return false;
    }
  }
  return true;
};
