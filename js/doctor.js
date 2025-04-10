// Select password input and icons for both password fields
const passCode = document.getElementById("passcode");
const faEye = document.getElementById("fa-eye");
const faEyeSlash = document.getElementById("fa-eye-slash");
const passConfirm = document.getElementById("code"); // Confirm password input
const faEyeConfirm = document.getElementById("eye");
const faEyeSlashConfirm = document.getElementById("eye-slash");

// Toggle password visibility for "passcode"
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
faEye.addEventListener("click", togglePasswordIcon);
faEyeSlash.addEventListener("click", togglePasswordIcon);

// Toggle password visibility for "confirm password"
const toggleConfirmPasswordIcon = () => {
  if (passConfirm.type === "password") {
    passConfirm.type = "text";
    faEyeSlashConfirm.style.display = "none";
    faEyeConfirm.style.display = "block";
  } else {
    passConfirm.type = "password";
    faEyeSlashConfirm.style.display = "block";
    faEyeConfirm.style.display = "none";
  }
};
faEyeConfirm.addEventListener("click", toggleConfirmPasswordIcon);
faEyeSlashConfirm.addEventListener("click", toggleConfirmPasswordIcon);

// Accessing the input fields
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const mlc = document.getElementById("mlc");
const address = document.getElementById("address");
const specialty = document.getElementById("specialty");
const msa = document.getElementById("msa");
const years = document.getElementById("years");
const gender = document.getElementById("gender");
const password = document.getElementById("passcode");
const confirmPassword = document.getElementById("code");
const formSubmit = document.getElementById("form-submit");

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted");

  // Getting the values of the input fields
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;
  const genderValue = gender.value;
  const telValue = tel.value;
  const addressValue = address.value;
  const mlcValue = mlc.value;
  const specialtyValue = specialty.value;
  const msaValue = msa.value;
  const yearsValue = years.value;

  // Validation for empty fields
  if (
    firstNameValue === "" ||
    lastNameValue === "" ||
    emailValue === "" ||
    passwordValue === "" ||
    confirmPasswordValue === "" ||
    telValue === "" ||
    addressValue === "" ||
    msaValue === "" ||
    mlcValue === "" ||
    specialtyValue === "" ||
    yearsValue === "" 
  ) {
    console.log("Validation failed: Empty fields");
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please fill in all fields",
      showConfirmButton: false,
      timer: 1500,
    });
    return; // Stop further execution if any field is empty
  }

  // Password length validation
  if (passwordValue.length < 8 || passwordValue.length > 20) {
    console.log("Validation failed: Password length");
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Password must be between 8 and 20 characters",
      showConfirmButton: false,
      timer: 1500,
    });
    return; // Stop further execution if password length is invalid
  }

  // Password match validation
  if (passwordValue !== confirmPasswordValue) {
    console.log("Validation failed: Password mismatch");
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Passcode does not match",
      showConfirmButton: false,
      timer: 1500,
    });
    return; // Stop further execution if passwords do not match
  }

  // Saving the data to local storage (only if everything is valid)
  localStorage.setItem("firstName", firstNameValue);
  localStorage.setItem("lastName", lastNameValue);
  localStorage.setItem("email", emailValue);
  localStorage.setItem("password", passwordValue);
  localStorage.setItem("confirmPassword", confirmPasswordValue);
  localStorage.setItem("gender", genderValue);
  localStorage.setItem("tel", telValue);
  localStorage.setItem("address", addressValue);
  localStorage.setItem("mlc", mlcValue);
  localStorage.setItem("msa", msaValue);
  localStorage.setItem("specialty", specialtyValue);
  localStorage.setItem("years", yearsValue);

  // If everything is valid, display success message and redirect
  console.log("Validation passed, registration successful");
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Registration Successful",
    showConfirmButton: false,
    timer: 1500,
  });

  setTimeout(() => {
    window.location.href = "doctorlogin.html"; // Redirect to login page after successful registration
  }, 3000);
};

// Add event listener to the form submit
formSubmit.addEventListener("submit", handleSubmit);

// Handle the header register button click event (e.g., if user wants to go back to register page)
const headerRegisterBtn = document.getElementById("header-register-btn");
headerRegisterBtn.addEventListener("click", (e) => {
  // Check if the form is empty
  if (
    firstName.value === "" ||
    lastName.value === "" ||
    email.value === "" ||
    password.value === "" ||
    confirmPassword.value === "" ||
    tel.value === "" ||
    address.value === "" ||
    mlc.value === "" ||
    msa.value === "" ||
    specialty.value === "" ||
    years.value === ""
  ) {
    // Display the alert if form is incomplete
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Empty Form, Please Register before Signing in",
      showConfirmButton: true,
    });
    console.log("Form not filled out, alert displayed");
    return; // Stop navigation if form is not filled
  }
});
