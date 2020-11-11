export class Clock {
  constructor(hours, minutes = 0) {
    this.minutes = this.getMinutes(minutes);
    this.hours = this.getHours(hours, minutes);
  }

  getMinutes(minutes) {
    let reducedMinutes = minutes % 60;
    if(reducedMinutes < 0) {
      return reducedMinutes + 60;
    } else {
      return Math.abs(reducedMinutes);
    }
  }

  getHours(hours, minutes) {
    let totalHours = (hours + (Math.floor(minutes/60))) % 24
    if(totalHours < 0) {
      return totalHours + 24;
    } else {
      return totalHours;
    }
  }

  toString() {
    return `${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}`
  }

  plus(additionalMinutes) {
    return this.tally(additionalMinutes, +1)
  }

  minus(fewerMinutes) {
    return this.tally(fewerMinutes, -1)
  }

  tally(minutes, sign) {
    this.hours = this.getHours(this.hours, this.minutes + minutes * sign);
    this.minutes = this.getMinutes(this.minutes + minutes * sign);
    return this
  }

  equals(comparisonClock) {
    return this.toString() == comparisonClock.toString();
  }
}
