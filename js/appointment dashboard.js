let deletedRow = null;
let deletedRowParent = null;

function deleteRow(btn) {
  deletedRow = btn.closest("tr");
  deletedRowParent = deletedRow.parentNode;
  deletedRowParent.removeChild(deletedRow);

  document.getElementById("undo-btn").style.display = "block";
}
