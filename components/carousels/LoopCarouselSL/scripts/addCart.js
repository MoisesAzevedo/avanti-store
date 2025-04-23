export function addCart(buyButtons) {
  buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      //extract
      const { image, title, currentValue } = button.dataset;

      const confirm = window.confirm(
        `Deseja adicionar "${title}" ao carrinho?`
      );

      if (!confirm) return;

      const item = { image, title, currentValue };

      // get or create
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      // add a new item
      cart.push(item);

      // save the cart
      localStorage.setItem("cart", JSON.stringify(cart));

      window.alert(`"${title}" foi adicionado ao carrinho com sucesso!`);

      // updated svg-cart (header)
      const cartUpdatedEvent = new CustomEvent("cart-updated", {
        detail: { length: cart.length },
        bubbles: true, //subir na arvore do DOM
        composed: true // atravessa limites do shadowDOM
      });
      document.dispatchEvent(cartUpdatedEvent);

      // re-render cart-container (cart)
      const renderCartEvent = new CustomEvent("render-card", {
        detail: { data: cart },
        bubbles: true, //subir na arvore do DOM
        composed: true // atravessa limites do shadowDOM
      });
      document.dispatchEvent(renderCartEvent);
    });
  });
}
