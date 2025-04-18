import { links_service } from "../../../../services/links.js";
import { contact_service } from "../../../../services/contact.js";

class ServicesMenu extends HTMLElement {
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
          <li class="services">
            <h4>Atendimento</h4>
            <div class="phone">
              <h5>Telefone: </h5>
              <h5>${contact.phone}</h5>
            </div>
            <div class="email">
              <h5>E-mail: </h5>
              <h5>${contact.email}</h5>
            </div>
            <div class="service-hour">
              <h5>Horário de atendimento:</h5>
              <h5>Segunda a Sábado: ${contact.hour.mon_sun_start} às ${contact.hour.mon_sun_end}</h5>
              <h5>Domingos e Feriados: ${contact.hour.non_working_start} às ${contact.hour.non_working_end}</h5>
            </div>
          </li>
        </ul>
      </section>
    `;
  }
}

customElements.define("services-menu", ServicesMenu);
