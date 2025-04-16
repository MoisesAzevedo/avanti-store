class DefaultInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [baseStyles, customStyles] = await Promise.all([
      fetch(new URL("../../../shadow-base.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./DefaultInput.css", import.meta.url)).then((res) =>
        res.text()
      )
    ]);

    const placeholder = this.getAttribute("placeholder") || "";
    const value = this.getAttribute("value") || "";

    this.shadowRoot.innerHTML = `
        <style>
          ${baseStyles}
          ${customStyles}
        </style>
        <section class="container">
          <input 
            class="input-text"
            placeholder="${placeholder}"
            value="${value}"
          />
        </section>
      `;
  }
}

customElements.define("default-input", DefaultInput);
