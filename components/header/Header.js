import { logo_svg } from "../../img/logo.js";
import { search_svg } from "../../img/icons/search.js";
import { person_svg } from "../../img/icons/person.js";
import { cart_button_svg } from "../../img/icons/cart.js";

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // encapsula o estilo
  }

  //uso de shadow DOM para tornar o uso do css modular
  async connectedCallback() {
    const [globalStyles, headerStyles] = await Promise.all([
      fetch(new URL("../../shadow-base.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./Header.css", import.meta.url)).then((res) => res.text())
    ]);
    const user_name = "";
    const input_default_value = "Digite aqui o que você procura";
    const cart_length = null;

    this.shadowRoot.innerHTML = ` 
      <style>${globalStyles} ${headerStyles}</style>
      <section class="header-container">
        <div class="content"> 
          <div class="actions">
            <div class="header-logo">${logo_svg}</div>
           
            <div class="search-bar">
             <input class="search-input" placeholder="${input_default_value}"></input>
             <div  class="search-img" >${search_svg}</div>
            </div>
           
            <div class="cart-and-user">
              <div class="person-svg">${person_svg}</div>
              <div class="hello-user">
                <p>Olá,</p>
                <p>${user_name ? user_name + "!" : "Qual é o seu nome?"}</p>
              </div>
              <div class="button-and-lenght">
                <div class="cart-button">
                 ${cart_button_svg} 
                </div>
                <div class="cart-length">${cart_length ? cart_length : 0}</div>
              </div>
            </div>
          </div>  
          <div class="nav"></div>  
        </div>
      </section>
    `;
  }
}

customElements.define("header-app", Header);
