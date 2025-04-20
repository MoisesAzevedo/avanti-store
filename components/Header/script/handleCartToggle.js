export function handleCartToggle(shadowRoot, cartAndUserElements) {
  if (!cartAndUserElements) return;

  cartAndUserElements.forEach((cartAndUser) => {
    cartAndUser.addEventListener("click", () => {
      const cartSection = shadowRoot.querySelector(".cart");

      if (!cartSection) return;

      const isOpen =
        cartSection.style.display === "flex" &&
        cartSection.style.width === "380px";

      if (isOpen) {
        cartSection.style.width = "0px";

        cartSection.addEventListener(
          "transitionend",
          () => {
            cartSection.style.display = "none";
          },
          { once: true }
        );
      } else {
        cartSection.style.display = "flex";
        cartSection.style.overflow = "scroll";

        requestAnimationFrame(() => {
          cartSection.style.width = "380px";
        });
      }
    });
  });
}
