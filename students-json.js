//create httpRequest object
let httpRequest = new XMLHttpRequest();
//write httpRequest function
httpRequest.onload = function(){
  httpRequest.open("GET", "students.json", true);
  if(this.status === 200){
    console.log(httpRequest.responseText);
  }
  httpRequest.send();
}