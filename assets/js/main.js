// Mobile nav toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
})();

// Home hero slideshow
(function () {
  var show = document.querySelector('.slideshow');
  if (!show) return;

  var slides = Array.prototype.slice.call(show.querySelectorAll('.slide'));
  var dots = Array.prototype.slice.call(show.querySelectorAll('.slide-dots button'));
  var index = 0;
  var timer;

  function go(next) {
    slides[index].classList.remove('is-active');
    dots[index].setAttribute('aria-selected', 'false');
    index = (next + slides.length) % slides.length;
    slides[index].classList.add('is-active');
    dots[index].setAttribute('aria-selected', 'true');
  }

  function play() {
    stop();
    timer = setInterval(function () { go(index + 1); }, 5000);
  }

  function stop() { clearInterval(timer); }

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () { go(i); play(); });
  });

  show.addEventListener('mouseenter', stop);
  show.addEventListener('mouseleave', play);
  play();
})();

// Contact form — static hosting has no backend, so hand off to the mail client.
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var data = new FormData(form);
    var subject = data.get('subject') || 'SearchLight consultation request';
    var body = [
      'Name: ' + (data.get('name') || ''),
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
