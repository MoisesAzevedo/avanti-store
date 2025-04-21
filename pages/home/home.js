import "../../components/Header/Header.js";
import "../../components/Promotion/Promotion.js";
import "../../components/banners/Banner/Banner.js";
import "../../components/banners/CupBanner/CupBanner.js";
import "../../components/banners/MapBanner/MapBanner.js";
import "../../components/banners/TextBanner/TextBanner.js";
import "../../components/forms/NewsletterSign/NewsletterSign.js";
import "../../components/Footer/Footer.js";
import "../../components/carousels/LoopCarouselSL/LoopCarouselSl.js";

/* observes */
import { observeElementVisibility } from "./observers/intersectionObserver.js";

class Home extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [globalStyles, defaultStyles, observerAnimation] = await Promise.all([
      fetch(new URL("../../shadow-base.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./home.styles.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./observer.css", import.meta.url)).then((res) =>
        res.text()
      )
    ]);

    this.shadowRoot.innerHTML = `
      <style>
          ${globalStyles}
          ${defaultStyles}
          ${observerAnimation}
        
        </style>
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

    setTimeout(() => {
      const banner = this.shadowRoot.querySelector(".banner");
      const carouselFirst = this.shadowRoot.querySelector(".carousel-first");
      const cupBannerFirst = this.shadowRoot.querySelector(".cup-banner-first");
      const mapBanner = this.shadowRoot.querySelector(".map-banner");
      const cupBannerSecond =
        this.shadowRoot.querySelector(".cup-banner-second");
      const carouselSecond = this.shadowRoot.querySelector(".carousel-second");
      const textBanner = this.shadowRoot.querySelector(".text-banner");
      const newsletterSign = this.shadowRoot.querySelector(".newsletter-sign");

      observeElementVisibility(carouselFirst, (el) => {
        el.classList.add("animate-in");
      });

      observeElementVisibility(banner, (el) => {
        el.classList.add("animate-in");
      });

      observeElementVisibility(cupBannerFirst, (el) => {
        el.classList.add("animate-in");
      });

      observeElementVisibility(mapBanner, (el) => {
        el.classList.add("animate-in");
      });

      observeElementVisibility(cupBannerSecond, (el) => {
        el.classList.add("animate-in");
      });

      observeElementVisibility(carouselSecond, (el) => {
        el.classList.add("animate-in");
      });

      observeElementVisibility(textBanner, (el) => {
        el.classList.add("animate-in");
      });

      observeElementVisibility(newsletterSign, (el) => {
        el.classList.add("animate-in");
      });
    }, 1000);
  }
}

customElements.define("home-app", Home);
