
document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let successMessage = document.getElementById("successMessage");

    // Name Validation
    if (name === "") {
        alert("Please enter your name");
        return;
    }

    // Email Validation
    if (email === "") {
        alert("Please enter your email");
        return;
    }

    // Email Format Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

    // Message Validation
    if (message === "") {
        alert("Please enter your message");
        return;
    }

    // Create Form Data Object
    let formData = {
        name: name,
        email: email,
        message: message,
        date: new Date().toLocaleString()
    };

    // Get Existing Data
    let submissions =
        JSON.parse(localStorage.getItem("submissions")) || [];

    // Add New Submission
    submissions.push(formData);

    // Save Back to Local Storage
    localStorage.setItem(
        "submissions",
        JSON.stringify(submissions)
    );

    // Show Success Message
    successMessage.innerText = "Form Submitted Successfully ✅";
    successMessage.style.display = "block";

    // Clear Form
    document.getElementById("contactForm").reset();
});

