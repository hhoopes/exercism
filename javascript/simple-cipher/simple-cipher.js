const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const alphaLength = alphabet.length

// would define the following 2 functions in a separate class/file in a project
let generateRandomKey = () => {
  let key = '';
  for (let i = 0; i < 100; i++) {
    key += generateRandomLetter();
  };
  return key;
};

let generateRandomLetter = () => {
  return alphabet[Math.floor(Math.random() * alphaLength)]
};

class Cipher {
  constructor (key) {
    if(badKey(key) || key == '') {
      throw new Error('Bad key')
    } else {
      this.key = key || generateRandomKey();
    }
  };
  encode (secret) {
    return this.codeMessage(secret, +1)
  };

  decode (crypt) {
    return this.codeMessage(crypt, -1)
  };

  codeMessage (message, multiplier) {
    let coded = '';
    let index = 0;
    for (const letter of message) {
      coded += this.codeChar(letter, this.key[index % this.key.length], multiplier);
      index += 1
    };
    return coded;
  };

  codeChar (letter, offset, directionality) {
    let index = alphabet.indexOf(letter)
    let offsetValue = alphabet.indexOf(offset)
    let newIndex = ((index + directionality * offsetValue) % (alphaLength))
    if(newIndex < 0) {
      newIndex += alphaLength
    };
    return alphabet[newIndex]
  };
};

let badKey = (key) => {
  return /[^a-z]/.test(key)
};

module.exports = Cipher
