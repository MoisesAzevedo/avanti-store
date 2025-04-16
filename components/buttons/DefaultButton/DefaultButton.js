class DefaultButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [baseStyles, customStyles] = await Promise.all([
      fetch(new URL("../../../shadow-base.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./DefaultButton.css", import.meta.url)).then((res) =>
        res.text()
      )
    ]);

    const value = this.getAttribute("value") || "Clique Aqui";

    this.shadowRoot.innerHTML = `
        <style>
          ${baseStyles}
          ${customStyles}
        </style>
        <section class=”container”>
          <button class="button" >${value}</button>
        </section>
      `;
  }
}

customElements.define("default-button", DefaultButton);
