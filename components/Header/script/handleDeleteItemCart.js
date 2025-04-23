export function handleDeleteItemCart(shadowRoot, deleteButtons, cart) {
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

      //  updated cart-length (header)
      const cartUpdatedEvent = new CustomEvent("cart-updated", {
        detail: { length: updatedCart.length },
        bubbles: true,
        composed: true
      });
      document.dispatchEvent(cartUpdatedEvent);

      // re-render card-container (cart)
      const cardContainer = shadowRoot.querySelector(".card-container");
      console.log("card container");
      console.log(cardContainer);

      cardContainer.innerHTML = `
        ${updatedCart
          .map((item, index, self) => {
            /* quantity of same titles */
            const count = self.filter((i) => i.title === item.title).length;
            const isFirstOccurrence =
              self.findIndex((i) => i.title === item.title) === index;
            if (!isFirstOccurrence) return "";

            return `
              <div class="card">
                <figure> 
                  <img src="${item.image}" />
                </figure>
                
                <div class="inf">
                  <h3>${item.title}</h3>
                  <div class="price">
                    <div class="monetary">
                      <p>${item.currentValue}</p>
                    </div>
                  </div>
                  <div class="quant">
                    <p>Selecionados: </p>
                    <p>${count}</p>
                  </div>
                  <button class="delete-button">Excluir</button>
                </div>
              </div>
            `;
          })
          .join("")}
      `;

      // listenner to button
      const newDeleteButtons = shadowRoot.querySelectorAll(".delete-button");
      handleDeleteItemCart(shadowRoot, newDeleteButtons, updatedCart);
    });
  });
}
