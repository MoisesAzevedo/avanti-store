import { clothes_service } from "../../../services/clothes.js";
import { chevron_arrow_svg } from "../../../img/icons/chevron-arrow.js";
import "../../buttons/DefaultButton/DefaultButton.js";

class LoopCarouselSl extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const [baseStyles, desktopStyle, mobileStyle] = await Promise.all([
      fetch(new URL("../../../global.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./LoopCarouselSl.desktop.css", import.meta.url)).then(
        (res) => res.text()
      ),
      fetch(new URL("./LoopCarouselSl.mobile.css", import.meta.url)).then(
        (res) => res.text()
      )
    ]);

    let clothes_slice1 = [];
    let clothes_slice2 = [];
    let clothes_slice3 = [];

    /* responsiveness display */
    if (window.innerWidth >= 768) {
      clothes_slice1 = clothes_service.slice(0, 5);
      clothes_slice2 = clothes_service.slice(5, 10);
      clothes_slice3 = clothes_service.slice(10, 15);
    } else {
      clothes_slice1 = clothes_service.slice(0, 2);
      clothes_slice2 = clothes_service.slice(2, 4);
      clothes_slice3 = clothes_service.slice(4, 6);
    }

    this.innerHTML = `
      <style>
        ${baseStyles}
        ${desktopStyle}
        ${mobileStyle}
        
     
      </style>

      <section class="container">
        <div class="content">
       
          <header class="carousel-header">
            <h1>Lançamentos</h1>
            <p>Ver mais</p>
          </header>

          <sl-carousel class="my-carousel" loop pagination>
          <div class="left-arrow">
              <button id="prev-btn">${chevron_arrow_svg}</button>            
          </div>
          <div class="right-arrow">
              <button id="next-btn">${chevron_arrow_svg}</button>            
          </div>

            <sl-carousel-item>
              ${clothes_slice1
                .map(
                  (clothes) => `
                <div class="card">
                  <div class="new-tag">
                    Novo
                  </div>

                  <figure> 
                    <img src="${clothes.image}" />
                  </figure>
                  <h3>${clothes.title}</h3>
                 
                  <div class="price">
                    <div class="monetary">
                      <p>${clothes.old_value}</p>
                      <p>${clothes.current_value}</p>
                    </div>
                    <div class="percentage">
                      <div class="tag">
                        <p>${clothes.discount_percent} OFF</p>
                      </div>
                    </div>
                  </div>

                  <div class="installments">
                    <p>Ou em até </p>
                    <p class="weight">
                      ${clothes.installments_quantity}x de ${clothes.installments_value}
                    </p>
                  </div>

                  <div class="buy-button">
                    <default-button value="Comprar"></default-button>
                  </div>

                </div>
              `
                )
                .join("")}
            </sl-carousel-item>

            <sl-carousel-item>
              ${clothes_slice2
                .map(
                  (clothes) => `
                <div class="card">
                  <div class="new-tag">
                    Novo
                  </div>

                  <figure> 
                    <img src="${clothes.image}" />
                  </figure>
                  <h3>${clothes.title}</h3>
                 
                  <div class="price">
                    <div class="monetary">
                      <p>${clothes.old_value}</p>
                      <p>${clothes.current_value}</p>
                    </div>
                    <div class="percentage">
                      <div class="tag">
                        <p>${clothes.discount_percent} OFF</p>
                      </div>
                    </div>
                  </div>

                  <div class="installments">
                    <p>Ou em até </p>
                    <p class="weight">
                      ${clothes.installments_quantity}x de ${clothes.installments_value}
                    S</p>
                  </div>

                  <div class="buy-button">
                    <default-button></default-button>
                  </div>

                </div>
              `
                )
                .join("")}            
            </sl-carousel-item>
            <sl-carousel-item>
              ${clothes_slice3
                .map(
                  (clothes) => `
                <div class="card">
                  <div class="new-tag">
                    Novo
                  </div>                
                  <figure> 
                    <img src="${clothes.image}" />
                  </figure>
                  <h3>${clothes.title}</h3>
                 
                  <div class="price">
                    <div class="monetary">
                      <p>${clothes.old_value}</p>
                      <p>${clothes.current_value}</p>
                    </div>
                    <div class="percentage">
                      <div class="tag">
                        <p>${clothes.discount_percent} OFF</p>
                      </div>
                    </div>
                  </div>

                  <div class="installments">
                    <p>Ou em até </p>
                    <p class="weight">
                      ${clothes.installments_quantity}x de ${clothes.installments_value}
                    S</p>
                  </div>

                  <div class="buy-button">
                    <default-button></default-button>
                  </div>

                </div>
              `
                )
                .join("")}            
            </sl-carousel-item>
          </sl-carousel>


        </div>
      </section>
    `;

    const carousel = this.querySelector(".my-carousel");
    const container = this.querySelector(".container");

    await customElements.whenDefined("sl-carousel");

    this.querySelector("#prev-btn").addEventListener("click", () => {
      carousel.previous("smooth");
    });

    this.querySelector("#next-btn").addEventListener("click", () => {
      carousel.next("smooth");
    });

    // autoplay
    let autoplay = null;

    const startAutoplay = () => {
      if (autoplay === null) {
        autoplay = setInterval(() => {
          carousel.next("smooth");
        }, 5000);
      }
    };

    // pause autoplay
    const stopAutoplay = () => {
      if (autoplay !== null) {
        clearInterval(autoplay);
        autoplay = null;
      }
    };

    // init autoplay
    startAutoplay();

    // Pausar e retomar conforme interação
    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);
    carousel.addEventListener("focusin", stopAutoplay);
    carousel.addEventListener("focusout", startAutoplay);
  }
}

customElements.define("loop-carousel-sl", LoopCarouselSl);
