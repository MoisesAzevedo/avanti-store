import "../../components/header/Header.js";
import "../../components/promotion/Promotion.js";

class Home extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <promotion-app></promotion-app>
    <header-app></header-app>
    `;
  }
}

//registered a personalized tag
customElements.define("home-app", Home);
