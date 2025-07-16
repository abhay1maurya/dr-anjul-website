console.log('✅ About section script loaded');

// Wait for full DOM and resources to be ready
window.addEventListener("load", () => {
  const aboutImage = document.getElementById("aboutImage");

  // ✅ Gracefully set background image
  const imageUrl = "images/drimg.jpg"; // Update this if needed
  const img = new Image();
  img.src = imageUrl;

  img.onload = () => {
    aboutImage.style.backgroundImage = `url('${imageUrl}')`;
    aboutImage.style.backgroundSize = "cover";
    aboutImage.style.backgroundPosition = "center";
    aboutImage.style.backgroundRepeat = "no-repeat";
    aboutImage.style.transition = "background-image 0.5s ease-in-out";
    console.log('🎉 About image loaded successfully');
  };

  img.onerror = () => {
    console.warn("⚠️ Failed to load about image:", imageUrl);
    aboutImage.style.backgroundColor = "#ddd"; // Fallback color
  };

  // ✅ Scroll reveal animation using Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.3 // Trigger when 30% visible
  });

  // Observe all elements with `.about-text`
  document.querySelectorAll(".about-text").forEach(el => {
    observer.observe(el);
  });
});
