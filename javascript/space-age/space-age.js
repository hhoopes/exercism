export const age = (planet, seconds) => {
  let unroundedYears = convertSecondToYear(seconds) * 1/planetTime[planet];
  return decimalRound(unroundedYears);
};

function convertSecondToYear (seconds) {
  return seconds/31_557_600;
}

function decimalRound(number) {
  return Math.round(number * 100)/100;
}

const planetTime = {
  earth:    1,
  jupiter:  11.862615,
  mars:     1.8808158,
  mercury:  0.2408467,
  neptune:  164.79312,
  saturn:   29.447498,
  uranus:   84.016846,
  venus:    0.61519726, // leaving a comma so pluto can be added later ;)
}
