//create httpRequest object
let httpRequest = new XMLHttpRequest();
//write httpRequest function
httpRequest.onload = function(){
  if(this.status === 200){
    const reponse = httpRequest.responseText
  };
}
httpRequest.open("GET", "students.json", true);
httpRequest.send();