(function () {
  'use strict';

  var burger = document.querySelector('.burger');
  var nav = document.getElementById('site-nav');
  var backdrop = document.querySelector('.menu-backdrop');

  function toggleMenu(open) {
    document.body.classList.toggle('menu-open', open);
    if (burger) {
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
  }

  if (burger) {
    burger.addEventListener('click', function () {
      toggleMenu(!document.body.classList.contains('menu-open'));
    });
  }
  if (backdrop) backdrop.addEventListener('click', function () { toggleMenu(false); });
  if (nav) {
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { toggleMenu(false); });
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') toggleMenu(false);
  });

  function handleScroll() {
    document.body.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 5. Contact Form validation & submission
  var contactForm = document.getElementById('contact-form');
  var formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    var formInputs = contactForm.querySelectorAll('.form-input, .form-select');

    function validateField(input) {
      var group = input.closest('.form-group');
      var msgEl = group && group.querySelector('.field-msg');
      if (!msgEl) return true;

      var val = input.value.trim();
      var error = '';
      if (input.hasAttribute('required') && !val) {
        error = msgEl.getAttribute('data-error') || 'This field is required';
      } else if (input.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        error = 'Enter a valid email address (e.g. name@company.my)';
      }

      group.classList.toggle('has-error', Boolean(error));
      msgEl.textContent = error || msgEl.getAttribute('data-support') || '';
      if (error) input.setAttribute('aria-invalid', 'true');
      else input.removeAttribute('aria-invalid');
      return !error;
    }

    formInputs.forEach(function (input) {
      input.addEventListener('blur', function () { validateField(input); });
      input.addEventListener('input', function () {
        if (input.closest('.form-group').classList.contains('has-error')) validateField(input);
      });
      input.addEventListener('change', function () {
        if (input.closest('.form-group').classList.contains('has-error')) validateField(input);
      });
    });

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var allValid = true;
      formInputs.forEach(function (input) {
        if (!validateField(input)) allValid = false;
      });
      if (!allValid) {
        var firstError = contactForm.querySelector('.form-group.has-error .form-input, .form-group.has-error .form-select');
        if (firstError) firstError.focus();
        return;
      }

      contactForm.reset();
      formInputs.forEach(function (input) { validateField(input); });
      formStatus.textContent = "Thank you! Your message has been received. We'll reply within 1 business day.";
      formStatus.classList.add('is-visible');
    });
  }
})();
