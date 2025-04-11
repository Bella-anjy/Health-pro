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

let deletedRow = null;
let deletedRowParent = null;

function deleteRow(btn) {
  deletedRow = btn.closest("tr");
  deletedRowParent = deletedRow.parentNode;
  deletedRowParent.removeChild(deletedRow);

  document.getElementById("undo-btn").style.display = "block";
}

// Undo the row deletion
function undoDelete() {
  if (deletedRow) {
    deletedRowParent.appendChild(deletedRow);
    document.getElementById("undo-btn").style.display = "none";
  }
}

// Function to validate all form inputs
function validateForm() {
  const firstName = document.querySelector(".first-name").value.trim();
  const lastName = document.querySelector(".last-name").value.trim();
  const role = document.querySelector(".role").value;
  const gender = document.querySelector(".gender").value;
  const email = document.querySelector(".mail").value.trim();
  const number = document.querySelector(".num").value.trim();
  const address = document.querySelector(".address").value.trim();
  const nic = document.querySelector(".nic").value.trim();
  const dob = document.querySelector(".dob").value.trim();
  const password = document.querySelector(".password").value;
  const confirmPassword = document.querySelector(".confirm-password").value;

  if (
    !firstName ||
    !lastName ||
    !role ||
    !gender ||
    !email ||
    !number ||
    !address ||
    !nic ||
    !dob ||
    !password ||
    !confirmPassword
  ) {
    Swal.fire("Error!", "Please fill out all fields", "warning");
    return false;
  }

  if (password !== confirmPassword) {
    Swal.fire("Error!", "Passcode does not match", "error");
    return false;
  }

  return {
    firstName,
    lastName,
    role,
    gender,
    email,
    number,
    address,
    nic,
    dob,
    password,
  };
}

// Function to handle access control based on user role
function checkRoleAccess() {
  const userRole = localStorage.getItem("role"); // e.g., 'admin', 'doctor', or 'staff'

  // Admin access (all sections open)
  if (userRole === "admin") {
    document.querySelectorAll(".sidebar-list a").forEach((link) => {
      link.addEventListener("click", function () {
        window.location.href = `/admin-dashboard.html${this.textContent.toLowerCase()}`;
      });
    });
  } else if (userRole === "doctor") {
    // Doctor has restricted access
    document.querySelectorAll(".sidebar-list a").forEach((link) => {
      if (link.textContent !== "Dashboard" && link.textContent !== "Staff") {
        link.addEventListener("click", function () {
          Swal.fire(
            "Access Denied",
            "You do not have access to this section",
            "error"
          );
        });
      }
    });
  } else {
    // Staff has restricted access
    document.querySelectorAll(".sidebar-list a").forEach((link) => {
      link.addEventListener("click", function () {
        Swal.fire(
          "Access Denied",
          "You do not have access to this section",
          "error"
        );
      });
    });
  }
}

// Form handling and report generation
document.querySelector(".form-btn-1").addEventListener("click", function (e) {
  e.preventDefault();
  const formData = validateForm();
  if (formData) {
    Swal.fire({
      title: "Registration Successful!",
      text: "Click on 'Generate report' to proceed",
      icon: "success",
    });
  }
});

document
  .querySelector(".staff-head-btn-1")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const formData = validateForm();
    if (formData) {
      Swal.fire({
        title: "Staff Report",
        text: "Staff ID card info",
        html: `
        <strong>Name:</strong> ${formData.firstName} ${formData.lastName}<br>
        <strong>Role:</strong> ${formData.role}<br>
        <strong>Gender:</strong> ${formData.gender}<br>
        <strong>Email:</strong> ${formData.email}<br>
        <strong>Mobile:</strong> ${formData.number}<br>
        <strong>Address:</strong> ${formData.address}<br>
        <strong>NIC:</strong> ${formData.nic}<br>
        <strong>DOB:</strong> ${formData.dob}<br>
        <br><em>Proceed to Doc Café to print your ID card</em>
      `,
        icon: "info",
      });
    }
  });

document.querySelector(".form-btn-2").addEventListener("click", function (e) {
  e.preventDefault();
  const formData = validateForm();
  if (formData) {
    Swal.fire({
      title: "Update Successful!",
      text: "Click on 'Generate report' to view update",
      icon: "success",
    });
  }
});

document.querySelector(".form-btn-3").addEventListener("click", function (e) {
  e.preventDefault();
  const formData = validateForm();
  if (formData) {
    Swal.fire({
      title: "Deleted!",
      text: "Information deleted. Please logout or re-register.",
      icon: "warning",
    });
  }

  // Clear all fields
  document.querySelector(".first-name").value = "";
  document.querySelector(".last-name").value = "";
  document.querySelector(".role").value = "";
  document.querySelector(".gender").value = "";
  document.querySelector(".mail").value = "";
  document.querySelector(".num").value = "";
  document.querySelector(".address").value = "";
  document.querySelector(".nic").value = "";
  document.querySelector(".dob").value = "";
  document.querySelector(".password").value = "";
  document.querySelector(".confirm-password").value = "";
});

// Initialize role-based access control
checkRoleAccess();
