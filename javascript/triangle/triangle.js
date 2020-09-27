export class Triangle {
  constructor(...sides) {
    this.sides = sides;
    this.sidesUniqueness = new Set(this.sides).size;
    this.validTriangle = this.validTriangleIdentity();
  }

  isEquilateral() {
    return this.validTriangle && this.sidesUniqueness === 1;
  }

  isIsosceles() {
    return this.validTriangle && this.sidesUniqueness < 3;
  }

  isScalene() {
    return this.validTriangle && this.sidesUniqueness === 3; 
  }

  validTriangleIdentity() {
    return this.nonzeroSides() && this.validSideSums();
  }

  nonzeroSides() {
    return this.sides.every(side => side > 0);
  }

  validSideSums() {
    let sortedSides = this.sides.sort();
    return this.sides[2] < this.sides[0] + this.sides[1];
  }
}
