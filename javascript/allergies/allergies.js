//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(allergenValue) {
    this.allergenValue = allergenValue;
    this.allergenRepresentation = binaryRepresentation(this.allergenValue);
    this.allergenMap = {
      "eggs": 0,
    };
  }

  list() {
    throw new Error("Remove this statement and implement this function");
  }

  allergicTo(foodAllergen) {
    if(this.allergenValue == 0) {
      return false
    };
    return this.allergenRepresentation & binaryRepresentation(this.allergenMap[foodAllergen])
  }
}

function binaryRepresentation(int) {
  return int.toString(2);
}