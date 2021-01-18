const validLength = (input) => {
  return(input.length > 1);
};

const validChars = (input) => {
  return input.every(item => /^[0-9]+$/.test(item));
};

const validLuhnSum = (input) => {
  let luhnSum = input.reverse().reduce((acc, digit, index) => {
    if(index & 1 == 1) {
      let double = digit * 2;
      return acc + (double > 9 ? double - 9 : double);
    } else {
      return acc + digit;
    }
  }, 0)
  return(luhnSum % 10 == 0);
};

export const valid = (input) => {
  let processedInput = input.replace(/ /g, "").split("").map(Number);
  let businessRules = [
    validLength,
    validChars,
    validLuhnSum
  ];
  return businessRules.every(rule => rule(processedInput));
};
