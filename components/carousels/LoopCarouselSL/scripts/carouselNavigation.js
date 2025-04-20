export function carouselNavigation(carousel, prevBtn, nextBtn) {
  // manual navigation
  prevBtn.addEventListener("click", () => {
    carousel.previous("smooth");
  });

  nextBtn.addEventListener("click", () => {
    carousel.next("smooth");
  });

  // Autoplay
  let autoplay = null;

  const startAutoplay = () => {
    if (autoplay === null) {
      autoplay = setInterval(() => {
        carousel.next("smooth");
      }, 5000);
    }
  };

  const stopAutoplay = () => {
    if (autoplay !== null) {
      clearInterval(autoplay);
      autoplay = null;
    }
  };

  startAutoplay();

  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);
  carousel.addEventListener("focusin", stopAutoplay);
  carousel.addEventListener("focusout", startAutoplay);
}
