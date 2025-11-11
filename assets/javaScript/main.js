let steps = document.getElementById("steps");
let circles = document.querySelectorAll(".circle");
let progressInd = document.getElementById("ind");
let progressWidth = ["0%", "20%", "35%", "50%", "65%", "80%", "100%"];
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let form = document.getElementById("form");
let counter = 0;
let formPart = document.querySelectorAll(".form__part");
let coffe = document.querySelector("#cafe");

function UnshowForms() {
  for (i = 1; i < formPart.length; i++) {
    formPart[i].style.display = "none";
  }
}
// UnshowForms();
// function updateStatus() {
//     nextBtn.addEventListener('click',function(e){
//         e.preventDefault();
//         if(counter>=0 && counter<6){
//             formPart[counter].style.display='none';
//             counter++;
//             formPart[counter].style.display='block';
//             progressInd.style.width=progressWidth[counter];
//             circles[counter].className='active circle';
//         }
//     })
//         prevBtn.addEventListener('click',function(e){
//         e.preventDefault();
//         if(counter>0 && counter<=7){
//             formPart[counter].style.display='none';
//             counter--;
//             formPart[counter].style.display='block';
//             progressInd.style.width=progressWidth[counter];
//             circles[counter+1].className='circle';
//         }
//     })

// }
// updateStatus();

const NameInput = document.getElementById("NameInput");
const LastInput = document.getElementById("LastInput");
const FirstNameError = document.getElementById("FirstNameError");
const LastNameError = document.getElementById("LastNameError");
const BirthPlaceInput = document.getElementById("BirthPlaceInput");
const BirthPlaceError = document.getElementById("BirthPlaceError");
const NationalityInput = document.getElementById("NationalityInput");
const NationalityError = document.getElementById("NationalityError");
const cityInput = document.getElementById("cityInput");
const cityError = document.getElementById("cityError");
const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");
const phoneInput = document.getElementById("phoneInput");
const phoneError = document.getElementById("phoneError");
const linkedlnInput = document.getElementById("linkedlnInput");
const linkedlnError = document.getElementById("linkedlnError");
const githubInput = document.getElementById("githubInput");
const githubError = document.getElementById("githubError");
const exTitleInput = document.getElementById("exTitleInput");
const exTitleError = document.getElementById("exTitleError");
const exPosteInput = document.getElementById("exPosteInput");
const exPosteError = document.getElementById("exPosteError");
const exDateInput = document.getElementById("exDateInput");
const exDateError = document.getElementById("exDateError");
const proTitleInput = document.getElementById('proTitleInput');
const proTitleError = document.getElementById('proTitleError');
const schoolInput = document.getElementById('schoolInput');
const cityInputSch = document.getElementById('cityInputSch');
const schoolError = document.getElementById('schoolError');
const cityErrorSch = document.getElementById('cityErrorSch');
const schDateInput = document.getElementById('schDateInput');
const schDateError = document.getElementById('schDateError');
const certInput = document.getElementById('certInput');
const certError = document.getElementById('certError');
const mission = document.getElementById('mission');
const missionError = document.getElementById('missionError');
const desProject = document.getElementById('descriptionOfProject');
const desProjectError = document.getElementById('descriptionOfProjectError');
const durationInput = document.getElementById('durationInput');
const durationError = document.getElementById('durationError');

let patterns = {
  text: /^[A-Za-z]{3,30}$/,
  email: /^[\w.-]{3,30}@[\w.-]{5,10}\.[a-zA-Z]{2,5}$/,
  phone: /^0{1}[6-7][0-9]{8}$/,
  link:/^(?:https?:\/\/)?(?:www\.)?[\w.-]{2,}\.[a-z]{2,}\/[A-Za-z0-9._-]{3,15}$/i,
  date: /^[0-9]{4}\-[0-9]{4}/,
  description: /^[a-zA-Z0-9_]{20,1000}/,
};
function textVerification(input, errorSpan) {
  if (patterns.text.test(input.value.trim())) {
    input.style.border = "2px #5C9310 solid";
    errorSpan.innerHTML = "";
  } else {
    errorSpan.textContent = "Error";
    errorSpan.style.color = "#D10007";
    errorSpan.style.fontSize = "12px";
    input.style.border="2px #d10007 solid"
  }
}
function emailVerification(input, errorSpan){
    if (patterns.email.test(input.value.trim())) {
    input.style.border = "2px #5C9310 solid";
    errorSpan.innerHTML = "";
  } else {
    errorSpan.innerHTML = "Please enter a valid email address.";
    errorSpan.style.color = "#D10007";
    errorSpan.style.fontSize = "12px";
    input.style.border = "#D10007 solid 2px";
  }
}
function phoneVerification(input, errorSpan){
    if (patterns.phone.test(input.value.trim())) {
    input.style.border = "2px #5C9310 solid";
    errorSpan.innerHTML = "";
  } else {
    errorSpan.innerHTML = "Please enter a valid mobile number.";
    errorSpan.style.color = "#D10007";
    errorSpan.style.fontSize = "12px";
    input.style.border = "#D10007 solid 2px";
  }
}
function linkVerification(input, errorSpan){
    if (patterns.link.test(input.value.trim())) {
    input.style.border = "2px #5C9310 solid";
    errorSpan.innerHTML = "";
  } else {
    errorSpan.innerHTML = "Incorrect link";
    errorSpan.style.color = "#D10007";
    errorSpan.style.fontSize = "12px";
    input.style.border = "#D10007 solid 2px";
  }
}
function desVerification(input, errorSpan){
    if (patterns.description.test(input.value.trim())) {
    input.style.border = "2px #5C9310 solid";
    errorSpan.innerHTML = "";
  } else {
    errorSpan.innerHTML = "The description must be between 20 to 1000 words";
    errorSpan.style.color = "#D10007";
    errorSpan.style.fontSize = "12px";
    input.style.border = "#D10007 solid 2px";
  }
}
function dateVerification(input, errorSpan){
    if (patterns.date.test(input.value.trim())) {
    input.style.border = "2px #5C9310 solid";
    errorSpan.innerHTML = "";
  } else {
    errorSpan.innerHTML = "Please enter a valid duration (example:2024-2025)";
    errorSpan.style.color = "#D10007";
    errorSpan.style.fontSize = "12px";
    input.style.border = "#D10007 solid 2px";
  }
}
function showErrors(){
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        //text Verification
        textVerification(NameInput, FirstNameError);
        textVerification(LastInput, LastNameError);
        textVerification(BirthPlaceInput,BirthPlaceError);
        textVerification(NationalityInput,NationalityError);
        textVerification(cityInput,cityError);
        textVerification(exTitleInput,exTitleError);
        textVerification(exPosteInput,exPosteError);
        textVerification(proTitleInput,proTitleError);
        textVerification(schoolInput,schoolError);
        textVerification(cityInputSch,cityErrorSch);
        textVerification(certInput,certError);
        textVerification(durationInput,durationError);
        //email Verification
        emailVerification(emailInput,emailError);
        //phone Verification
        phoneVerification(phoneInput,phoneError);
        //link Verification
        linkVerification(linkedlnInput,linkedlnError);
        linkVerification(githubInput,githubError);
        //date Verification XXXX-XXXX
        dateVerification(exDateInput,exDateError);
        dateVerification(schDateInput,schDateError);
        //description Error
        desVerification(desProject,desProjectError);
        desVerification(mission,missionError);
    });
}
showErrors();


const addButtonLinks = document.getElementById('addButtonLinks');
const links = document.getElementById('links');
