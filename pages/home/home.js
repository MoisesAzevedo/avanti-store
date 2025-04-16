import "../../components/header/Header.js";
import "../../components/promotion/Promotion.js";
import "../../components/banners/Banner/Banner.js";
import "../../components/banners/CupBanner/CupBanner.js";
import "../../components/banners/MapBanner/MapBanner.js";

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
      <cup-banner></cup-banner>
      <map-banner></map-banner>
    `;
  }
}

customElements.define("home-app", Home);
