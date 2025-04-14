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
            ola
          </section>
        </div>
      `;
  }
}

customElements.define("banner-component", Banner);
