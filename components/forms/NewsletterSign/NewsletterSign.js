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
                    <default-input placeholder="Digite seu nome"></default-input>
                    <default-input placeholder="Digite seu e-mail"></default-input>
                    <label class="option">
                        <input type="checkbox" class="checkbox" name="allow" >
                        Estou de acordo com a 
                        <a href="https://penseavanti.com.br/politica-de-privacidade/" target="blank">Política de privacidade</a>
                     </label>
      
                    <default-button value="Cadastrar"></default-button>
                </form>
            </div>
        </section>
      `;
  }
}

customElements.define("newsletter-sign", NewsletterSign);
