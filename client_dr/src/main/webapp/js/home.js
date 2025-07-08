console.log('Home section script loaded');
document.addEventListener("DOMContentLoaded", function () {
    const homeSection = document.getElementById("home");
  
    // Dynamically set background image
    homeSection.style.backgroundImage = "url('images/home-bg.jpg')";
    homeSection.style.backgroundSize = "cover";
    homeSection.style.backgroundPosition = "center";
    homeSection.style.backgroundRepeat = "no-repeat";
  
    // Add animation class after small delay
    setTimeout(() => {
      homeSection.classList.add("loaded");
    }, 300); // delay to trigger transition
  });
  