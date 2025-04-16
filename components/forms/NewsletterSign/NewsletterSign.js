import "../../inputs/DefaultInput/DefaultInput.js";
import "../../buttons/DefaultButton/DefaultButton.js";

class NewsletterSign extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [baseStyles, desktopStyles, mobileStyles] = await Promise.all([
      fetch(new URL("../../../shadow-base.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./NewsletterSign.desktop.css", import.meta.url)).then(
        (res) => res.text()
      ),
      fetch(new URL("./NewsletterSign.mobile.css", import.meta.url)).then(
        (res) => res.text()
      )
    ]);

    this.shadowRoot.innerHTML = `
        <style>
          ${baseStyles}
          ${desktopStyles}
          ${mobileStyles}
        </style>
        <section class="container">
            <div class="content"">
                <div class="title">
                    <h2>Cadastre-se em nossa</h2>        
                    <h2 class="diferent-h2">newsletter</h2>        
                </div>
                <form class="form">
                    <div class="form-content">
                        <default-input placeholder="Digite seu nome" class="input-text"></default-input>
                        <default-input placeholder="Digite seu e-mail" class="input-text"></default-input>
                        <label class="option">
                            <label class="checkbox-wrapper">
                                <input type="checkbox" class="hidden-checkbox" />
                                <span class="custom-checkbox"></span>
                            </label>
                            Estou de acordo com a 
                            <a href="https://penseavanti.com.br/politica-de-privacidade/" target="blank">Política de privacidade</a>
                        </label>
                        
                        <default-button value="Cadastrar" class="button"></default-button>
                    </div>
                </form>
            </div>
        </section>
      `;
  }
}

customElements.define("newsletter-sign", NewsletterSign);
