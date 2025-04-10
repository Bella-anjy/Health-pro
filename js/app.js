const swiper = new Swiper(".slider-content", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Function to validate and show SweetAlert
const handleSubmit = (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Get all the form inputs
  const firstnameValue = document.getElementById("firstname").value;
  const lastnameValue = document.getElementById("lastname").value;
  const emailValue = document.getElementById("mail").value;
  const messageValue = document.getElementById("message").value;
  const numberValue = document.getElementById("number").value;

  // Store values in localStorage
  localStorage.setItem("firstname", firstnameValue);
  localStorage.setItem("lastname", lastnameValue);
  localStorage.setItem("email", emailValue);
  localStorage.setItem("message", messageValue);
  localStorage.setItem("number", numberValue);

  // Check if all fields are filled
  if (
    firstnameValue === "" ||
    lastnameValue === "" ||
    emailValue === "" ||
    messageValue === "" ||
    numberValue === ""
  ) {
    // Show SweetAlert if any field is empty
    Swal.fire({
      icon: "warning",
      title: "Please fill out all fields",
      text: 'Make sure all the fields are filled before clicking the "SEND" button!',
    });
  } else {
    // If all fields are filled, show success alert
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Your message has been sent. Awaiting feedback.",
    });

    // Optionally, reset the form after success
    e.target.reset();
  }
};

// Attach the function to the form's submit event
document.getElementById("form-submit").addEventListener("submit", handleSubmit);
