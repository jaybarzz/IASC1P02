window.prompt("Entre your age","your age here");

  function age(){
   var retVal = prompt("Enter your age : ", "your age here");
  document.write("You have entered: " + retVal);
}

var start = new Date();

var start = start.getDate ();
var getTime = start.getTime ();
var formatedCode = start.getDate () + "/" + start.getTime();
var stringVar = "";

document.getElementById("stopTime").innerHTML= formatedCode;
