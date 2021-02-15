export class GradeSchool {
  constructor() {
    this.database = new Map();
  }

  roster() {
    const dbCopy = {};
    for ( let [grade, names] of this.database) {
      dbCopy[grade] = [...names]
  } 
    return dbCopy;
  }

  add(name, grade) {
    this.removeNameFromDatabase(name);
    let names = this.database.get(grade) || [];
    this.database.set(grade, [...names, name].sort());
  }

  removeNameFromDatabase(name) {
    for ( let [ grade, names] of this.database) {
      this.database.set(grade, names.filter(n => n !== name));
    }
  }

  grade(grade) {
    let names = this.database.has(grade) ? this.database.get(grade) : [];
    return [...names];
  }
}
