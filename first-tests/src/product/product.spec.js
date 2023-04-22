const product = require("./product");

describe("Testes para ferte grátis", () => {
  it("Deve retornar TRUE para frete grátis se a compra for acima de 100 reais", () => {
    expect(product.freeShipping(200)).toBeTruthy();
  });

  it("Deve retornar FALSE para frete grátis se a compra for abaixo de 100 reais", () => {
    expect(product.freeShipping(50)).toBeFalsy();
  });

  it("Deve retornar TRUE se o valor do produto for acima de 250 reais para ser taxado", () => {
    expect(product.willBeTaxed(300)).toBeTruthy();
  });

  it("Deve retornar FALSE se o valor do produto for abaixo de 250 reais para ser taxado", () => {
    expect(product.willBeTaxed(100)).toBeFalsy();
  });
});
