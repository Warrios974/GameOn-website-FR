function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//
let firstNameOk = false;
let lastNameOk = false;
let emailOk = false;
let birthdayOk = false;
let participationOk = false;
let cityTournamentOk = false;
let termsOfUseOk = false;

let error = false;

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const radioCheck = document.querySelectorAll(".checkbox-input");
const modalCloseBtn = document.querySelector(".close");

const radioCheckCity = document.querySelectorAll(".checkbox-city");
const termsOfUseId = document.querySelector("#checkbox1");
const validateMessage = document.querySelector(".validateMessage");
const formReserve = document.querySelector("#reserve");
const btnSubmit = document.querySelector(".btn-submit");
const formDataInput = document.querySelectorAll(".formData > input");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseBtn.addEventListener("click", function() {
  closeModal(); 
  displayFrom()
});

// when btn radio city is check
formReserve.addEventListener("submit", function(e) {
  e.preventDefault();
  validate();
});

// when btn radio city is check
radioCheckCity.forEach((input) => input.addEventListener("click", function(){
  cityTournamentOk = true;
}));

// when termsOfUse is check
termsOfUseId.addEventListener("click", function(){
  termsOfUseOk ? 
  termsOfUseOk = false : 
  termsOfUseOk = true;
});

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Close modal form
function displayFrom() {
  formReserve.style.display = "block";
  validateMessage.style.display = "none";
}

// Functions validate value input ////////////////////////////////////////////////////////////////
function twoCaractereOrmore(e,n){
  e.length >= 2 ?(
    formData[n].removeAttribute("data-error-visible"),
    n == 0 ? firstNameOk = true : lastNameOk = true
  ) : (
    formData[n].setAttribute("data-error-visible", "true"),
    n == 0 ? firstNameOk = false : lastNameOk = false
  );
}

function emailValidate(e){
  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e) ? (
    formData[2].removeAttribute("data-error-visible"),
    emailOk = true
  ) : (
    formData[2].setAttribute("data-error-visible", "true"),
    emailOk = false
  );
}

function birthdayValidate(e){
  e ? (
    formData[3].removeAttribute("data-error-visible"),
    birthdayOk = true
  ) : (
    formData[3].setAttribute("data-error-visible", "true"),
    birthdayOk = false
  );
}

function participationValidate(e){
  /^([0-9]|[1-9][0-9]|100)$/.test(e) ? (
    formData[4].removeAttribute("data-error-visible"),
    participationOk = true
  ) : (
    formData[4].setAttribute("data-error-visible", "true"),
    participationOk = false
  );
}

function cityIsSelected(){
  !cityTournamentOk ? 
    formData[5].setAttribute("data-error-visible", "true") : 
    formData[5].removeAttribute("data-error-visible");
}

function termsOfUseIsChecked(){
  document.getElementById("checkbox1").checked ? 
    formData[6].removeAttribute("data-error-visible") : 
    formData[6].setAttribute("data-error-visible", "true");
}
/////////////////////////////////////////////////////////////////////////////////////////////////

// Function valider
function validate(){
  let valueFirstName = formDataInput[0].value;
  let valueLastName = formDataInput[1].value;
  let valueEmail = formDataInput[2].value;
  let valueBirthday = formDataInput[3].value;
  let valueNbrParticipation = formDataInput[4].value;
  
  twoCaractereOrmore(valueFirstName,0);
  twoCaractereOrmore(valueLastName,1);

  emailValidate(valueEmail);
  birthdayValidate(valueBirthday);

  participationValidate(valueNbrParticipation);

  cityIsSelected();
  termsOfUseIsChecked();
  
  if(firstNameOk && lastNameOk && emailOk && birthdayOk && participationOk && cityTournamentOk && termsOfUseOk){
    formReserve.style.display = "none";
    validateMessage.style.display = "block";
    radioCheckCity.forEach((input) => input.checked = false);
    formDataInput.forEach((elem) => elem.value = "");
    termsOfUseId.checked = false;
    cityTournamentOk = false;
  }
}