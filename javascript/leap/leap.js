// True if divisible by 4 and 400 unless also divisible by 100
// False if not divisible by 4 or divisible by 400

var Year = function(given_year) {
  this.year = given_year;
};

Year.prototype.isLeap = function() {
  var year = this.year;

  return (year % 4 == 0 && year % 400 == 0) || (year % 4 == 0 && year % 100 != 0 )

}

module.exports = Year;
