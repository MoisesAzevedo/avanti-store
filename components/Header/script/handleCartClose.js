export function handleCartClose(shadowRoot, cartEndElements) {
  if (!cartEndElements) return;

  cartEndElements.forEach((cartEnd) => {
    cartEnd.addEventListener("click", () => {
      const cartSection = shadowRoot.querySelector(".cart");

      if (!cartSection) return;

      const isOpen = cartSection.style.right === "0px";

      if (isOpen) {
        cartSection.style.right = "-380px";
      }
    });
  });
}
