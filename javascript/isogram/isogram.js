// const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

export default class Isogram {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase().replace(/(-| )/g, '')
  }
  isIsogram () {
    var seenLetters = ''
    return this.phrase.split('').every(function(char) {
      if(seenLetters.includes(char)) {
        return false
      } else {
        seenLetters += char
        return true
      }
    })
  }
}
