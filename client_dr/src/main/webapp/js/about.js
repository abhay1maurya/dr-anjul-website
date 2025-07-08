console.log('About section script loaded');
// Add background image dynamically
document.addEventListener("DOMContentLoaded", () => {
  const aboutImage = document.getElementById("aboutImage");
  aboutImage.style.backgroundImage = "url('images/drimg.jpg')"; // Replace with actual path
});

// Scroll-based reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.about-text').forEach(el => observer.observe(el));
