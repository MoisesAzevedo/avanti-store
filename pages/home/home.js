import "../../components/header/Header.js";
import "../../components/promotion/Promotion.js";
import "../../components/Banner/Banner.js";

class Home extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const css = await fetch(new URL("./home.styles.css", import.meta.url)).then(
      (res) => res.text()
    );

    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <promotion-app class="promotion"></promotion-app>
      <header-app></header-app>
      <banner-component></banner-component>
    `;
  }
}

customElements.define("home-app", Home);
