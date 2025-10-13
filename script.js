document.addEventListener("DOMContentLoaded", () => {
  /* =======================
     NAVBAR GENERATION
  ======================= */
  const navLinks = [
    { name: "Home", url: "Home.html" },
    { name: "Tickets", url: "#tickets" },
    { name: "About", url: "#about" },
  ];

  const navbar = document.getElementById("navbar");
  if (navbar) {
    navLinks.forEach(link => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = link.name;
      a.href = link.url;
      li.appendChild(a);
      navbar.appendChild(li);
    });
  }

  /* =======================
     GALLERY LIGHTBOX
  ======================= */
  const galleryImages = document.querySelectorAll(".gallery img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector("#lightbox .close");

  if (galleryImages.length && lightbox && lightboxImg && closeBtn) {
    // When an image is clicked
    galleryImages.forEach(img => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";  // show overlay
        lightboxImg.src = img.src;        // show clicked image
      });
    });

    // When the close button is clicked
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    });

    // Also close if you click outside the image
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
        lightboxImg.src = "";
      }
    });

    // Close with ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        lightbox.style.display = "none";
        lightboxImg.src = "";
      }
    });
  }
});
