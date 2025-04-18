import { links_service } from "../../../../services/links.js";
import { contact_service } from "../../../../services/contact.js";

class HelpMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [baseStyles, mobileStyles] = await Promise.all([
      fetch(new URL("../../../../shadow-base.css", import.meta.url)).then(
        (res) => res.text()
      ),
      fetch(new URL("./LinksMenuTree.mobile.css", import.meta.url)).then(
        (res) => res.text()
      )
    ]);

    const service_url = links_service;
    const contact = contact_service;

    this.shadowRoot.innerHTML = `
      <style>
        ${baseStyles}
        ${mobileStyles}
      </style>
      <section>
        <ul class="links-desktop">
          <li class="help">
            <h5><a href="${service_url.talk}" target="_blank" rel="noopener noreferrer">Fale Conosco</a></h5>
            <h5><a href="${service_url.home}" target="_blank" rel="noopener noreferrer">Frete e Entregas</a></h5>
            <h5><a href="${service_url.home}" target="_blank" rel="noopener noreferrer">Trocas e Devoluções</a></h5>
            <h5><a href="${service_url.home}" target="_blank" rel="noopener noreferrer">Formas de Pagamento</a></h5>
            <h5><a href="${service_url.home}" target="_blank" rel="noopener noreferrer">FAQ</a></h5>
          </li>
        </ul>
      </section>
    `;
  }
}

customElements.define("help-menu", HelpMenu);
