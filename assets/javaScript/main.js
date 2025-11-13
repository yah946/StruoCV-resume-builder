// import html2pdf from 'html2pdf.js';
let steps = document.getElementById("steps");
let circles = document.querySelectorAll(".circle");
let progressInd = document.getElementById("ind");
let progressWidth = ["0%", "20%", "35%", "50%", "65%", "80%", "100%"];
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let form = document.getElementById("form");
let counter = 0;
let formPart = document.querySelectorAll(".form__part");
const downloadBtn = document.getElementById("downloadButton");

//Global variable
let base64base;

function UnshowForms() {
  for (i = 1; i < formPart.length; i++) {
    formPart[i].style.display = "none";
  }
}
UnshowForms();
const NameInput = document.getElementById("NameInput");
const LastInput = document.getElementById("LastInput");
const FirstNameError = document.getElementById("FirstNameError");
const LastNameError = document.getElementById("LastNameError");
const titleInput = document.getElementById("titleInput");
const titleError = document.getElementById("titleError");
const BirthPlaceInput = document.getElementById("BirthPlaceInput");
const BirthPlaceError = document.getElementById("BirthPlaceError");
const NationalityInput = document.getElementById("NationalityInput");
const NationalityError = document.getElementById("NationalityError");
const cityInput = document.getElementById("cityInput");
const cityError = document.getElementById("cityError");
const statusInput = document.getElementById("statusInput");
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
const proTitleInput = document.getElementById("proTitleInput");
const proTitleError = document.getElementById("proTitleError");
const schoolInput = document.getElementById("schoolInput");
const cityInputSch = document.getElementById("cityInputSch");
const schoolError = document.getElementById("schoolError");
const cityErrorSch = document.getElementById("cityErrorSch");
const schDateInput = document.getElementById("schDateInput");
const schDateError = document.getElementById("schDateError");
const certInput = document.getElementById("certInput");
const certError = document.getElementById("certError");
const mission = document.getElementById("mission");
const missionError = document.getElementById("missionError");
const desProject = document.getElementById("descriptionOfProject");
const desProjectError = document.getElementById("descriptionOfProjectError");
const durationInput = document.getElementById("durationInput");
const durationError = document.getElementById("durationError");
const quillError = document.getElementById("quillError");
const quill = new Quill("#editor", {
  theme: "snow",
});
let patterns = {
  text: /^[A-Za-z\s{1}]{3,30}$/,
  email: /^[\w.-]{3,30}@[\w.-]{5,10}\.[a-zA-Z]{2,5}$/,
  phone: /^0{1}[6-7][0-9]{8}$/,
  link: /^(?:https?:\/\/)?(?:www\.)?[\w.-]{2,}\.[a-z]{2,}\/[A-Za-z0-9._-]{3,15}$/i,
  date: /^[0-9]{4}\-[0-9]{4}/,
  description: /^[a-zA-Z0-9_]{20,1000}/,
};
function textVerification(input, errorSpan) {
  if (patterns.text.test(input.value.trim())) {
    input.style.border = "2px #5C9310 solid";
    errorSpan.innerHTML = "";
    return true;
  } else {
    errorSpan.textContent = "Error";
    errorSpan.style.color = "#D10007";
    errorSpan.style.fontSize = "12px";
    input.style.border = "2px #d10007 solid";
    return false;
  }
}
function emailVerification(input, errorSpan) {
  if (patterns.email.test(input.value.trim())) {
    input.style.border = "2px #5C9310 solid";
    errorSpan.textContent = "";
    return true;
  } else {
    errorSpan.innerHTML = "Please enter a valid email address.";
    errorSpan.style.color = "#D10007";
    errorSpan.style.fontSize = "12px";
    input.style.border = "#D10007 solid 2px";
    return false;
  }
}
function phoneVerification(input, errorSpan) {
  if (patterns.phone.test(input.value.trim())) {
    input.style.border = "2px #5C9310 solid";
    errorSpan.innerHTML = "";
    return true;
  } else {
    errorSpan.innerHTML = "Please enter a valid mobile number.";
    errorSpan.style.color = "#D10007";
    errorSpan.style.fontSize = "12px";
    input.style.border = "#D10007 solid 2px";
    return false;
  }
}
function linkVerification(input, errorSpan) {
  if (patterns.link.test(input.value.trim())) {
    input.style.border = "2px #5C9310 solid";
    errorSpan.innerHTML = "";
    return true;
  } else {
    errorSpan.innerHTML = "Incorrect link";
    errorSpan.style.color = "#D10007";
    errorSpan.style.fontSize = "12px";
    input.style.border = "#D10007 solid 2px";
    return false;
  }
}
function desVerification(input, errorSpan) {
  if (patterns.description.test(input.value.trim())) {
    errorSpan.innerHTML = "";
    input.style.border = "2px #5C9310 solid";

    return true;
  } else {
    errorSpan.innerHTML = "The description must be between 20 to 1000 words";
    errorSpan.style.color = "#D10007";
    errorSpan.style.fontSize = "12px";
    input.style.border = "#D10007 solid 2px";
    return false;
  }
}
function dateVerification(input, errorSpan) {
  if (patterns.date.test(input.value.trim())) {
    input.style.border = "2px #5C9310 solid";
    errorSpan.innerHTML = "";
    return true;
  } else {
    errorSpan.innerHTML = "Please enter a valid duration";
    errorSpan.style.color = "#D10007";
    errorSpan.style.fontSize = "12px";
    input.style.border = "#D10007 solid 2px";
    return false;
  }
}
function firstForm() {
  return (
    textVerification(NameInput, FirstNameError) &&
    textVerification(LastInput, LastNameError) &&
    textVerification(titleInput, titleError)
  );
}
function second() {
  return (
    emailVerification(emailInput, emailError) &&
    phoneVerification(phoneInput, phoneError) &&
    linkVerification(githubInput, githubError) &&
    linkVerification(linkedlnInput, linkedlnError)
  );
}
function third() {
  return 
}
function updateStatus() {
  nextBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (!firstForm() && counter == 0) return;
    if (!second() && counter == 1) return;
    if (counter >= 0 && counter < 7) {
      formPart[counter].style.display = "none";
      counter++;
      formPart[counter].style.display = "block";
      progressInd.style.width = progressWidth[counter];
      circles[counter].className = "active circle";
      collectData();
    }
    if (counter == 7) {
      nextBtn.classList.add("hidden");
    } else {
      nextBtn.classList.remove("hidden");
    }
    if (counter == 0) {
      prevBtn.classList.add("cursor-not-allowed");
      prevBtn.classList.remove("cursor-pointer");
    } else {
      prevBtn.classList.remove("cursor-not-allowed");
      prevBtn.classList.add("cursor-pointer");
    }
  });
  prevBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (counter > 0 && counter <= 8) {
      formPart[counter].style.display = "none";
      counter--;
      formPart[counter].style.display = "block";
      progressInd.style.width = progressWidth[counter];
      circles[counter + 1].className = "circle";
    }
    if (counter == 6) {
      nextBtn.classList.add("hidden");
    } else {
      nextBtn.classList.remove("hidden");
    }
    if (counter == 0) {
      prevBtn.classList.add("cursor-not-allowed");
      prevBtn.classList.remove("cursor-pointer");
    } else {
      prevBtn.classList.remove("cursor-not-allowed");
      prevBtn.classList.add("cursor-pointer");
    }
  });
}
updateStatus();

