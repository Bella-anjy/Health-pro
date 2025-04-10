// Toggle password visibility
const passCode = document.getElementById("passcode");
const faEye = document.getElementById("fa-eye");
const faEyeSlash = document.getElementById("fa-eye-slash");

const code = document.getElementById("code");
const eye = document.getElementById("eye");
const eyeSlash = document.getElementById("eye-slash");

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

faEye.addEventListener("click", togglePasswordIcon);
faEyeSlash.addEventListener("click", togglePasswordIcon);
eye.addEventListener("click", toggleCodeIcon);
eyeSlash.addEventListener("click", toggleCodeIcon);

// Form handling
const formSubmit = document.getElementById("form-submit");
const email = document.getElementById("email");
const password = document.getElementById("passcode");
const confirmPassword = document.getElementById("code");
const loginBtn = document.getElementById("login-btn");

formSubmit.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (!emailValue || !passwordValue || !confirmPasswordValue) {
    Swal.fire({
      icon: "error",
      title: "All fields are required",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  if (passwordValue.length < 8 || passwordValue.length > 20) {
    Swal.fire({
      icon: "error",
      title: "Password must be 8-20 characters",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  if (passwordValue !== confirmPasswordValue) {
    Swal.fire({
      icon: "error",
      title: "Passwords do not match",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  // Show success SweetAlert before redirect
  Swal.fire({
    icon: "success",
    title: "Login Successful",
    showConfirmButton: false,
    timer: 2000,
  });

  setTimeout(() => {
    window.location.href = "patient dashboard.html";
  }, 2000);
});

// Header login button (if going back to register)
const headerLoginBtn = document.getElementById("header-login-btn");

headerLoginBtn.addEventListener("click", (e) => {
  if (
    email.value.trim() === "" ||
    password.value.trim() === "" ||
    confirmPassword.value.trim() === ""
  ) {
    Swal.fire({
      icon: "warning",
      title: "Empty form. Are you sure you want to go back to register page?",
      text: "Your current progress will be lost.",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "register.html";
      }
    });
  } else {
    // Do nothing or optionally prompt for confirmation
    Swal.fire({
      icon: "info",
      title: "Form is already filled",
      showConfirmButton: false,
      timer: 1500,
    });
  }
});
