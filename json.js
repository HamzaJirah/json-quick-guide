//create object literal
let student = {
  name: "Jirah",
  age: 28,
  address: "Abuja"
}

//convert 'student' object to json
student = JSON.stringify(student);
console.log(student);