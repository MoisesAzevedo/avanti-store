import "../../components/Header/Header.js";
import "../../components/Promotion/Promotion.js";
import "../../components/banners/Banner/Banner.js";
import "../../components/banners/CupBanner/CupBanner.js";
import "../../components/banners/MapBanner/MapBanner.js";
import "../../components/banners/TextBanner/TextBanner.js";
import "../../components/forms/NewsletterSign/NewsletterSign.js";
import "../../components/Footer/Footer.js";
import "../../components/carousels/LoopCarouselSL/LoopCarouselSl.js";

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
      <section class="promotion">
        <promotion-app ></promotion-app>
      </section>

      <section class="header" >
        <header-app ></header-app>
      </section>

      <section class="banner">
        <banner-component ></banner-component>
      </section>

      <section class="carousel-first">
        <loop-carousel-sl ></loop-carousel-sl>
      </section>

      <section class="cup-banner-first" >
        <cup-banner></cup-banner>
      </section>

      <section class="map-banner">
        <map-banner></map-banner>
      </section>

      <section class="cup-banner-second">
        <cup-banner></cup-banner>
      </section>

      <section class="carousel-second">
        <loop-carousel-sl></loop-carousel-sl>      
      </section>

      <section class="text-banner">
        <text-banner></text-banner>
      </section>

      <section class="newsletter-sign">
        <newsletter-sign></newsletter-sign>
      </section>

      <section class="footer">
        <footer-app></footer-app>
      </section>
      
   
    `;
  }
}

customElements.define("home-app", Home);
