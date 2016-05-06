var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dnaString){
  var mappedValues = { "C":"G", "G":"C", "A":"U", "T":"A" };
  var newString = "";

  for (var i = 0; i < dnaString.length; i++){
    newString += mappedValues[dnaString[i]];
  }
  return newString;
}

module.exports = DnaTranscriber;
