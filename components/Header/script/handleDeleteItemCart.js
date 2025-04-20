export function handleDeleteItemCart(
  shadowRoot,
  deleteButtons,
  cart,
  rerenderCallback
) {
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const titleElement = button.closest(".card").querySelector("h3");

      if (!titleElement) return;

      const titleToDelete = titleElement.textContent;

      const confirmDelete = confirm(
        `Tem certeza que deseja remover todos os itens "${titleToDelete}" do carrinho?`
      );

      if (!confirmDelete) return;

      const updatedCart = cart.filter((item) => item.title !== titleToDelete);

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Chama a função de re-renderização passada como parâmetro
      rerenderCallback();
    });
  });
}
