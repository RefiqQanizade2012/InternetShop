document.addEventListener("DOMContentLoaded", function() { // Можно из
    // Check if the form data exists in localStorage
    var registrationData = localStorage.getItem("registrationData");
    if (!registrationData) {
        showForm();
    }
});

function showForm() {
    var overlay = document.getElementById("registrationFormOverlay");
    overlay.style.display = "block";
}

function closeForm() {
    var overlay = document.getElementById("registrationFormOverlay");
    overlay.style.display = "none";
}

var registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check if all fields are filled
    if (firstName && lastName && email && password) {
        // Save the data to localStorage
        localStorage.setItem("registrationData", JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }));

        // Hide the form
        closeForm();
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
});
