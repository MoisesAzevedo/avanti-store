import "../../components/Header/Header.js";
import "../../components/Promotion/Promotion.js";
import "../../components/banners/Banner/Banner.js";
import "../../components/banners/CupBanner/CupBanner.js";
import "../../components/banners/MapBanner/MapBanner.js";
import "../../components/banners/TextBanner/TextBanner.js";
import "../../components/forms/NewsletterSign/NewsletterSign.js";
import "../../components/Footer/Footer.js";

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
      <text-banner></text-banner>
      <newsletter-sign></newsletter-sign>
      <footer-app></footer-app>
    `;
  }
}

customElements.define("home-app", Home);
