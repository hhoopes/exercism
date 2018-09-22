const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

function isPangram (sentence) {
  const uniqueChars = new Set(sentence.toLowerCase())
  return alphabet.every(function(char) {
    return uniqueChars.has(char)
  })
}

module.exports = { isPangram }
