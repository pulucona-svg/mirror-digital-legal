/**
 * Mirror Digital — Client Navigation & Legal ScrollSpy
 * Minimal vanilla JavaScript (zero dependencies)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (navToggle && siteNav) {
    const toggleMenu = (open) => {
      const isExpanded = open !== undefined ? open : navToggle.getAttribute('aria-expanded') !== 'true';
      navToggle.setAttribute('aria-expanded', String(isExpanded));
      siteNav.classList.toggle('is-open', isExpanded);
    };

    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && siteNav.classList.contains('is-open')) {
        toggleMenu(false);
        navToggle.focus();
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (siteNav.classList.contains('is-open') && !siteNav.contains(e.target) && !navToggle.contains(e.target)) {
        toggleMenu(false);
      }
    });

    // Close menu on link navigation (mobile)
    siteNav.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          toggleMenu(false);
        }
      });
    });
  }

  // 2. Legal Table of Contents ScrollSpy (IntersectionObserver)
  const tocLinks = document.querySelectorAll('.toc-link');
  const sections = document.querySelectorAll('.legal-section');

  if (tocLinks.length > 0 && sections.length > 0 && 'IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          tocLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }

  // 3. Current Year in Footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
