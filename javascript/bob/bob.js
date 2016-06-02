var Bob = function() {};

Bob.prototype.hey = function(input) {
  var inputCaseBool = isUpperCase(input)
  if (input.length === 0 || !input.trim()) { return response[3] }
  else if (input.slice(-1) === "?") {
    return (inputCaseBool) ? response[0] : response [1]
  }
  else if (input.slice(-1) === "!" || inputCaseBool) {
    return (/\d/.test(input) || inputCaseBool) ? response[0] : response[2]
  }
  else { return response[2] }
}

var isUpperCase = function(string) {
  return string.toUpperCase() === string && /[A-Za-z]/.test(string);
};

const response = {
  0: "Whoa, chill out!",
  1: "Sure.",
  2: "Whatever.",
  3: "Fine. Be that way!"
}

module.exports = Bob;
