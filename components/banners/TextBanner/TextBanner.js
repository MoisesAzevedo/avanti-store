class TextBanner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [baseStyles, desktopStyle, mobileStyle] = await Promise.all([
      fetch(new URL("../../../shadow-base.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./TextBanner.desktop.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./TextBanner.mobile.css", import.meta.url)).then((res) =>
        res.text()
      )
    ]);

    this.shadowRoot.innerHTML = `
        <style>
          ${baseStyles}
          ${desktopStyle}
          ${mobileStyle}
        </style>
        <section class="container">
            <figure class="content">
                <article class="text">
                    <p>Entre em contato conosco e verifique a disponibilidade para sua região!</p>
                </article>
            </figure>
        </section>
      `;
  }
}

customElements.define("text-banner", TextBanner);
