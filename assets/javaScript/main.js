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

let patterns = {
  text: /^[A-Za-z\S]{3,30}$/,
  email: /^[\w.-]{3,30}@[\w.-]{5,10}\.[a-zA-Z]{2,5}$/,
  phone: /^0{1}[6-7][0-9]{8}$/,
};
function textVerification(input, errorSpan) {
  if (patterns.text.test(input.value.trim())) {
    input.style.border = "2px #5C9310 solid";
    errorSpan.innerHTML = "";
  } else {
    input.style.innerHTML = "Error";
    errorSpan.style.color = "#D10007";
    errorSpan.style.fontSize = "12px";
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
function showErrors(){
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        //text Verification
        textVerification(NameInput, FirstNameError);
        textVerification(LastInput, LastNameError);
        textVerification(BirthPlaceInput,BirthPlaceError);
        textVerification(NationalityInput,NationalityError);
        textVerification(cityInput,cityError);
        //email Verification
        emailVerification(emailInput,emailError);
        //phone Verification
        phoneVerification(phoneInput,phoneError)
    });
}
showErrors();
