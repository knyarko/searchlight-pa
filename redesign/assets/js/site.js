// Theme: follow the system until the visitor chooses, then remember the choice.
(function () {
  var root = document.documentElement;
  var KEY = 'sl-theme';

  try {
    var saved = localStorage.getItem(KEY);
    if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  } catch (e) { /* private mode — fall back to the system preference */ }

  function current() {
    var set = root.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  var toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  function label() {
    var next = current() === 'dark' ? 'light' : 'dark';
    toggle.setAttribute('aria-label', 'Switch to ' + next + ' theme');
  }
  label();

  toggle.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem(KEY, next); } catch (e) { /* not persisted */ }
    label();
  });
})();

// Header hairline, once the page has moved off the top.
(function () {
  var head = document.querySelector('.site-head');
  if (!head) return;
  var ticking = false;

  function update() {
    head.setAttribute('data-stuck', String(window.scrollY > 8));
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();

// Small-screen navigation.
(function () {
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  if (!burger || !nav) return;

  function setOpen(open) {
    nav.setAttribute('data-open', String(open));
    burger.setAttribute('aria-expanded', String(open));
  }

  burger.addEventListener('click', function () {
    setOpen(nav.getAttribute('data-open') !== 'true');
  });

  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') setOpen(false);
  });
})();

// Consultation form. Static hosting has no backend, so hand off to the mail client.
(function () {
  var form = document.getElementById('consult');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var data = new FormData(form);
    var subject = data.get('subject') || 'SearchLight consultation request';
    var body = [
      'Name: ' + (data.get('name') || ''),
      'Institution: ' + (data.get('institution') || ''),
      'Email: ' + (data.get('email') || ''),
      'Phone: ' + (data.get('phone') || ''),
      '',
      data.get('message') || ''
    ].join('\n');

    window.location.href = 'mailto:' + form.dataset.recipient +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
  });
})();
