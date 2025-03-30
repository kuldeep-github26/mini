// Switch to Sign Up Form
document.getElementById("signUpLink").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("loginFormContainer").style.display = "none";
    document.getElementById("createAccountForm").style.display = "block";
});

// Switch back to Login Form
document.getElementById("loginLink").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("createAccountForm").style.display = "none";
    document.getElementById("loginFormContainer").style.display = "block";
});

// Handle Create Account Form Submission
document.getElementById("signUpForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const newUsername = document.getElementById("newUsername").value;
    const email = document.getElementById("email").value;
    const newPassword = document.getElementById("newPassword").value;

    // Check if the username already exists
    if (localStorage.getItem(newUsername)) {
        alert("Username already exists. Please choose a different username.");
    } else {
        // Store user data in LocalStorage
        const userData = {
            email: email,
            password: newPassword
        };
        localStorage.setItem(newUsername, JSON.stringify(userData));
        alert("Account created successfully!");

        // Switch back to login form
        document.getElementById("createAccountForm").style.display = "none";
        document.getElementById("loginFormContainer").style.display = "block";
    }
});

// Handle Login Form Submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Retrieve user data from LocalStorage
    const storedUserData = localStorage.getItem(username);

    if (storedUserData) {
        const userData = JSON.parse(storedUserData);

        // Check if password matches
        if (userData.password === password) {
            alert("Login successful!");
            window.location.href = "file:///C:/Users/user/Desktop/my%20java/project/ind.html"; // Redirect to your website
        } else {
            alert("Incorrect password. Please try again.");
        }
    } else {
        alert("User not found. Please Try Again.");
    }
});
