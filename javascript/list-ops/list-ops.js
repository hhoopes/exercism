export class List {
  constructor(values = []) {
    this.values = values
  }

  append(list2) {
    return new List([...this.values, ...list2.values]);
  }

  concat(listOrLists) {
    // will not mutate original list
    let list = new List(this.values);
    for(let item of listOrLists.values) {
      list = list.append(item) 
    }
    return list;
  }

  filter(filterFunction) {
    let list = new List();
    for(let item of this.values) {
      if(filterFunction(item)) {
        list = list.push(item);
      }
     }
     return list;
  }

  fold(list, foldFunction, acc) {
    for(let item of list.values) {
      acc = foldFunction(acc, item)
    }
    return acc;
  }

  foldl(foldFunction, acc) {
    return this.fold(this, foldFunction, acc)
  }

  foldr(foldFunction, acc) {
    return this.fold(this.reverse(), foldFunction, acc)
  }

  length() {
    let counter = 0;
    for(let _item in this.values) {
      counter++
    }
    return counter;
  }

  map(mapFunction) {
    let list = new List();
    for(let item of this.values) {
      list = list.push(mapFunction(item));
     }
     return list;
  }

  push(item) {
    this.values = [...this.values, item];
    return this;
  }

  reverse() {
    let arr = [];
    for(let item of this.values) {
      arr = this.shift(arr, item);
     }
     return new List(arr);
  }

  shift(array, item) {
    return [item, ...array];
  }
}
