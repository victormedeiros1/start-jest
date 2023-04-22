module.exports = {
  validation: (password) => {
    const passwordSplitted = password.split("");

    // Verifica senha possui ao menos 8 CARACTERES
    if (password.length >= 8) {
      for (const char of passwordSplitted) {
        // Verifica senha possui LETRAS MAIÚSCULAS
        if (char === char.toUpperCase() && /[a-zA-Z]/.test(char)) {
          for (const char of passwordSplitted) {
            // Verifica a senha possui ao menos um NÚMERO
            if (Number(char)) {
              return true;
            }
          }
        }
      }
    }
    return false;
  },
};
