// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersU = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lettersL= []
for(let letter of lettersU){
  lettersL.push(letter.toLowerCase());
}
console.log(lettersU, lettersL);
var numbers = [0,1,2,3,4,5,6,7,8,9]
var specialCharecters = ["!","@","%"]
var totalarray = []
function generatePassword(){
  var passlen = parseInt(window.prompt("Please enter your desired password length"));
  console.log(passlen);
  if(passlen===null){
    alert("Please enter a valid length")
    return "Please try again";
  }
  var islower = window.confirm("Would you like lowercase letters");
  if(islower){
    totalarray = totalarray.concat(lettersL)
  }
  var isupper = window.confirm("lettersU")

  if (isupper){
    totalarray = totalarray.concat(lettersU)
  }

  if (window.confirm("numbers?")){
    totalarray = totalarray.concat(numbers)
  }

  if (window.confirm("specialCharecters")){
    totalarray = totalarray.concat(specialCharecters)
  }
  console.log(totalarray)
if(totalarray.length===0){
  alert("Please select at least one charecter type")
  return "Please try again";
}
var password = "";
for(var i = 0; i < passlen ; i++){
  var index = Math.floor(Math.random()*totalarray.length);
  var digit = totalarray[index]
  password += digit

}
  return password

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
