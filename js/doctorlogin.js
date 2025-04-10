// Select password input and icons
const passCode = document.getElementById("passcode");
const faEye = document.getElementById("fa-eye");
const faEyeSlash = document.getElementById("fa-eye-slash");
const code = document.getElementById("code");
const eye = document.getElementById("eye");
const eyeSlash = document.getElementById("eye-slash");

// Toggle visibility for passcode
const togglePasswordIcon = () => {
  const isPassword = passCode.type === "password";
  passCode.type = isPassword ? "text" : "password";
  faEye.style.display = isPassword ? "block" : "none";
  faEyeSlash.style.display = isPassword ? "none" : "block";
};
faEye.addEventListener("click", togglePasswordIcon);
faEyeSlash.addEventListener("click", togglePasswordIcon);

// Toggle visibility for confirm code
const toggleCodeIcon = () => {
  const isPassword = code.type === "password";
  code.type = isPassword ? "text" : "password";
  eye.style.display = isPassword ? "block" : "none";
  eyeSlash.style.display = isPassword ? "none" : "block";
};
eye.addEventListener("click", toggleCodeIcon);
eyeSlash.addEventListener("click", toggleCodeIcon);

// Form and inputs
const email = document.getElementById("email");
const password = document.getElementById("passcode");
const confirmPassword = document.getElementById("code");
const staffid = document.getElementById("staffid");
const formSubmit = document.getElementById("form-submit");

// Save data to local storage
localStorage.getItem("email");
localStorage.getItem("password");
localStorage.getItem("confirmPassword");
localStorage.getItem("staffid");
// Validate data

// Handle form submit
const handleSubmit = (e) => {
  e.preventDefault();

  const emailValue = email.value;
  const passwordValue = password.value;
  const staffidValue = staffid.value;
  const confirmPasswordValue = confirmPassword.value;

  if (!emailValue || !passwordValue || !confirmPasswordValue || !staffidValue) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please fill in all fields",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  if (passwordValue.length < 8 || passwordValue.length > 20) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Password must be between 8 and 20 characters",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  if (passwordValue !== confirmPasswordValue) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Passwords do not match",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  // Show success alert before redirect
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Login Successful",
    showConfirmButton: false,
    timer: 1500,
  });

  setTimeout(() => {
    window.location.href = "staff dashboard.html";
  }, 1600); // Give SweetAlert time to show
};

formSubmit.addEventListener("submit", handleSubmit);

// Optional: Header login navigation with check
const headerLoginBtn = document.getElementById("header-login-btn");
if (headerLoginBtn) {
  headerLoginBtn.addEventListener("click", (e) => {
    if (
      email.value === "" ||
      password.value === "" ||
      confirmPassword.value === "" ||
      staffid.value === ""
    ) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Form is empty. Are u sure you want to Go back to Register Page?",
        text: "All progress would be lost",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "register.html";
        }
      });
    } else {
      handleSubmit(e);
    }
  });
}
