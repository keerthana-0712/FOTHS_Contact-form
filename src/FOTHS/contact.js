// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const error = document.getElementById("error");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission until validation passes

    // Get input values and trim extra spaces
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Reset error message before new validation
    error.textContent = "";

    // 🔥 Validation Rules
    if (name === "") {
      error.textContent = "⚠️ Please enter your Name.";
      return;
    }

    if (email === "") {
      error.textContent = "⚠️ Please enter your Email.";
      return;
    }

    // Email format validation (basic but effective)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      error.textContent = "⚠️ Please enter a valid Email address.";
      return;
    }

    if (message === "") {
      error.textContent = "⚠️ Message cannot be empty.";
      return;
    }

    // ✅ If all validations pass
    alert("🔥 Thank you, " + name + "! Your message has been sent successfully.");
    form.reset(); // Clear the form fields
  });
});
