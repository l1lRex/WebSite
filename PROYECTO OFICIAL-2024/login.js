document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        validateForm(); 
    });


    function validateForm() {
        const storedUsername = localStorage.getItem('username'); 
        const enteredUsername = usernameInput.value.trim();
        const enteredPassword = passwordInput.value.trim();

       
        if (storedUsername === enteredUsername && enteredPassword.length > 0) {
            alert("Inicio de sesión exitoso");
            window.location.href = 'PaginaPrincipal.html';
        } else {
            
            alert("Usuario o contraseña incorrectos.");
        }
    }
});
