// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Close mobile menu if open
        if (mobileMenu.classList.contains('active')) {
          toggleMobileMenu();
        }

        window.scrollTo({
          top: targetSection.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });

  // Mobile menu functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-nav');

  function toggleMobileMenu() {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }

  // Simple fade-in animation for sections
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, observerOptions);

  // Observe all main sections
  const sections = document.querySelectorAll('.about-section, .principles-section, .services-section, .contact-section');
  sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
  });

  // Observe service cards for staggered animation
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    card.classList.add('slide-in');
    card.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(card);
  });

  // Observe principles for staggered animation
  const principles = document.querySelectorAll('.principle');
  principles.forEach((principle, index) => {
    principle.classList.add('slide-in-right');
    principle.style.transitionDelay = `${index * 0.3}s`;
    observer.observe(principle);
  });
});
