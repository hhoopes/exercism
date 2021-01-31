export class GradeSchool {
  constructor() {
    this.database = new Map();
  }

  roster() {
    const dbCopy = {};
    let grade, names;
    for ( [grade, names] of this.database.entries()) { 
      dbCopy[grade] = Object.assign([], names);
  } 
    return dbCopy;
  }

  add(name, grade) {
    this.removeNameFromDatabase(name);
    let names = this.database.get(grade) || [];
    names.push(name);
    this.database.set(grade, names.sort());
  }

  removeNameFromDatabase(name) {
    for ( let [ grade, names] of this.database.entries()) {
      this.database.set(grade, names.filter(n => n !== name));
    }
  }

  grade(grade) {
    let names = this.database.has(grade) ? this.database.get(grade) : [];
    return Object.assign([], names);
  }
}
