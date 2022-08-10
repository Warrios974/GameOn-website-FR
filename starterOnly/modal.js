function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let tournament = false;

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const radioCheck = document.querySelectorAll(".checkbox-input");
const modalCloseBtn = document.querySelector(".close");
////// Input form
const formfirtInput = document.getElementById("first");
const formlastInput = document.getElementById("last");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseBtn.addEventListener("click", closeModal);

radioCheck.forEach((imput) => imput.addEventListener("click", function(){
  tournament = true;
  console.log(tournament);
}));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

function validate(e){
  if(tournament == false){
    return false;
  }
}