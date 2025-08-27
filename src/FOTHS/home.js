// Select the form
const newsletterForm = document.getElementById("newsletter-form");

// Add event listener for form submit
newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents page reload
  alert("✅ Thank you for subscribing!");

});
    newsletterForm.reset(); // Resets the form fields
