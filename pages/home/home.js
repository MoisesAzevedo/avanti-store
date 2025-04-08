import "../../components/header/Header.js";

class Home extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
   <header-app></header-app>
    `;
  }
}

//registra a tag personalizada
customElements.define("home-app", Home);
