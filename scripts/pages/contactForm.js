
function toggleForm(){
    
    const x = document.getElementsByClassName("modalForm")[0]; 
    // console.log(x);
    // console.log(x.style.display);

    if(x.style.display =="block"){

        x.style.display ="none";
        document.getElementById("main").style.opacity = 1;
        document.getElementById("logoSection").style.opacity = 1;

    }
    else{
        x.style.display ="block"; 
        document.getElementById("main").style.opacity = 0.5;
        document.getElementById("logoSection").style.opacity = 0.5;
    }

}

function reset(){
    document.getElementById("firstname").value="";
}


function submitForm(){
    let firstname= document.getElementById("firstname").value
    let lastname= document.getElementById("lastname").value
    let email= document.getElementById("email").value
    let text= document.getElementById("textArea").value
    let formInputData = "First Name :"+firstname + "\n" + "Last Name :"+ lastname + "\n" + "Email :"+ email + "\n" + "Message :"+ text + "\n ";
    console.log(formInputData);
    reset();
}

















// ========== DOM ELEMENTS ==========

const close = document.querySelector(".modal__close");

// const form__datas = document.querySelectorAll(".form__data");

const fistname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const textArea = document.getElementById("textArea");

const btnSubmit = document.querySelector(".form__submitButton");

const successMessage = document.querySelector(".message");
const msgContent = document.querySelector(".message__content");
const btnClose = document.querySelector(".btn-close");
const closeCross = document.querySelector(".modal__close");
const contactModal = document.querySelector(".modalForm");

// ========== FUNCTIONS AND EVENTS ==========


// ---------- Modal visibility ----------



/**
 * Modal closing
 */
// function closeForm() {
    
//     const x = document.getElementsByClassName("modal"); 

//     x[0].classList.remove("d__block");


//     // x[0].style.display ="none";

// }
// function openForm() {
    
//     const x = document.getElementsByClassName("modal"); 

//     x[0].classList.add("d__block");


//     // x[0].style.display ="none";

// }

// ---------- Modal submission ----------

/**
 * Show error message if input not valid
 * @param {Object} input - The given input
 * @param {string} message - The error message
 */
function showErrorMessage(input, message) {
    const form__data = input.parentElement;
    form__data.className = 'form__data error'
    const errorMessage = form__data.querySelector('.errorMessage');
    errorMessage.innerHTML = message;
    input.focus();
}

/**
 * Hide error message if input was not valid
 * @param {Object} input 
 */
function showSuccess(input) {
    const form__data = input.parentElement;
    form__data.className = 'form__data success';
    const errorMessage = form__data.querySelector('.errorMessage');
    errorMessage.innerHTML = '';
}





/**
 * Check if all inputs are valid
 * @returns {Boolean}
 */
 function checkInputValidation() {

    



    let fields = {
        firstName: false,
        lastName: false,
        email: false
    };

    // First name input
    const regexAsciiLetters = /[a-zA-Z]/;
    if (fname.value.length ===0) {
        showErrorMessage(fname, "Veuillez saisir votre prénom.");
    } else if (fname.value.length < 2) {
        showErrorMessage(fname, "Veuillez entrer minimum 2 caractères pour le prénom.");
    } else if (!regexAsciiLetters.test(fname.value)) {
        showErrorMessage(fname, "Veuillez entrer des caractères de A à Z.");
    } else {
        showSuccess(fname);
        fields.firstName = true;
    }

    // Last name input
    if (lname.value.length === 0) {
        showErrorMessage(lname, "Veuillez saisir votre nom.");
    }
    if (lname.value.length < 2) {
        showErrorMessage(lname, "Veuillez entrer minimum 2 caractères pour le nom.");
    } else if (regexAsciiLetters.test(lname.value) == false) {
        showErrorMessage(lname, "Veuillez entrer des caractères de A à Z.");
    } else {
        showSuccess(lname);
        fields.lastName = true;
    }

    // Email input
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailInput.value.length === 0) {
        showErrorMessage(emailInput, "Veuillez saisir votre adresse e-mail.");
    } else if (!regexEmail.test(emailInput.value)) {
        showErrorMessage(emailInput, "Veuillez saisir un e-mail valide.");
    } else {
        showSuccess(emailInput);
        fields.email = true;
    }

    // Birthdate input
    let todayDate = new Date();
    let dobDate = new Date(dob.value);
    if (dob.value == '') {
        showErrorMessage(dob, "Veuillez entrer votre date de naissance.");
    } else if (dobDate >= todayDate) {
        showErrorMessage(dob, "La date de naissance doit être antérieure à aujourd'hui.");
    } else {
        showSuccess(dob);
        fields.birthDate = true;
    }

    // Tournament quantity input
    if (qty.value.length === 0) {
        showErrorMessage(qty, "Veuillez saisir un nombre.");
    } else {
        showSuccess(qty, fields.tournamentsQuantity);
        fields.tournamentsQuantity = true;
    }

    // Location choice inputs
    let locationChecked = false;
    for (var i = 0; i < locationsInputs.length; i++) {
        if (locationsInputs[i].checked) {
            locationChecked = true;
            break;
        }
    }
    if (!locationChecked) {
        showErrorMessage(locationsInputs[0], "Veuillez choisir une ville.");
    } else {
        showSuccess(locationsInputs[0]);
        fields.location = true;
    }

    // Conditions checked input
    if (conditionsInput.checked === false) {
        showErrorMessage(conditionsInput, "Vous devez vérifier que vous acceptez les termes et conditions.");
    } else {
        showSuccess(conditionsInput);
        fields.conditions = true;
    }

    // Submit form if all fields are valid
    let fieldsValues = Object.values(fields);
    return !fieldsValues.includes(false);

    // if (fieldsValues.includes(false)) {
    //     return false;
    // }
    // if (!fieldsValues.includes(false) ) {
    //     return true;
    // }
}

/**
 * Launch registration confirmation if all inputs are valid
 */
function confirmMessage() {
    // successMessage.style.display = "block";
    toggleForm()
}

