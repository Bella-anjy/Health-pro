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
