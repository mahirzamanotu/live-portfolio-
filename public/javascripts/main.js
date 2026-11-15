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
});