module.exports = {
  freeShipping: (value) => {
    return value >= 100;
  },
  willBeTaxed: (value) => {
    return value >= 250;
  },
};
