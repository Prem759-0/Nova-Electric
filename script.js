// Animate charge bars on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.charge-fill').forEach(el => {
        el.style.width = el.dataset.w;
      });
    }
  });
}, { threshold: 0.3 });
observer.observe(document.getElementById('charge-bars'));
