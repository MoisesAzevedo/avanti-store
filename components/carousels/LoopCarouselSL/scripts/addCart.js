export function addCart(buyButtons) {
  buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
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
      window.location.reload();
    });
  });
}
