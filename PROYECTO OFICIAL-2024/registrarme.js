const form = document.getElementById('registerForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (validateRegisterForm()) {
        handleRegister(); 
    }
});

function validateRegisterForm() {
    let isValid = true;

    if (fullName.value.trim() === "") {
        setError(fullName, "El nombre completo es obligatorio.");
        isValid = false;
    } else {
        clearError(fullName);
    }

    if (email.value.trim() === "") {
        setError(email, "El correo electrónico es obligatorio.");
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        setError(email, "Por favor, ingresa un correo electrónico válido.");
        isValid = false;
    } else {
        clearError(email);
    }

    if (username.value.trim() === "") {
        setError(username, "El nombre de usuario es obligatorio.");
        isValid = false;
    } else {
        clearError(username);
    }

    if (password.value.trim() === "") {
        setError(password, "La contraseña es obligatoria.");
        isValid = false;
    } else if (password.value.trim().length < 6) {
        setError(password, "La contraseña debe tener al menos 6 caracteres.");
        isValid = false;
    } else {
        clearError(password);
    }

    if (confirmPassword.value.trim() !== password.value.trim()) {
        setError(confirmPassword, "Las contraseñas no coinciden.");
        isValid = false;
    } else {
        clearError(confirmPassword);
    }

    return isValid; 
}

function setError(input, message) {
    const inputGroup = input.parentElement;
    const small = inputGroup.querySelector('small');
    inputGroup.className = 'input-group error';
    small.textContent = message;
}

function clearError(input) {
    const inputGroup = input.parentElement;
    inputGroup.className = 'input-group'; 
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
}

function handleRegister() {
    const usernameValue = document.getElementById('username').value;
    localStorage.setItem('username', usernameValue);

    window.location.href = "login.html"; 
}
