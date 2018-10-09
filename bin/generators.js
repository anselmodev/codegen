const genCode = (limitNumbers) => {
  const maxNumber = 8999999999999;
  const complement = 1000000000000;

  const newCode = Math.floor((Math.random() * maxNumber + complement));
  
  if ( limitNumbers && limitNumbers >= 1 || limitNumbers && limitNumbers <= 13 ) {
      return parseInt(newCode.toString().slice(0, limitNumbers));
    } else {
    return newCode;
  }
};

const genCodeUnic = (limitNumbers) => {
  const newDate = new Date().getTime();
  const setUnicCode = newDate.toString().split("").reverse().join("").slice(0, 12);
  const newCode = Math.floor((Math.random() * parseInt(setUnicCode) + 1000000000000));

  if ( limitNumbers && limitNumbers >= 1 || limitNumbers && limitNumbers <= 13 ) {
    return parseInt(newCode.toString().slice(0, limitNumbers));
  } else {
    return newCode;
  }
};

/**
 * Numerical code generator
 * @module number/generator
 */
module.exports = { genCode, genCodeUnic };