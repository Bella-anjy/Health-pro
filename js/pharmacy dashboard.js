// line chart

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




// Pie chart
document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("pieChart").getContext("2d");

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Chrome", "IE", "FireFox", "Safari", "Opera"],
      datasets: [
        {
          data: [30, 20, 15, 25, 10], // Sample Data (adjust as needed)
          backgroundColor: [
            "#fbbc05",
            "#34a853",
            "#4285f4",
            "#1e88e5",
            "#ea4335",
          ], // Matching colors
          hoverOffset: 8,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "right",
          labels: {
            usePointStyle: true,
            boxWidth: 8,
            font: { size: 14 },
          },
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.label + ": " + tooltipItem.raw + "%";
            },
          },
        },
      },
    },
  });
});




      // Bar Chart
       var ctx3 = document.getElementById('barChart').getContext('2d');
        new Chart(ctx3, {
            type: 'bar',
            data: {
                labels: ['FireFox', 'Chrome', 'Opera', 'Safari', 'IE'],
                datasets: [{
                    data: [9000, 13212, 11000, 12000, 7000],
                    backgroundColor: ['cyan', 'orange', 'red', 'blue', 'green']
                }]
            },
            options: { responsive: true }
        });
