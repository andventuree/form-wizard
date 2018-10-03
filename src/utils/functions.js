// Helper functions

export const shippingCost = (weight, shippingRate, shippingOption) => {
  return (
    weight *
    shippingRate *
    (shippingOption === shippingOption.ground ? 1 : 1.5)
  ).toFixed(2);
};
