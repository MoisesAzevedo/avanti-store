import "../buttons/BorderButton/BorderButton.js";

class BannerNewArrives extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [baseStyles, customStyles] = await Promise.all([
      fetch(new URL("../../shadow-base.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./BannerNewArrives.desktop.css", import.meta.url)).then(
        (res) => res.text()
      )
    ]);

    this.shadowRoot.innerHTML = `
        <style>
            ${baseStyles}
            ${customStyles}
        </style>
        <div>
            <section class="banner">       
                <div class="banner-content">
                    <div class="text">
                        <div class="first-text"> 
                            <h1>Confira os</h1>
                            <h1>Produtos</h1>
                        </div>
                        <div class="second-test"> 
                            <h1>Que</h1> 
                            <h1>acabaram</h1> 
                            <h1>De chegar</h1> 
                        </div>
                    </div>
                    <border-button value="VER MAIS"></border-button>
                </div> 
            </seciton>
        </div>
        `;
  }
}

customElements.define("banner-new-arrives", BannerNewArrives);
