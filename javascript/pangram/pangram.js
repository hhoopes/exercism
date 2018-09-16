const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

export default function isPangram(sentence) {
  return alphabet.every(function(char) {
    this.sentence.includes(char)
  })
}

// module.exports = isPangram
