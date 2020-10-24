export class Matrix {
  constructor(matrixDescriptor) {
    this.numericRows = 
      matrixDescriptor.split('\n')
      .map(row => 
        row.split(' ')
        .map(Number)) 
  }

  get rows() {
    return this.numericRows;
  }

  get columns() {
    const numOfCols = this.numericRows[0].length;
    let cols = [];
    [...Array(numOfCols)].map((_, i) => { 
      cols[i] = this.numericRows.map(row => row[i]) 
    })

    return cols
  }
}
