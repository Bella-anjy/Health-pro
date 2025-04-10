// Select password input and icons
const passCode = document.getElementById("passcode");
const faEye = document.getElementById("fa-eye");
const faEyeSlash = document.getElementById("fa-eye-slash");
const loginBtn = document.getElementById("login-btn");

// input password field

const togglePasswordIcon = () => {
  if (passCode.type === "password") {
    passCode.type = "text";
    faEyeSlash.style.display = "none";
    faEye.style.display = "block";
  } else {
    passCode.type = "password";
    faEyeSlash.style.display = "block";
    faEye.style.display = "none";
  }
};
// togglePasswordIcon()
faEye.addEventListener("click", togglePasswordIcon);
faEyeSlash.addEventListener("click", togglePasswordIcon);

const code = document.getElementById("code");
const eye = document.getElementById("eye");
const eyeSlash = document.getElementById("eye-slash");

const toggleCodeIcon = () => {
  if (code.type === "password") {
    code.type = "text";
    eyeSlash.style.display = "none";
    eye.style.display = "block";
  } else {
    code.type = "password";
    eyeSlash.style.display = "block";
    eye.style.display = "none";
  }
};

eye.addEventListener("click", toggleCodeIcon);
eyeSlash.addEventListener("click", toggleCodeIcon);

// Accessing the input elementby ID

const email = document.getElementById("email");
const password = document.getElementById("passcode");
const passward = document.getElementById("code");
// const submitButton = document.getElementById("reg-btn");
const formSubmit = document.getElementById("form-submit");

// form submission

// saving the data to local storage
localStorage.getItem("email");
localStorage.getItem("password");
localStorage.getItem("passward");

// validating the data
const handleSubmit = (e) => {
  e.preventDefault();

  const emailValue = email.value;
  const passwordValue = password.value;
  const passwardValue = passward.value;

  if (emailValue === "" || passwordValue === "" || passwardValue === "") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please fill in all fields",
      showConfirmButton: false,
      timer: 1500,
    });
    console.log("Empty fields detected, form not submitted");
    return; // Stop further execution if any field is empty
  } else if (passwordValue.length < 8 || passwordValue.length > 20) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Password must be between 8 and 20 characters",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  if (passwordValue !== passwardValue) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Password does not match",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }
  loginBtn.classList.add("loading");
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 3000);
};
// Adding event listener to the form submit button
formSubmit.addEventListener("submit", handleSubmit);

const headerLoginBtn = document.getElementById("header-login-btn");

// Event listener for the header login button click
headerLoginBtn.addEventListener("click", (e) => {
  // Check if the form fields are empty
  if (email.value === "" || password.value === "" || passward.value === "") {
    // Display the alert
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please fill out the form to sign in",
      showConfirmButton: true,
    });
    console.log("Form not filled out, alert displayed");
    return; // Stop further execution if any field is empty
  } else {
    // If the form is filled, proceed with the login process
    handleSubmit(e);
  }
});
