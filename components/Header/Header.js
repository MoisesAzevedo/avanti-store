import { logo_svg } from "@img/logo.js";
import { search_svg } from "@img/icons/search.js";
import { person_svg } from "@img/icons/person.js";
import { cart_button_svg } from "@img/icons/cart.js";
import { burg_menu_svg } from "@img/icons/burg-menu.js";
import "./components/HeaderNav.js";

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

    const user_name = "";
    const input_default_value = "Digite aqui o que você procura";
    const cart_length = null;

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
                <div class="person-svg">${person_svg}</div>
                <div class="hello-user">
                  <p>Olá,</p>
                  <p>${user_name ? user_name + "!" : "Qual é o seu nome?"}</p>
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
      </header>
    `;

    const logo = this.shadowRoot.querySelector(".header-logo");

    if (logo) {
      logo.addEventListener("click", () => {
        console.log("Logo clicado!");
        // Ou redirecionar: window.location.href = "/";
      });
    }
  }
}

customElements.define("header-app", Header);
