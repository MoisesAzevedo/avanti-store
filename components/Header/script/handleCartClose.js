export function handleCartClose(shadowRoot, cartEndElements) {
  if (!cartEndElements) return;

  cartEndElements.forEach((cartEnd) => {
    cartEnd.addEventListener("click", () => {
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
      }
    });
  });
}
