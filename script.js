const contactForm =
document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener(
"submit",
function(event){

event.preventDefault();

const name =
document.getElementById("name").value.trim();

const email =
document.getElementById("email").value.trim();

const subject =
document.getElementById("subject").value.trim();

const message =
document.getElementById("message").value.trim();

const successMessage =
document.getElementById("successMessage");

if(
name === "" ||
email === "" ||
subject === "" ||
message === ""
){

alert("Please fill all fields.");

return;

}

const emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

alert("Please enter a valid email.");

return;

}

successMessage.innerText =
"Message sent successfully!";

contactForm.reset();

}
);

}