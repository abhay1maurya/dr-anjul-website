document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");
  document.body.appendChild(lightbox);

  const lightboxClose = document.createElement("span");
  lightboxClose.classList.add("lightbox-close");
  lightboxClose.innerText = "X";
  lightbox.appendChild(lightboxClose);

  galleryItems.forEach(item => {
    const img = item.querySelector("img");
    img.addEventListener("click", () => {
      const imgSrc = img.src;
      lightbox.innerHTML = `<span class="lightbox-close">X</span><img src="${imgSrc}" alt="Gallery Image">`;
      lightbox.classList.add("active");
    });
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });
});
