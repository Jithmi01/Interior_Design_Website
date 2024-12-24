// Wait for the DOM to load before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
    // Get the form element
    const contactForm = document.getElementById("contactForm");

    // Add an event listener to handle form submission
    contactForm.addEventListener("submit", (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get form input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validation checks
        if (!name || !email || !message) {
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Please fill in all fields before submitting.",
                confirmButtonColor: "#d33",
            });
            return;
        }

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            Swal.fire({
                icon: "warning",
                title: "Invalid Email",
                text: "Please enter a valid email address.",
                confirmButtonColor: "#f39c12",
            });
            return;
        }

        // If all validations pass, show a success alert
        Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: `Thank you, ${name}! Your message has been sent successfully.`,
            confirmButtonColor: "#28a745",
        });

        // Optionally, clear the form fields after submission
        contactForm.reset();
    });
});
