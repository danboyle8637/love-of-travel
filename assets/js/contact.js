const contactForm = document.querySelector(".contact-form");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");
const contactButton = document.querySelector(".form-button");

let firstName = "";
let emailAddress = "";
let message = "";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;

    console.log("first name: ", firstName);
    console.log("email address: ", emailAddress);
    console.log("message: ", message);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        firstName: firstName,
        emailAddress: emailAddress,
        message: message,
      }),
    })
      .then(() => {
        window.location = form.getAttribute("action")
      })
      .catch((error) => alert("Something went wrong. Try again!"));
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
