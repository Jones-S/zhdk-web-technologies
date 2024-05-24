const classroom = {
  students: ["Alice", "Bob", "Charlie"],
  teacher: {
    name: "Mr. Smith",
    subject: "Math",
    age: 35,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I teach ${this.subject}.`);
    }
  },
  location: "Room 101",
  capacity: 30,
  
  isFull: function() {
    return this.students.length >= this.capacity;
  },
  addStudent: function(student) {
    if (!this.isFull()) {
      this.students.push(student);
      console.log(`${student} has been added to the classroom.`);
    } else {
      console.log("The classroom is full. Cannot add more students.");
    }
  },
  removeStudent: function(student) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
      console.log(`${student} has been removed from the classroom.`);
    } else {
      console.log(`${student} is not in the classroom.`);
    }
  }
};

// Example usage
console.log("Classroom location:", classroom.location);
console.log("Number of students:", classroom.students.length);
console.log("Is the classroom full?", classroom.isFull());
classroom.addStudent("Dave");
classroom.addStudent("Eve");
classroom.addStudent("Frank");
classroom.removeStudent("Bob");
classroom.teacher.greet();