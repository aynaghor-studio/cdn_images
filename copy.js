function copyLink(id) {
  const text = document.getElementById(id).innerText;
  const btn = event.currentTarget; // The button that was clicked

  navigator.clipboard.writeText(text)
    .then(() => {
      // Animate button: scale down then back up
      btn.classList.add('active');
      setTimeout(() => btn.classList.remove('active'), 150);

      alert("Link copied to clipboard!");
    })
    .catch(err => {
      alert("Failed to copy link: " + err);
    });
}
