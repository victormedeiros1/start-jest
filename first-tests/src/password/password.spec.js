const password = require("./password");

describe("Testes de validação de senha", () => {
  it("Deve retornar TRUE se a senha for válida", () => {
    expect(password.validation("Aasdasd1")).toBeTruthy();
  });
});
