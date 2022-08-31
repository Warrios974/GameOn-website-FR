// Initialisation des variable de vérification des champs
let firstNameOk = false;
let lastNameOk = false;
let emailOk = false;
let birthdayOk = false;
let participationOk = false;
let cityTournamentOk = false;
let termsOfUseOk = false;
let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let regexNumber = /^([0-9]|[1-9][0-9]|100)$/;
/////////////////////////////////////////////////////////
// Initialisation des Elements du DOM nécessaire
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
/////////////////////////////////////////////////////////
function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseBtn.addEventListener("click", function() {
  closeModal();
  displayFrom();
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
//fonctions qui fait apparaitre les erreurs et change les variable de validation
// Vérification de la longeur de l'input
function twoCaractereOrmore(value,num){
  value.length >= 2 ?(
    formData[n].removeAttribute("data-error-visible"),
    num == 0 ? firstNameOk = true : lastNameOk = true
  ) : (
    formData[n].setAttribute("data-error-visible", "true"),
    num == 0 ? firstNameOk = false : lastNameOk = false
  );
}
//Vérifie Si la valeur du champs ressemble a une adresse mail
function emailValidate(e){
  //Utilisation des regex
  regexEmail.test(e) ? (
    formData[2].removeAttribute("data-error-visible"),
    emailOk = true
  ) : (
    formData[2].setAttribute("data-error-visible", "true"),
    emailOk = false
  );
}
//Vérifie Si la valeur du champs est vide
function birthdayValidate(e){
  e ? (
    formData[3].removeAttribute("data-error-visible"),
    birthdayOk = true
  ) : (
    formData[3].setAttribute("data-error-visible", "true"),
    birthdayOk = false
  );
}
//Vérifie si c'est un nombre compris entre 1 et 100
//Pour eviter que les gens ecrivent des chiffre abérent
function participationValidate(e){
  //Utilisation des regex
  regexNumber.test(e) ? (
    formData[4].removeAttribute("data-error-visible"),
    participationOk = true
  ) : (
    formData[4].setAttribute("data-error-visible", "true"),
    participationOk = false
  );
}
//Vérifie si une ville est selectionné
// Quand un des bouton radio et cliqué le valeur cityTournamentOk passe a vrais
radioCheckCity.forEach((input) => input.addEventListener("click", function(){
  cityTournamentOk = true;
}));
//cityTournamentOk est vrais
function cityIsSelected(){
  !cityTournamentOk ?
    formData[5].setAttribute("data-error-visible", "true") :
    formData[5].removeAttribute("data-error-visible");
}
//Quand la case des conditions est coché la valeur de termsOfUseOk change
function termsOfUseIsChecked(){
  document.getElementById("checkbox1").checked ? (
      formData[6].removeAttribute("data-error-visible"),
      termsOfUseOk = true
    ) : (
      formData[6].setAttribute("data-error-visible", "true") ,
      termsOfUseOk = false
    );
}
//Submit
//Quand le formulaire est "submit"
formReserve.addEventListener("submit", function(e) {
  //l'évenement de base est annulé
  e.preventDefault();
  //Et la fonction validate est lancé
  validate();
});
//Function valider
function validate(){
  //Récupération des valeurs des champs
  let valueFirstName = formDataInput[0].value;
  let valueLastName = formDataInput[1].value;
  let valueEmail = formDataInput[2].value;
  let valueBirthday = formDataInput[3].value;
  let valueNbrParticipation = formDataInput[4].value;
  //////////////////////////////////////
  //Lancement des fonctions de vérification
  twoCaractereOrmore(valueFirstName,0);
  twoCaractereOrmore(valueLastName,1);
  emailValidate(valueEmail);
  birthdayValidate(valueBirthday);
  participationValidate(valueNbrParticipation);
  cityIsSelected();
  termsOfUseIsChecked();
  //////////////////////////////////////////
  //Vérification des variables de validation
  if(firstNameOk && lastNameOk && emailOk && birthdayOk && participationOk && cityTournamentOk && termsOfUseOk){
    //Cache le formualaire et affiche le message de remerciement
    formReserve.style.display = "none";
    validateMessage.style.display = "block";
    // Remise à zéro du formualire
    radioCheckCity.forEach((input) => input.checked = false);
    formDataInput.forEach((elem) => elem.value = "");
    termsOfUseId.checked = false;
    cityTournamentOk = false;
    ///////////////////////////////
  }
}