class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // encapsula o estilo
  }

  async connectedCallback() {
    const response = await fetch(new URL("./Header.css", import.meta.url));
    const css = await response.text();

    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <div class="header-container">
        <h1>Hello world</h1>
      </div>
    `;
  }
}

customElements.define("header-app", Header);
