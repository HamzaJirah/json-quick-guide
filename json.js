//create object literal
let student = {
  name: "Jirah",
  age: 28,
  address: "Abuja"
}

//convert 'student' object to json
student = JSON.stringify(student);
//convert 'student' json object to object literal
console.log(student.name);