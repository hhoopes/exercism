const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

var isPangram = function(sentence) {
  let lowercaseSentence = sentence.toLowerCase()
  return alphabet.every(function(char) {
    return lowercaseSentence.includes(char)
  })
}

module.exports = isPangram
