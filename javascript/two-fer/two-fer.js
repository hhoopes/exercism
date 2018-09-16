var twoFer = function(input) {
  let name = input === '' ? 'you' : input
  return `One for ${name}, one for me.`
}

module.exports = twoFer
