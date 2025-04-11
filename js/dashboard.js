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
document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("lineChart").getContext("2d");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Mon - 14",
        "Tue - 15",
        "Wed - 16",
        "Thu - 17",
        "Fri - 18",
        "Sat - 19",
        "Sun - 20",
      ],
      datasets: [
        {
          label: "Purchases",
          data: [1000, 2200, 1500, 2800, 2000, 1700, 1400], // Sample Data
          borderColor: "#1E88E5",
          backgroundColor: "rgba(30, 136, 229, 0.2)",
          borderWidth: 3,
          pointBackgroundColor: "#fff",
          pointBorderColor: "#1E88E5",
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
          fill: true,
          tension: 0.4, // Smooth curve
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return value / 1000 + "K";
            },
          },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
      },
    },
  });
});

// nav
// toggleNav = document.getElementById("toggleNav");
// sideBar = document.getElementById("sidebar");

// toggleNav.addEventListener("click", () => {
// sidebar.classList.toggle("sidebar-lists-hidden");
// sidebar.style.position = "fixed";
// const icon = toggleNav.querySelector("span");
// if (sideBar.classList.contains("sidebar-lists-hidden")) {
// icon.classList.replace("fa-bars", "fa-times");
// } else {
// icon.classList.replace("fa-times", "fa-bars");
// }
// });

const slideButtons = document.querySelectorAll(".slideBtn"); // Select all buttons
const totalSlides = 4;

function showSlide(index) {
  // Hide all slides
  for (let i = 1; i <= totalSlides; i++) {
    document.getElementById(`slide${i}`).style.display = "none";
  }

  // Show the selected slide
  document.getElementById(`slide${index}`).style.display = "block";
}

// Add event listeners for each button to navigate to the correct slide
slideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const slideIndex = button.getAttribute("data-slide");
    showSlide(slideIndex);
  });
});

// Initially show the first slide
showSlide(1);

// nav
// toggleNav = document.getElementById("toggleNav");
// sideBar = document.getElementById("sidebar");

// toggleNav.addEventListener("click", () => {
// sidebar.classList.toggle("sidebar-lists-hidden");
// sidebar.style.position = "fixed";
// const icon = toggleNav.querySelector("span");
// if (sideBar.classList.contains("sidebar-lists-hidden")) {
// icon.classList.replace("fa-bars", "fa-times");
// } else {
// icon.classList.replace("fa-times", "fa-bars");
// }
// });
