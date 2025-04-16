class BorderButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [baseStyles, customStyles] = await Promise.all([
      fetch(new URL("../../../shadow-base.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./BorderButton.css", import.meta.url)).then((res) =>
        res.text()
      )
    ]);

    const value = this.getAttribute("value") || "CLIQUE AQUI";

    this.shadowRoot.innerHTML = `
        <style>
          ${baseStyles}
          ${customStyles}
        </style>
        <div>
            <div class="button">
                <p class="button-value">${value}</p>
            </div>
        </div>
          
   
      `;
  }
}

customElements.define("border-button", BorderButton);
