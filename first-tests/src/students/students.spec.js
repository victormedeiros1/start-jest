/**
 * Teste com TDD -> escrever os testes depois o código a ser testado.
 *
 * Regra 1 - Devemos conseguir somar as notas dos alunos.
 * Regra 2 - Se caso uma nota for zero, a soma deve retornar zero.
 * Regra 3 - Caso o aluno tenha mais de cinco notas a soma deve ser multiplicada por 2.
 */

/**
 * Teste sem TDD -> escrever o código a ser testado depois os testes
 * Regra 4 - Caso a nota seja maior que 9 deve ser dobrada.
 */

const student = require("./student");

describe("Testes para alunos", () => {
  it("Deve retornar 10 quando as notas forem 5, 3 e 2", () => {
    const notes = [5, 3, 2];
    expect(student.sum(notes)).toEqual(10);
  });

  it("Deve retornar zero quando uma das notas for zero", () => {
    const notes = [1, 2, 3, 0];
    expect(student.sum(notes)).toEqual(0);
  });

  it("Deve dobrar a nota quando o aluno tiver mais de cinco notas", () => {
    const notes = [1, 2, 3, 4, 5, 6, 7];
    expect(student.sum(notes)).toEqual(56);
  });

  it("Deve dobrar a nota se ela for maior que 9", () => {
    const notes = [4, 5, 10];
    expect(student.sum(notes)).toEqual(29);
  });
});
