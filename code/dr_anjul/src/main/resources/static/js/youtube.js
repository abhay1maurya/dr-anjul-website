// Optional: Auto-scroll buttons could be added later. For now, adjust iframes on load.
document.addEventListener("DOMContentLoaded", () => {
  const iframes = document.querySelectorAll("#youtube iframe");

  iframes.forEach(iframe => {
    const width = iframe.clientWidth;
    iframe.style.height = (width * 9) / 16 + "px"; // Keep 16:9 ratio
  });
});
