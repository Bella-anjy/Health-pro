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

let deletedRow = null;
let deletedRowParent = null;

function deleteRow(btn) {
  deletedRow = btn.closest("tr");
  deletedRowParent = deletedRow.parentNode;
  deletedRowParent.removeChild(deletedRow);

  document.getElementById("undo-btn").style.display = "block";
}

function editRow(btn) {
  let row = btn.closest("tr");
  for (let i = 1; i < row.cells.length - 2; i++) {
    let cell = row.cells[i];
    let input = document.createElement("input");
    input.type = i === 5 || i === 6 ? "number" : "text";
    input.value = cell.textContent;
    cell.textContent = "";
    cell.appendChild(input);
  }

  btn.innerHTML = "&#10004;"; // Checkmark icon for saving
  btn.onclick = function () {
    saveRow(btn);
  };
}

function saveRow(btn) {
  let row = btn.closest("tr");
  for (let i = 1; i < row.cells.length - 1; i++) {
    let cell = row.cells[i];
    let input = cell.querySelector("input");
    cell.textContent = input.value;
  }

  btn.innerHTML = "&#9998;"; // Pencil icon to edit
  btn.onclick = function () {
    editRow(btn);
  };
}
