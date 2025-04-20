import { clothes_service } from "../../../services/clothes.js";
import { chevron_arrow_svg } from "../../../img/icons/chevron-arrow.js";
import "../../buttons/DefaultButton/DefaultButton.js";

class LoopCarouselSlMobile extends HTMLElement {
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

    const clothes_slice1 = clothes_service.slice(0, 2);
    const clothes_slice2 = clothes_service.slice(2, 4);
    const clothes_slice3 = clothes_service.slice(4, 6);

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
  }
}

customElements.define("loop-carousel-sl-mobile", LoopCarouselSlMobile);
