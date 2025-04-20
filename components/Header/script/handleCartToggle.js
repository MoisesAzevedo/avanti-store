export function handleCartToggle(shadowRoot, cartAndUserElements) {
  if (!cartAndUserElements) return;

  cartAndUserElements.forEach((cartAndUser) => {
    cartAndUser.addEventListener("click", () => {
      const cartComponent = shadowRoot.querySelector("cart-app");
      if (!cartComponent) return;

      const cartSection = cartComponent.shadowRoot.querySelector(".cart");
      if (!cartSection) return;

      const isOpen = cartSection.style.right === "0px";

      if (isOpen) {
        cartSection.style.right = "-380px";

        cartSection.addEventListener(
          "transitionend",
          () => {
            cartSection.style.display = "none";
          },
          { once: true }
        );
      } else {
        cartSection.style.display = "flex";

        // Defer to next frame to allow display change to apply before animating
        requestAnimationFrame(() => {
          cartSection.style.right = "0px";
        });
      }
    });
  });
}
