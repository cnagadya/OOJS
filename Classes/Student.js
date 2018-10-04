class Student {
  constructor(gpa, courses) {
    this.gpa = gpa;
    this.courses = courses;
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

}

const christine = new Student(3.9, []);
christine.addCourse("Maths")

console.log(christine)