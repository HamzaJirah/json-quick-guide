//create httpRequest object
let httpRequest = new XMLHttpRequest();
//write httpRequest function
httpRequest.onload = function(){
  if(this.status === 200){
    let studentsList = document.querySelector('#students');
    let response =JSON.parse(httpRequest.responseText);
    let students = response.students
    // console.log(response.students)
    var output = "";
    for(var i = 0; i < students.length; i++){
    // console.log(students[i].age);
    output += '<li>'+students[i].age+'</li>'
    }
    //output students name/age to html document
    studentsList.innerHTML = output;
  }
}
httpRequest.open("GET", "students.json", true);
httpRequest.send();