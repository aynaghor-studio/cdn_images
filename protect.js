// Disable right-click
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  alert("Right-click is disabled to protect image content.");
});

// Disable image drag
document.addEventListener('dragstart', function (e) {
  if (e.target.nodeName === 'IMG') {
    e.preventDefault();
  }
});

// Disable Ctrl+S, Ctrl+U, F12
document.addEventListener('keydown', function (e) {
  if (
    (e.ctrlKey && (e.key === 's' || e.key === 'u')) || // Ctrl+S or Ctrl+U
    e.key === 'F12'
  ) {
    e.preventDefault();
    alert("This action is disabled.");
  }
});
