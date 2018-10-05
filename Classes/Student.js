class Student {
  constructor(gpa, courses, credits) {
    this.gpa = gpa;
    this.courses = courses;
    this.credits = credits;
  }
  stringGPA() {
    return this.gpa.toString();
  }

  printGPA() {
    console.log(this.gpa);
  }

  addCourse(course) {
    this.courses.push(course);
  }

  get level() {
    if (this.credits <= 30) {
      return "Freshman";
    } else if (this.credits <= 60) {
      return "Sophomore";
    } else if (this.credits <= 90) {
      return "Junior";
    } else {
      return "Senior";
    }
  }

  set major(major) {
    if (["Senior", "Junior"].includes(this.level)) {
      this._major = major;
    } else {
      this._major = "None";
    }
  }
}

const christine = new Student(3.9, [], 97);
christine.addCourse("Maths");

console.log(christine);
console.log(christine.level);
