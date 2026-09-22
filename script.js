// PSİQUZ — dark mode toggle
// Remembers the reader's choice using the browser's local storage.
(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  var saved = localStorage.getItem('psiquz-theme');

  if (saved) {
    root.setAttribute('data-theme', saved);
  }
  updateLabel();

  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') || 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('psiquz-theme', next);
      updateLabel();
    });
  }

  function updateLabel() {
    if (!toggle) return;
    var current = root.getAttribute('data-theme') || 'light';
    toggle.textContent = current === 'dark' ? 'Light' : 'Dark';
  }
})();
