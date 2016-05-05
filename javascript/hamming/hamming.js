var Hamming = function() {
};

Hamming.prototype.compute = function(strand_1, strand_2) {
  var strand_length = strand_1.length;
  if (strand_length != strand_2.length){
    throw new Error("DNA strands must be of equal length.");
  } else {
    var difference = 0;
    for (var i = 0; i < strand_length; i++) {
      if (strand_1[i] != strand_2[i]){
        difference += 1;
      }
    }
    return difference;
  }
}

module.exports = Hamming;
