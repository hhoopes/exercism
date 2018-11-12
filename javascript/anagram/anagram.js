function charSort(word) {
  return word.toLowerCase().split('').sort().join('')
}

function determineIfAnagram(word1, word2) {
  if(word1.toLowerCase() == word2.toLowerCase()) {
    return null
  } 
  return charSort(word1) == charSort(word2)
}

class Anagram{
  constructor(word) {
    this.word = word;
  }

  matches(wordChoices) {
    let originalWord = this.word
    return wordChoices.filter(word => determineIfAnagram(originalWord, word))
  }
}

module.exports = Anagram
  