const content = document.getElementById('template');
const opt = {
    margin:       10, // mm
    filename:     'cv.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
downloadBtn.addEventListener('click',(e)=>{
        downloadBtn.textContent = 'generation en cours';
        downloadBtn.style.background = '#91E61A';
        html2pdf().set(opt).from(content).save().then(() => {
      downloadBtn.textContent = 'Download';
      downloadBtn.style.background = '#91E61A';
    });
    })

const addButtonLinks = document.getElementById("addButtonLinks");
const links = document.getElementById("links");
addButtonLinks.addEventListener("click", function (e) {
  e.preventDefault();
  links.innerHTML += `
       <div class="flex justify-between items-center mt-8">
          <label class="text-nowrap mr-0.5" for="emailInput">Website's Name</label>
          <input
            placeholder="Example"
            id="emailInput"
            type="email"
            name="email"
            class="border bg-[#E8F0FF] mr-4 py-1.5 w-full"
          />
          <span id="emailError"></span>
          <label class="text-nowrap mr-0.5" for="phoneInput">Website's link</label>
          <input
            placeholder="example.com/username"
            id="phoneInput"
            type="text"
            name="phone"
            class="border bg-[#E8F0FF] py-1.5 w-full"
          />
          <span id="phoneError"></span>
        </div>
  `;
});

const addButtonEX = document.getElementById("addButtonEX");
const NewEx = document.getElementById("NewEx");
addButtonEX.addEventListener("click", function (e) {
  e.preventDefault();
  NewEx.innerHTML += `
       <div class="flex items-center">
            <div class="w-full">
              <label for="exTitleInput">Title</label><br>
              <input
                placeholder="Experience"
                id="exTitleInput"
                type="text"
                name="Professional_Experience"
                class="relative border py-1.5 bg-[#E8F0FF] w-64"
              /><br>
              <span id="exTitleError"></span>
            </div>
            <!-- Date Form: Month XXXX- MonthXXXX -->
            <div class="w-full">
              <label for="exDateInput">Date</label><br>
              <input
                placeholder="Sept 2024- May 2025"
                id="exDateInput"
                type="text"
                name="DateOfProfessionalExperience"
                class="border py-1.5 bg-[#E8F0FF] w-64"
              /><br>
              <span id="exDateError"></span>
            </div>
            <div class="w-full">
              <label for="exPosteInput">Poste</label><br>
              <input
                placeholder="team leader"
                id="exPosteInput"
                type="text"
                name="PosteOfProfessionalExperience"
                class="mr-4 border py-1.5 bg-[#E8F0FF] w-full"
              /><br>
              <span id="exPosteError"></span>
            </div>
          </div>
          <div class="mt-4">
            <label for="mission">Main Missions</label>
            <textarea
              placeholder="Développeur full stack en formation..."
              name="mission"
              id="mission"
              class="border w-full h-24 bg-[#E8F0FF]"
            ></textarea>
            <span id="missionError"></span>
          </div>
  `;
});
const NewPro = document.getElementById("NewPro");
const addButtonProject = document.getElementById("addButtonProject");
addButtonProject.addEventListener("click", function (e) {
  e.preventDefault();
  NewPro.innerHTML += `
  <hr class="mt-4 mb-4">
  <div class="flex items-center gap-8">
            <div class="w-full">
              <label for="proTitleInput">Title</label>
              <input
                placeholder="Struo-Cv"
                id="proTitleInput"
                type="text"
                name="Completed_Project"
                class="border py-1.5 bg-[#E8F0FF] w-full"
              />
              <span id="proTitleError"></span>
            </div>
            <div class="w-full">
              <label for="ProDateInput">Date</label>
              <input
                placeholder="Nov 2025"
                id="ProDateInput"
                type="text"
                name="DateOfCompletedProject"
                class="border py-1.5 bg-[#E8F0FF] w-full"
              />
              <span id="yearError"></span>
            </div>
          </div>
          <div class="mt-4">
            <label for="descriptionOfProject">Description</label>
            <textarea
              placeholder="Online CV Generator..."
              name="descriptionOfProject"
              id="descriptionOfProject"
              class="border w-full h-16 bg-[#E8F0FF]"
            ></textarea>
            <span id="descriptionOfProjectError"></span>
  `;
});

const NewSchool = document.getElementById("NewSchool");
const addSchool = document.getElementById("addSchool");
addSchool.addEventListener("click", function (e) {
  e.preventDefault();
  NewSchool.innerHTML += `
  <div class="flex items-center gap-8">
  <div class="w-full">
            <label for="schoolInput">School</label>
            <input
              placeholder="Tarik Ben Ziyad"
              id="schoolInput"
              name="School"
              type="text"
              class="border py-1.5 bg-[#E8F0FF] w-full"
            />
            <span id="schoolError"></span>
          </div>
          <div class="w-full">
            <label for="cityInputSch">City</label>
            <input
              placeholder="Khenifra"
              id="cityInputSch"
              type="text"
              name="SchoolCity"
              class="border py-1.5 bg-[#E8F0FF] w-full"
            />
            <span id="cityErrorSch"></span>
          </div>
          <!-- Month XXXX-MonthXXXX -->
          <div class="w-full">
            <label for="schDateInput">Date</label>
            <input
              placeholder="Sept 2024- Jun 2025"
              id="schDateInput"
              type="text"
              name="SchoolDate"
              class="border py-1.5 bg-[#E8F0FF] w-full"
            />
            <span id="schDateError"></span>
          </div>
          </div>
  `;
});

const NewCert = document.getElementById("NewCert");
const addCert = document.getElementById("addCert");
addCert.addEventListener("click", function (e) {
  e.preventDefault();
  NewCert.innerHTML += `
  <div class="flex items-center gap-8">
          <div class="w-full">
            <label for="certInput">Certification Name</label>
            <input
              placeholder="CCNA"
              id="certInput"
              type="text"
              name="Certification"
              class="border py-1.5 bg-[#E8F0FF] w-full"
            />
            <span id="certError"></span>
          </div>
          <div class="w-full">
            <!-- an et demi/ 1.4 an / 10 ans / 4 mois / 2 mois -->
            <label for="durationInput">Duration</label>
            <input
              placeholder="an et demi/1.4 an/ 10 ans/ 4 mois/ 2 mois"
              id="durationInput"
              type="text"
              name="Duration"
              class="border py-1.5 bg-[#E8F0FF] w-full"
            />
            <span id="durationError"></span>
          </div>
          <!-- XXXX -->
          <div>
            <label for="certDateInput">Date</label>
            <input
              placeholder="2025"
              id="certDateInput"
              type="number"
              name="certDate"
              class="border py-1.5 bg-[#E8F0FF] w-16"
            />
            <span id="yearError"></span>
          </div>
        </div>
  `;
});

const NewLang = document.getElementById("NewLang");
const addLang = document.getElementById("addLang");
addLang.addEventListener("click", function (e) {
  e.preventDefault();
  NewLang.innerHTML += `
  <div class="mt-4 flex gap-8">
          <div>
            <label for="langInput">Languages</label>
            <input
              placeholder="English/French..."
              id="langInput"
              type="text"
              name="langSkills"
              class="border py-1.5 bg-[#E8F0FF] w-56"
            />
            <span id="###"></span>
          </div>
          <div class="w-full">
            <label for="levelInput">level</label>
            <input
              placeholder="Notion/Professional/A1/C2/beginner..."
              id="levelInput"
              type="text"
              name="level"
              class="border py-1.5 bg-[#E8F0FF] w-full"
            />
            <span id="sizeError"></span>
          </div>
        </div>
  `;
});

const imageUpload = document.getElementById("imageUpload");
const profileImg = document.getElementById("profileImg");
const labelImage = document.querySelector(".labelImage");

imageUpload.onchange = function (e) {
  const file = imageUpload.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function () {
    base64base = reader.result;
    profileImg.src = reader.result;
    profileImg.className = "absolute h-36 w-36 cursor-pointer";
    labelImage.style.opacity = "0%";
  };
  reader.readAsDataURL(file);
};

const day = document.getElementById("Day");
const month = document.getElementById("Month");
const year = document.getElementById("Year");
const techLangInput = document.getElementById("techLangInput");
const techFrWInput = document.getElementById("techFrWInput");
const techDBInput = document.getElementById("techDBInput");
const techToolsInput = document.getElementById("techToolsInput");
const MethInput = document.getElementById("MethInput");
const ProDateInput = document.getElementById("ProDateInput");
const certDateInput = document.getElementById("certDateInput");
const langInput = document.getElementById("langInput");
const levelInput = document.getElementById("levelInput");
const TranversalesSkills = document.getElementById("TranversalesSkills");
const hobbyInput = document.getElementById("hobbyInput");

//Save Data
let dataBase = [];
function collectData() {
  let personnelData = {
    title: titleInput.value,
    name: {
      firstname: NameInput.value,
      lastname: LastInput.value,
    },
    Birth: {
      day: day.value,
      month: month.value,
      year: year.value,
      place: BirthPlaceInput.value,
    },
    nationalit: NationalityInput.value,
    status: statusInput.value,
    city: cityInput.value,
  };
  let contactData = {
    email: emailInput.value,
    phone: phoneInput.value,
    linkedln: linkedlnInput.value,
    github: githubInput.value,
  };
  let technicalSkills = {
    description: quill.root.innerHTML,
    language: techLangInput.value,
    framework: techFrWInput.value,
    database: techDBInput.value,
    tools: techToolsInput.value,
    meth: MethInput.value,
  };
  let proExperience = {
    Title: exTitleInput.value,
    Post: exPosteInput.value,
    date: exDateInput.value,
    mission: mission.value,
  };
  let CompletedProjects = {
    Title: proTitleInput.value,
    date: ProDateInput.value,
    Descrption: desProject.value,
  };
  let Eductaion = {
    school: schoolInput.value,
    city: cityInputSch.value,
    date: schDateInput.value,
  };
  let Certifications = {
    Name: certInput.value,
    Duration: durationInput.value,
    date: certDateInput.vlaue,
  };
  let Skills = {
    tranversalesSkills: TranversalesSkills.value,
    hobbies: hobbyInput.value,
    lang: langInput.value,
    level: levelInput.value,
  };
  dataBase.push(
    personnelData,
    contactData,
    technicalSkills,
    proExperience,
    CompletedProjects,
    Eductaion,
    Certifications,
    Skills
  );
  localStorage.setItem("allInfo", JSON.stringify(dataBase));
  console.log(localStorage.allInfo);
}
