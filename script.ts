//listing element
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    //type assertion
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement
const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const phoneElement = document.getElementById('phone') as HTMLInputElement;
const educationElement = document.getElementById('education') as HTMLInputElement;
const experienceElement = document.getElementById('experience') as HTMLInputElement;
const skillsElement = document.getElementById('skills') as HTMLInputElement;

//putting conditions:
if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {  
const name = nameElement.value;
const email = emailElement.value;
const phone = phoneElement.value;
const education = educationElement.value;
const experience = experienceElement.value;
const skills = skillsElement.value;

// elements of profile image
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile): '';

//moving on to making output of resume
const resumeOutput = `

<h2>Resume</h2>

${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Image" class="profilePicture">` : ''}
<p><strong>Name:</strong> <span id= "edit-name" class= "editable"> ${name} </span> <p>
<p><strong>Email:</strong> <span id= "edit-email" class= "editable"> ${email} </span> <p>
<p><strong>Phone Number:</strong> <span id= "edit-phone" class= "editable"> ${phone} </span> <p>

<h3>Education</h3>
<p id= "edit-education" class= "editable">${education}</p>

<h3>Experience</h3>
<p id= "edit-experience" class= "editable">${experience}</p>

<h3>Skills</h3>
<p id= "edit-skills" class= "editable">${skills}</p>
`;

const resumeOutputElement = document.getElementById('resumeOutput')
if (resumeOutputElement) {
resumeOutputElement.innerHTML = resumeOutput
makeEditable();
}
} else {
console.error('one or more elements of output are not present')
}
});


//making a function for makeEditable:
function makeEditable(){
const editableElement = document.querySelectorAll('.editable');
editableElement.forEach(element => {
element.addEventListener('click', function() {
const currentElement = element as HTMLElement;
const currentValue = currentElement.textContent || "";

//replacing content:
if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
const input = document.createElement('input')
input.type = 'text'
input.value = currentValue
input.classList.add('editing-input')


input.addEventListener('blur', function(){
currentElement.textContent = input.value;
currentElement.style.display = 'inline'
input.remove()
})


currentElement.style.display = 'none'
currentElement.parentNode?.insertBefore(input, currentElement)
input.focus()
}
})
})
};