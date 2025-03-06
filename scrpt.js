document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeBtn = document.getElementById("close");
  
    galleryItems.forEach(item => {
      item.addEventListener("click", function () {
        const src = item.src.replace("-thumbnail", "");
        lightboxImage.src = src;
        lightbox.style.display = "flex";
      });
    });
  
    closeBtn.addEventListener("click", function () {
      lightbox.style.display = "none";
    });
  
    lightbox.addEventListener("click", function (e) {
      if (e.target !== lightboxImage) {
        lightbox.style.display = "none";
      }
    });
  });
  