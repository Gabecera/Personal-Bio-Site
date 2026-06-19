// Scroll-spy: highlight the active nav link based on visible section
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('.nav-link');

const setActive = (id) => {
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
  });
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
}
/*cursor effect */
const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Hide it when the mouse leaves the window
document.addEventListener('mouseleave', () => {
  glow.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
  glow.style.opacity = '1';
});