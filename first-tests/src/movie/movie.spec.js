const movieNote = require("./movie");

describe("Testes de nota do filme", () => {
  it("Deve retornar ÓTIMO quando as notas forem 4, 4.5 e 5", () => {
    const notes = [4, 4.5, 5];
    expect(movieNote.movieReputation(notes)).toEqual("ÓTIMO");
  });

  it("Deve retornar BOM quando as notas 3, 3.2, 3.3", () => {
    const notes = [3, 3.2, 3.3];
    expect(movieNote.movieReputation(notes)).toEqual("BOM");
  });

  it("Deve retornar RUIM quando as notas forem 2, 1 e 0", () => {
    const notes = [2, 1, 0];
    expect(movieNote.movieReputation(notes)).toEqual("RUIM");
  });
});
