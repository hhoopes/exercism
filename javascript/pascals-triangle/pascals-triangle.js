export const rows = (numOfRows) => {
  let collection = [];

  for(let row = 0; row < numOfRows; row++) {
    let left, right;
    let thisRow = [];

    for(let index = 0; index < row + 1; index++) {
      if(index == 0 || index == row ) { left = 0, right = 1 } 
      else { 
        left = collection[row - 1][index - 1];
        right = collection[row -1][index];
      }
      thisRow.push(left + right); 
    };
    collection.push(thisRow);
  };
  return collection;
};
