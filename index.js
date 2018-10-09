const { genCode, genCodeUnic } = require("./bin/generators");

/**
 * Numerical code generator
 * @module number/generator
 */
module.exports = {
  /**
   * Set Number Code.
   * @param {number} Number - The limit code characters.
   * @return {number} The new code, max 13 caracter.
   */
  set: (limitNumbers) => {
    return genCode(limitNumbers);
  },
  setUnic: (limitNumbers) => {
    return genCodeUnic(limitNumbers);
  }
};