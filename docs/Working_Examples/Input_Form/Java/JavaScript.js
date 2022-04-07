document.getElementById("email").addEventListener("keypress", emailFunction);
function emailFunction() {
  let emailInput = document.getElementById("email");
  if (emailInput && emailInput.checkValidity()) {
    document.getElementById("mail").innerHTML = "";
  } else {
      document.getElementById("mail").innerHTML = "*";
    }
  }

document.getElementById("pwd").addEventListener("keypress", passwordFunction);
function passwordFunction() {
  let pWordInput = document.getElementById("pwd");
  if (pWordInput && pWordInput.checkValidity()) {
    document.getElementById("pWord").innerHTML = "";
  } else {
      document.getElementById("pWord").innerHTML = "*";
    }
  }

document.getElementById("fname").addEventListener("keypress", fnameFunction);
function fnameFunction() {
  let fInput = document.getElementById("fname");
  if (fInput && fInput.value) {
    document.getElementById("nameF").innerHTML = "";
  } else {
      document.getElementById("nameF").innerHTML = "*";
    }
  }

document.getElementById("lname").addEventListener("keypress", lnameFunction);
function lnameFunction() {
  let lInput = document.getElementById("lname");
  if (lInput && lInput.value) {
    document.getElementById("nameL").innerHTML = "";
    } else {
      document.getElementById("nameL").innerHTML = "*";
      }
    }

document.getElementById("Add1").addEventListener("keypress", addFunction);
function addFunction() {
  let addInput = document.getElementById("Add1");
  if (addInput && addInput.value) {
    document.getElementById("add").innerHTML = "";
    } else {
      document.getElementById("add").innerHTML = "*";
      }
    }

document.getElementById("city").addEventListener("keypress", cityFunction);
function cityFunction() {
  let cityInput = document.getElementById("city");
  if (cityInput && cityInput.value) {
    document.getElementById("aCity").innerHTML = "";
    } else {
      document.getElementById("aCity").innerHTML = "*";
      }
    }

document.getElementById("state").addEventListener("keypress", stateFunction);
function stateFunction() {
  let stateInput = document.getElementById("state");
  if (stateInput && stateInput.value) {
    document.getElementById("aState").innerHTML = "";
    } else {
      document.getElementById("aState").innerHTML = "*";
      }
    }

document.getElementById("zip").addEventListener("keypress", zipFunction);
function zipFunction() {
  let zipInput = document.getElementById("zip");
  if (zipInput && zipInput.value) {
    document.getElementById("zipCode").innerHTML = "";
    } else {
      document.getElementById("zipCode").innerHTML = "*";
      }
    }

document.getElementById("phone").addEventListener("keypress", phoneFunction);
function phoneFunction() {
  let phoneInput = document.getElementById("phone");
  if (phoneInput && phoneInput.checkValidity()) {
    document.getElementById("phoneNum").innerHTML = "";
    } else {
      document.getElementById("phoneNum").innerHTML = "*";
      }
    }

function boxFunction() {
  let checkBox = document.getElementById("myCheck");
  let text = document.getElementById("text");
  if (checkBox.checked == true){
      pwd.type = "text";
      } else {
        pwd.type = "password";
      }
    }

  document.getElementById("myBtn").addEventListener("click", mFunction);
  function mFunction() {
      alert ("Please make sure all fields have the right infomation before clicking Launch to submit.");
    }
