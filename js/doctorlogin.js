// Select password input and icons
const passCode = document.getElementById("passcode");
const faEye = document.getElementById("fa-eye");
const faEyeSlash = document.getElementById("fa-eye-slash");

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
