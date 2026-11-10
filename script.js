// Autor: Ignacio Bolonia Llamccaya - 2026018895@unfv.edu.pe

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const messageEl = document.getElementById('message');

  const DEMO_EMAIL = 'demo@correo.com';
  const DEMO_PASSWORD = 'demo12345';
  const MIN_PASSWORD_LENGTH = 8;

  function showMessage(text, type) {
    messageEl.textContent = text;
    messageEl.className = 'message ' + type;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Validación de formato de correo
    if (!isValidEmail(email)) {
      showMessage('Ingresa un correo electrónico válido.', 'error');
      return;
    }

    // Validación de longitud mínima de contraseña
    if (password.length < MIN_PASSWORD_LENGTH) {
      showMessage('La contraseña debe tener al menos ' + MIN_PASSWORD_LENGTH + ' caracteres.', 'error');
      return;
    }

    // Verificación contra credenciales de demostración
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      showMessage('¡Inicio de sesión exitoso! Bienvenido a la demostración.', 'success');
    } else {
      showMessage('Correo o contraseña incorrectos.', 'error');
    }
  });
});
