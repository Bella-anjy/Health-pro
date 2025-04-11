let logout = document.getElementById("logout");

logout.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent immediate logout

  Swal.fire({
    title: "Are you sure you want to logout?",
    text: "You will be redirected to the login page.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, logout",
    cancelButtonText: "No, stay",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.clear();
      Swal.fire({
        title: "Logged out!",
        text: "Redirecting...",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });

      setTimeout(() => {
        window.location.href = "admin.html";
      }, 2000);
    }
  });
});
