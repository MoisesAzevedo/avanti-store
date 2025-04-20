import { logo_svg } from "@img/logo.js";
import { search_svg } from "@img/icons/search.js";
import { person_svg } from "@img/icons/person.js";
import { cart_button_svg } from "@img/icons/cart.js";
import { burg_menu_svg } from "@img/icons/burg-menu.js";
import "./components/HeaderNav.js";
import { handleUserNameClick } from "./script/handleUserNameClick.js";
import { handleCartToggle } from "./script/handleCartToggle.js";
import { handleCartClose } from "./script/handleCartClose.js";
import { handleDeleteItemCart } from "./script/handleDeleteItemCart.js";

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [globalStyles, desktopStyles, mobileStyles] = await Promise.all([
      fetch(new URL("../../shadow-base.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./Header.desktop.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./Header.mobile.css", import.meta.url)).then((res) =>
        res.text()
      )
    ]);

    const userNameStorage =
      JSON.parse(localStorage.getItem("username")) || "Qual o seu nome?";
    const user_name = userNameStorage;
    const input_default_value = "Digite aqui o que você procura";
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cart_length = cart.length;

    this.shadowRoot.innerHTML = `
        <style>
          ${globalStyles}
          ${desktopStyles}
          ${mobileStyles}
        
        </style>
        <header class="header-container">
          <div class="desktop">
            <div class="content"> 
              <section class="actions">
                <div class="header-logo">${logo_svg}</div>

                <div class="search-bar">
                  <input class="search-input" placeholder="${input_default_value}" />
                  <div class="search-img">${search_svg}</div>
                </div>

                <div class="cart-and-user">
                  <div class="svg-name">
                    <div class="person-svg">${person_svg}</div>
                    <div class="hello-user">
                      <p>Olá,</p>
                      <p>${user_name}</p>
                    </div>
                  </div>

                  <div class="button-and-lenght">
                    <div class="cart-button">${cart_button_svg}</div>
                    <div class="cart-length">${
                      cart_length ? cart_length : 0
                    }</div>
                  </div>
                </div>
              </section>  
              <nav-menu class="nav-menu"></nav-menu>
            </div>
          </div>

          <div class="mobile">
            <div class="content"> 
              <section class="actions">
                <div class="burg-menu">
                  ${burg_menu_svg}
                </div>
              
                <div class="header-logo">${logo_svg}</div>

                <div class="cart-and-user">
                  <div class="button-and-lenght">
                    <div class="cart-button">${cart_button_svg}</div>
                    <div class="cart-length">${
                      cart_length ? cart_length : 0
                    }</div>
                  </div>
                </div>

              </section>
              <div class="search-bar">
                  <input class="search-input" placeholder="${input_default_value}" />
                  <div class="search-img">${search_svg}</div>
              </div>
            </div>
          </div>

          <section class="cart">
            <header> 
              <h1>Carrinho</h1>
              <p class="cart-end">X</p>            
            </header>         
            <div class="card-container">
            ${cart
              .map((item, index, self) => {
                // title quantity
                const count = self.filter((i) => i.title === item.title).length;

                //  no re-render
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
        </header>
      `;

    const svgName = this.shadowRoot.querySelector(".svg-name");
    const allCartAndUser = this.shadowRoot.querySelectorAll(".cart-and-user");
    const cartEnd = this.shadowRoot.querySelectorAll(".cart-end");
    const deleteButtons = this.shadowRoot.querySelectorAll(".delete-button");

    if (svgName) {
      handleUserNameClick(this.shadowRoot, svgName);
    }

    if (allCartAndUser) {
      handleCartToggle(this.shadowRoot, allCartAndUser);
    }

    if (cartEnd) {
      handleCartClose(this.shadowRoot, cartEnd);
    }

    handleDeleteItemCart(this.shadowRoot, deleteButtons, cart, () =>
      this.connectedCallback()
    );
  }
}

customElements.define("header-app", Header);
