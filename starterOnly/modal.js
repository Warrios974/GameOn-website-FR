function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let cityTournament = false;
let termsOfUse = true;

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const radioCheck = document.querySelectorAll(".checkbox-input");
const modalCloseBtn = document.querySelector(".close");

const radioCheckCity = document.querySelectorAll(".checkbox-city");
const termsOfUseId = document.querySelector("#checkbox1");
const validateMessage = document.querySelector(".validateMessage");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseBtn.addEventListener("click", closeModal);

radioCheckCity.forEach((input) => input.addEventListener("click", function(){
  cityTournament = true;
}));

termsOfUseId.addEventListener("click", function(){
  if(termsOfUse){
    termsOfUse = false;
  }else{
    termsOfUse = true;
  }
});

// launch validate function input
formData[0].addEventListener("input", function(e){twoCaractereOrmore(e,0);});
formData[1].addEventListener("input", function(e){twoCaractereOrmore(e,1);});
formData[2].addEventListener("input", function(e){emailValidate(e);});
formData[3].addEventListener("input", function(e){birthdayValidate(e);});
formData[4].addEventListener("input", function(e){participationValidate(e);});

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Function validate value input ////////////////////////////////////////////////////////////////
function twoCaractereOrmore(e,n){
  let isValid = false;
  var value = e.target.value;
  if (value.length >= 2) {
      isValid = true;
      formData[n].removeAttribute("data-error");
      formData[n].removeAttribute("data-error-visible");
  } else {
      isValid = false;
      formData[n].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus.");
      formData[n].setAttribute("data-error-visible", "true");
  }
}

function emailValidate(e){
  var value = e.target.value;
  if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)){
    formData[2].removeAttribute("data-error");
    formData[2].removeAttribute("data-error-visible");
  }else{
    formData[2].setAttribute("data-error", "Veuillez entrer un email valide s'il vous plaît.");
    formData[2].setAttribute("data-error-visible", "true");
  }
}

function birthdayValidate(e){
  var value = e.target.value;
  if(value){
    formData[3].removeAttribute("data-error");
    formData[3].removeAttribute("data-error-visible");
  }else{
    formData[3].setAttribute("data-error", "Vous devez entrer votre date de naissance.");
    formData[3].setAttribute("data-error-visible", "true");
  }
}

function participationValidate(e){
  var value = e.target.value;
  if(/^([0-9]|[1-9][0-9]|100)$/.test(value)){
    formData[4].removeAttribute("data-error");
    formData[4].removeAttribute("data-error-visible");
  }else{
    formData[4].setAttribute("data-error", "Veuillez entrer un chiffre s'il vous plaît.");
    formData[4].setAttribute("data-error-visible", "true");
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////

// Function valider
function validate(){
  if(cityTournament == false){
    formData[5].setAttribute("data-error", "Vous devez choisir une option.");
    formData[5].setAttribute("data-error-visible", "true");
    return false;
  }else{
    if(termsOfUse == false){
      formData[6].setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");
      formData[6].setAttribute("data-error-visible", "true");
      return false;
    }else{
      validate.style.display = "block";
      setTimeout(3000);
      return true;
    }
  }
}