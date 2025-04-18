import { links_service } from "../../../../services/links.js";
import { contact_service } from "../../../../services/contact.js";

class InstitutionalMenu extends HTMLElement {
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
          <li class="institutional">
            <h5><a href="${service_url.about}" target="_blank" rel="noopener noreferrer">Sobre Nós</a></h5>
            <h5><a href="${service_url.store}" target="_blank" rel="noopener noreferrer">Nossas Lojas</a></h5>
            <h5><a href="${service_url.privacy}" target="_blank" rel="noopener noreferrer">Privacidade e Segurança</a></h5>
            <h5><a href="${service_url.home}" target="_blank" rel="noopener noreferrer">Termos e Condições</a></h5>
          </li>
        </ul>
      </section>
    `;
  }
}

customElements.define("institutional-menu", InstitutionalMenu);
