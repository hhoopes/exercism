var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (!input.trim()) { return response[3] }
  else if (input === input.toUpperCase() && input !== input.toLowerCase()) {
    return response[0];
  }
  else if (input.slice(-1) === "?") {
    return response[1];
  }
  else { return response[2] }
}

const response = {
  0: "Whoa, chill out!",
  1: "Sure.",
  2: "Whatever.",
  3: "Fine. Be that way!"
}

module.exports = Bob;
