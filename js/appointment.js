// Accessing the input fields
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const address = document.getElementById("address");
const nic = document.getElementById("nic");
const dob = document.getElementById("dob");
const gender = document.getElementById("gender");
const appdate = document.getElementById("appdate")
const apptime = document.getElementById("apptime")
const dept = document.getElementById("dept")
const docname = document.getElementById("docname")
const formSubmit = document.getElementById("form-submit");


// handle form submission
const handleSubmit = (e) => {
  e.preventDefault();

  // Getting the values of the input fields
  const firstNameValue = firstName.value; 
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const telValue = tel.value;
  const addressValue = address.value;
  const nicValue = nic.value;
  const dobValue = dob.value;
  const genderValue = gender.value;
  const appdateValue = appdate.value; 
  const apptimeValue = apptime.value;
  const deptValue = dept.value;
  const docnameValue = docname.value;
  // Saving the data to local storage
  localStorage.setItem("firstName", firstNameValue);
  localStorage.setItem("lastName", lastNameValue);
  localStorage.setItem("email", emailValue);
  localStorage.setItem("tel", telValue);
  localStorage.setItem("address", addressValue);
  localStorage.setItem("nic", nicValue);
  localStorage.setItem("dob", dobValue);
  localStorage.setItem("gender", genderValue);
  localStorage.setItem("appdate", appdateValue);
  localStorage.setItem("apptime", apptimeValue);
  localStorage.setItem("dept", deptValue);
  localStorage.setItem("docname", docnameValue);
  // Validation for empty fields
  if (
    firstNameValue === "" ||
    lastNameValue === "" ||
    emailValue === "" ||
    telValue === "" ||
    addressValue === "" ||
    nicValue === "" ||
    dobValue === "" ||
    genderValue === "" ||
    appdateValue === "" ||
    apptimeValue === "" ||
    deptValue === "" ||
    docnameValue === ""
  ) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please fill in all fields",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  } else{
    // Show success alert before redirect
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Appointment Booked Successfully",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = "appointment.html"; // Redirect to appointment.html after 1.5 seconds);
   } )}
}
;
// Add event listener to the form submit
formSubmit.addEventListener("submit", handleSubmit);
  
  
