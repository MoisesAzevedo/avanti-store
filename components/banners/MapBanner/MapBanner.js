import { map_pin_svg } from "@img/icons/map-pin.js";

class MapBanner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [baseStyles, desktopStyles, mobileStyles] = await Promise.all([
      fetch(new URL("../../../shadow-base.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./MapBanner.desktop.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./MapBanner.mobile.css", import.meta.url)).then((res) =>
        res.text()
      )
    ]);

    this.shadowRoot.innerHTML = `
        <style>
          ${baseStyles}
          ${desktopStyles}
          ${mobileStyles}
        </style>
        <section class="container">
          <div class="content">
            <figure class="image-mobile">
            </figure>
            <article class="text">
                <div class="title">
                    <h1>LOREM IPSUM</h1>
                </div>
                <div class="paragraph">
                    <figure class="icon">
                      <div>
                        ${map_pin_svg}
                      </div>
                    </figure>
                    <p>
                      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, 
                      nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                      pretium quis, sem. 
                    </p>
                </div>
                <div class="paragraph">
                    <figure class="icon">
                      <div>
                        ${map_pin_svg}
                      </div>
                    </figure>
                    <p>
                      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, 
                      nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                      pretium quis, sem. 
                    </p>
                </div>
                <div class="paragraph">
                    <figure class="icon">
                      <div>
                        ${map_pin_svg}
                      </div>
                    </figure>
                    <p>
                      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, 
                      nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                      pretium quis, sem. 
                    </p>
                </div>                
            </article>
            <figure class="image">
            </figure>
          </div>
        </section>
      `;
  }
}

customElements.define("map-banner", MapBanner);
