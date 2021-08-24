var firstInput = document.getElementById("one");
var secondInput = document.getElementById("two");
var thirdInput = document.getElementById("three");
var fourInput = document.getElementById("four");
var fiveInput = document.getElementById("five");
var btnone = document.getElementById("btnOne");




// שאלה 1 

btnone.addEventListener("click", function () {
 var patient = {

        firstName: firstInput.value,
        lastName: secondInput.value,
        birthYear: thirdInput.value,
        Id: fourInput.value,
        city: fiveInput.value,


    };

patientsArray.push(patient);
for (var i = 0; i < patientsArray.length; i++) {
  if (patientsArray[i].id == fourInput.value) {
    alert("id alreay here");
    patientsArray.pop();
  }
}
console.log(patientsArray);
});

var patientsArray = [
    {
      firstName: "daniel",
      id: 1,
      lastName: "beckham",
      birthYear: 1997,
    },
    
    {
      firstName: "david",
      id: 2,
      lastName: "levi",
      birthYear: 1988,
    },
    
    {
      firstName: "shay",
      id: 3,
      lastName: "cohen",
      birthYear: 1999,
    },
    ];
    

// exe.4
var container = document.getElementById("div4quest");
for (var i = 0; i < patientsArray.length; i++) {
container.innerText += `first name : ${patientsArray[i].firstName} , last name : ${patientsArray[i].lastName} , id : ${patientsArray[i].id} , birth year : ${patientsArray[i].birthYear}`;
}


// exe.5
var wrapper = document.getElementById("div5quest");
for (var i = 0; i < patientsArray.length; i++) {
wrapper.innerHTML += `<p> first name : ${patientsArray[i].firstName} , last name : ${patientsArray[i].lastName} , id : ${patientsArray[i].id} , birth year : ${patientsArray[i].birthYear} </p>`;
}


// exe.6
oninput = function () {
firstInput.value= firstInput.value.toUpperCase() ;
secondInput.value = secondInput.value.toUpperCase() ;
fiveInput.value = fiveInput.value.toUpperCase () ;
}


// exe.7
var exe7Input = document.getElementById("inp7quest");
var exe7Button = document.getElementById("btn7quest");
var idInput = document.getElementById("idinput");
var idButton = document.getElementById("idbtn");
var exe7div = document.getElementById("div7quest");
var exe7p = document.getElementById("p7quest");

exe7Button.addEventListener("click", function () {
for (var i = 0; i < patientsArray.length; i++) {
  if (exe7Input.value == patientsArray[i].firstName) {
      exe7p.innerHTML = `<p> first name : ${patientsArray[i].firstName} , last name : ${patientsArray[i].lastName} , id : ${patientsArray[i].id} , birth year : ${patientsArray[i].birthYear} </p>`;
  } 
  if (exe7p.innerHTML.length < 2) {
      exe7p.innerHTML = `not here`;
  }
}
});

idButton.addEventListener("click", function () {
for (var i = 0; i < patientsArray.length; i++) {
  if (idInput.value == patientsArray[i].id) {
    exe7p.innerHTML = `first name : ${patientsArray[i].firstName} , last name : ${patientsArray[i].lastName} , id : ${patientsArray[i].id} , birth year : ${patientsArray[i].birthYear}`;
  }
}
if (exe7p.innerHTML.length < 2) {
  exe7p.innerHTML = "dont exist";
}
});