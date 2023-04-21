/**
 * Regra 1 - Se a média de reputação do filme for maior ou igual a 4 ele é "ÓTIMO"
 * Regra 2 - Se a média de reputação do filme for maior ou igual a 3 ele é "BOM"
 * Regra 3 - Se a média de reputação do filme for menor ou igual a 2 ele é "RUIM"
 */

module.exports = {
  movieReputation: (notes) => {
    const note = notes.reduce((acc, note) => acc + note, 0);

    if (note / notes.length >= 4) {
      return "ÓTIMO";
    } else if (note / notes.length >= 3 && note / notes.length < 4) {
      return "BOM";
    } else {
      return "RUIM";
    }
  },
};
