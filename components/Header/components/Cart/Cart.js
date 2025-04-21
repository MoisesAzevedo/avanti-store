import { handleCartClose } from "../../script/handleCartClose.js";
import { handleDeleteItemCart } from "../../script/handleDeleteItemCart.js";

class Cart extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [baseStyles, customStyles] = await Promise.all([
      fetch(new URL("../../../../shadow-base.css", import.meta.url)).then(
        (res) => res.text()
      ),
      fetch(new URL("./Cart.css", import.meta.url)).then((res) => res.text())
    ]);

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    this.shadowRoot.innerHTML = `
    <style>
    ${baseStyles}
    ${customStyles}
  </style>
      <section class="cart">
        <header> 
          <h1>Carrinho</h1>
          <p class="cart-end">X</p>            
        </header>         
        <div class="card-container">
          ${cart
            .map((item, index, self) => {
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
        </div>    
      </section>
    `;

    const cartEnd = this.shadowRoot.querySelectorAll(".cart-end");
    const deleteButtons = this.shadowRoot.querySelectorAll(".delete-button");

    handleCartClose(this.shadowRoot, cartEnd);

    handleDeleteItemCart(this.shadowRoot, deleteButtons, cart, () =>
      this.connectedCallback()
    );
  }
}

customElements.define("cart-app", Cart);
