// Login form handling
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username === 'admin' && password === 'secure123') {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('gallery').classList.remove('hidden');
  } else {
    alert('Invalid credentials. Try: admin / secure123');
  }
});

// Show Password Toggle
document.getElementById('showPassword').addEventListener('change', function () {
  const passwordField = document.getElementById('password');
  passwordField.type = this.checked ? 'text' : 'password';
});

// Animate login modal on load
window.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('loginModal');
  modal.classList.remove('opacity-0', 'scale-95');
  modal.classList.add('opacity-100', 'scale-100');
});
