var reverseString = function(input) {
  if(input === '') {
    return input
  }
  let array = Array.from(input)
  return array.reduceRight(
    (newString, currentValue) => newString + currentValue
  )
}

module.exports = reverseString
