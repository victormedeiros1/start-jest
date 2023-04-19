// Devemos conseguir somar as notas dos alunos
// Se caso uma nota for zero, a soma deve retornar zero
// Caso o aluno tenha mais de cinco notas a soma deve ser multiplicada por 2

import { student } from "./student";

describe("Testes para alunos", () => {
  it("Deve retornar 10 quando as notas forem 5, 3 e 2", () => {
    const notes = [5, 3, 2];
    expect(student.sum(notes)).toEqual(10);
  });

  it("Deve retornar zero quando uma das notas for zero", () => {
    const notes = [1, 2, 3, 0];
    expect(stundent.sum(notes)).toEqual(0);
  });

  it("Deve dobrar a nota quando o aluno tiver mais de cinco notas", () => {
    const notes = [1, 2, 3, 4, 5, 6, 7];
    expect(students.sum(notes)).toEqual(64);
  });
});
