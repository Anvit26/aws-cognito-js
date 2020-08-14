var myInput = document.getElementById("forgot_pass_input");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var splchar = document.getElementById("splchar");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
var myChar = /[!@#$%^&*+=-]/g;
  if(myInput.value.match(myChar)) {  
    splchar.classList.remove("invalid");
    splchar.classList.add("valid");
  } else {
    splchar.classList.remove("valid");
    splchar.classList.add("invalid");
  }
  // Validate length
  if(myInput.value.length >= 10) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

var letterVal = document.getElementById("letter").className;
var capitalVal = document.getElementById("capital").className;
var numberVal = document.getElementById("number").className;
var lengthVal = document.getElementById("length").className;
var splcharVal = document.getElementById("splchar").className;

if (capitalVal=='valid'&&splcharVal=='valid'&&letterVal=='valid'&&numberVal=='valid'&&lengthVal=='valid'){
    document.getElementById("mybtn").disabled = false;
  }else{
    document.getElementById("mybtn").disabled = true;
  }
}