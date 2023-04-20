/* 
  Regras estão no arquivo de testes
*/

module.exports = {
  sum: (notes) => {
    // Regra 1
    if (Math.min(...notes) === 0) {
      return 0;
    }

    // Regra 2
    const result = notes.reduce((acc, note) => {
      // Regra 4
      acc += note > 9 ? note * 2 : note;
      return acc;
    });

    // Regra 3
    return notes.length > 5 ? result * 2 : result;
  },
};
