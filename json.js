//create object literal
let student = {
  name: "Jirah",
  age: 28,
  address: "Abuja",
  education: {
    university: "Zaria",
    secondary: "Shere"
  },
  siblings: ["Zainab", "Rahab", "Barnabas"]
}

//convert 'student' object to json
// student = JSON.stringify(student);
//convert 'student' json object to object literal
// student = JSON.parse(student);

//create array literal
let students = [
  {
    name: "Yusuf",
    age: 30
  },
  {
    name: "Zaradeen",
    age: 24
  },
  {
    name: "Usman",
    age: 34
  }
]

console.log(students[1].name);