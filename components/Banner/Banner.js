class Banner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [baseStyles, desktopStyles, mobileStyles] = await Promise.all([
      fetch(new URL("../../shadow-base.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./Banner.desktop.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./Banner.mobile.css", import.meta.url)).then((res) =>
        res.text()
      )
    ]);

    this.shadowRoot.innerHTML = `
        <style>
          ${baseStyles}
          ${desktopStyles}
          ${mobileStyles}
        </style>
        <div>
          <section class="container">
            <div class="content">
                <img src="img/images/chair-clothes.png" class="banner-img"></img>
                <div class="text">
                    <div class="title1">
                        <h1>SUPER</h1>
                        <h1>SALE</h1>
                    </div>
                    <h2 class="title2">I T E N S    S E L E C I O N A D O S    C O M    A T É</h2>
                    <h1 class="title3">50%OFF</h1>
                </div>            
            </div>

          </section>
        </div>
      `;
  }
}

customElements.define("banner-component", Banner);
