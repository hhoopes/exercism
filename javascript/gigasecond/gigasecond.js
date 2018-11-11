const gigaseconds = Math.pow(10, 9)
function gigasecond (birthday) {
  let anniversary = birthday
  anniversary.setSeconds(anniversary.getSeconds() + gigaseconds)
  return anniversary
}

module.exports = { gigasecond }
