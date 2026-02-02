function toggleForms() {
    console.log("Toggle function clicked!"); // This helps you debug
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    if (loginForm && signupForm) {
        loginForm.classList.toggle('hidden');
        signupForm.classList.toggle('hidden');
    } else {
        console.error("Form elements not found!");
    }
}
