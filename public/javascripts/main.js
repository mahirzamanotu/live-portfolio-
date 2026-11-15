/*
Main Script
  This script runs in the browser on every page. It currently displays
  the current year in the footer.
  */

// The code runs once the page has finished loading so the footer is available.
document.addEventListener('DOMContentLoaded', function () {
  // The current year is placed in the footer so the copyright stays up to date.
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Any form with the needs-validation class is checked before it is sent.
  // If a required field is empty or invalid, the form is stopped and
  // Bootstrap highlights the fields that need attention.
  const forms = document.querySelectorAll('.needs-validation');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  });
});


