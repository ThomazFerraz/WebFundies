// script.js

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find the "Register" button by its ID
    var registerButton = document.getElementById('register-btn');

    // Add a click event listener to the "Register" button
    registerButton.addEventListener('click', function() {
        // Redirect the user to the "register" page
        window.location.href = '/register';
    });
});