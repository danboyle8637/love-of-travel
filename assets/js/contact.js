const contactForm = document.querySelector(".contact-form");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");
const contactButton = document.querySelector(".form-button");

let firstName = "";
let emailAddress = "";
let message = "";

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("first name: ", firstName);
    console.log("email address: ", emailAddress);
    console.log("message: ", message);
  });

  nameField.addEventListener("input", (event) => {
    firstName = event.target.value;
  });

  emailField.addEventListener("input", (event) => {
    emailAddress = event.target.value;
  });

  messageField.addEventListener("input", (event) => {
    message = event.target.value;
  });
}
