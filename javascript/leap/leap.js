// True if divisible by 4 and 400 unless also divisible by 100
// False if not divisible by 4 or divisible by 400

var Year = function(year) {
  this.year = year;
};

Year.prototype.isLeap = function() {
  var year = this.year;

  if (year % 4 == 0) {
    if ( year % 100 == 0 ) {
      if (year % 400 == 0) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

module.exports = Year;
