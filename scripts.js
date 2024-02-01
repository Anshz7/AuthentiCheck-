// scripts.js

function submitSignup() {
    // Dummy logic to simulate account already exists
    // You should replace this with your actual signup logic
    var dummyEmail = "test@example.com";
    var enteredEmail = document.getElementById("email").value;
    
    if (enteredEmail === dummyEmail) {
        document.getElementById("signupResult").innerText = "Account already exists. Please login.";
        showLoginForm();
    } else {
        // Add logic to handle actual signup submission
        // For demonstration purposes, just showing a pop-up
        alert("Signup successful!");
        resetForms(); // Optional: Reset forms after successful signup
    }
}

function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("loginSignupContainer").style.display = "none";
}

function submitLogin() {
    // Dummy logic to simulate login
    // You should replace this with your actual login logic
    var dummyLoginEmail = "test@example.com";
    var dummyLoginPassword = "password";
    var enteredLoginEmail = document.getElementById("loginEmail").value;
    var enteredLoginPassword = document.getElementById("loginPassword").value;

    if (enteredLoginEmail === dummyLoginEmail && enteredLoginPassword === dummyLoginPassword) {
        alert("Login successful!");
        resetForms(); // Optional: Reset forms after successful login
    } else {
        document.getElementById("loginResult").innerText = "Invalid login credentials. Please try again.";
    }
}

function resetForms() {
    // Reset signup form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("signupResult").innerText = "";

    // Reset login form
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";
    document.getElementById("loginResult").innerText = "";

    // Hide both forms
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("loginSignupContainer").style.display = "none";
}
