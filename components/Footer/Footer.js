import { logo_svg } from "@img/logo.js";
import { instagram_svg } from "@img/icons/instagram.js";
import { facebook_svg } from "@img/icons/facebook.js";
import { youtube_svg } from "@img/icons/youtube.js";
import { tiktok_svg } from "@img/icons/tiktok.js";
import { amex_svg } from "@img/icons/payment/amex.js";
import { mastercard_svg } from "@img/icons/payment/mastercard.js";
import { visa_svg } from "@img/icons/payment/visa.js";
import { hipercard_svg } from "@img/icons/payment/hipercard.js";
import { elo_svg } from "@img/icons/payment/elo.js";
import { dinners_svg } from "@img/icons/payment/dinners.js";
import { paypal_svg } from "@img/icons/payment/paypal.js";
import { pix_svg } from "@img/icons/payment/pix.js";
import { boleto_svg } from "@img/icons/payment/boleto.js";
import { lets_encript_svg } from "@img/logos/lets_encript.js";
import { vtex_pci_svg } from "@img/logos/vtex_pci.js";
import { vtex_svg } from "@img/logos/vtex.js";
import { links_service } from "../../services/links.js";
import { links_media } from "../../services/links.js";
import { contact_service } from "../../services/contact.js";

import "../menu/MenuTree/MenuTree.js";
import "./Components/LinksMenuTree/InstitutionalMenu.js";
import "./Components/LinksMenuTree/HelpMenu.js";
import "./Components/LinksMenuTree/ServicesMenu.js";

class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [baseStyles, desktopStyles, mobileStyles] = await Promise.all([
      fetch(new URL("../../shadow-base.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./Footer.desktop.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./Footer.mobile.css", import.meta.url)).then((res) =>
        res.text()
      )
    ]);

    const service_url = links_service;
    const media_url = links_media;
    const contact = contact_service;
    const menuTreeContent = [
      {
        title: "Institucional",
        content: ["<institutional-menu></institutional-menu>"]
      },
      { title: "Central de Ajuda", content: ["<help-menu></help-menu>"] },
      { title: "Atendimento", content: ["<services-menu></services-menu>"] }
    ];

    this.shadowRoot.innerHTML = `
        <style>
          ${baseStyles}
          ${desktopStyles}
          ${mobileStyles}
        </style>
        <section class="container">
            <section class="resources">
                <div class="wrapper-resources">

                    <div class="social-and-links">
                        <figure class="social">
                            <div class="logo">
                              ${logo_svg}
                            </div>
                            <div class="media">
                              <a href="${
                                media_url.instagram
                              }" class="media-link" target="_blank" rel="noopener noreferrer">
                                ${instagram_svg}
                              </a>
                              <a href="${
                                media_url.facebook
                              }" class="media-link" target="_blank" rel="noopener noreferrer">
                                ${facebook_svg}
                              </a>
                              <a href="${
                                media_url.youtube
                              }" target="_blank" rel="noopener noreferrer">
                                ${youtube_svg}
                              </a>
                              <a href="${
                                media_url.tiktok
                              }"  class="media-link" target="_blank" rel="noopener noreferrer">
                                ${tiktok_svg}
                              </a>
                            </div>
                        </figure>
                   
                        <menu-tree class="links-mobile" itemContent='${JSON.stringify(
                          menuTreeContent
                        )}'></menu-tree>

                        <ul class="links-desktop">
                            <li class="institutional">
                                <h4>Institucional</h4>
                                <h5><a href="${
                                  service_url.about
                                }" target="_blank" rel="noopener noreferrer">Sobre Nós</a></h5>
                                <h5><a href="${
                                  service_url.store
                                }" target="_blank" rel="noopener noreferrer">Nossas Lojas</a></h5>
                                <h5><a href="${
                                  service_url.privacy
                                }" target="_blank" rel="noopener noreferrer">Privacidade e Segurança</a></h5>
                                <h5><a href="${
                                  service_url.home
                                }" target="_blank" rel="noopener noreferrer">Termos e Condições</a></h5>
                            </li>
                            <li class="help">
                                <h4>Central de Ajuda</h4>
                                <h5><a href="${
                                  service_url.talk
                                }" target="_blank" rel="noopener noreferrer">Fale Conosco</a></h5>
                                <h5><a href="${
                                  service_url.home
                                }" target="_blank" rel="noopener noreferrer">Frete e Entregas</a></h5>
                                <h5><a href="${
                                  service_url.home
                                }" target="_blank" rel="noopener noreferrer">Trocas e Devoluções</a></h5>
                                <h5><a href="${
                                  service_url.home
                                }" target="_blank" rel="noopener noreferrer">Formas de Pagamento</a></h5>                            
                                <h5><a href="${
                                  service_url.home
                                }" target="_blank" rel="noopener noreferrer">FAQ</a></h5>                            
                            </li>
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
                                    <h5>Segunda a Sábado: ${
                                      contact.hour.mon_sun_start
                                    } às ${contact.hour.mon_sun_end}</h5>
                                    <h5>Domingos e Feriados: ${
                                      contact.hour.non_working_start
                                    } às ${contact.hour.non_working_end}</h5>
                                </div>                                
                            </li>
                        </ul>
                    </div>
                    <div class="payment"/>
                      <div class="payment-content">
                        ${amex_svg}
                        ${mastercard_svg}
                        ${visa_svg}
                        ${hipercard_svg}
                        ${elo_svg}
                        ${dinners_svg}
                        ${paypal_svg}
                        ${pix_svg}
                        ${boleto_svg}
                      </div>
                    <div>
                </div>
            </section>
            <section class="certificate">
              <div class="wrapper-certificate">
                <article class="text-certificate">
                  <p class="text-certificate-desktop">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut 
                    wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit 
                    lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure 
                    dolor in hendrerit in vulputate velit esse molestie consequat, vel illum 
                    dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio 
                    dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te 
                    feugait nulla facilisi.
                  </p>
                  <p class="text-certificate-mobile">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
                  </p>
                </article>
                <figure class="logos-certificate">
                  ${lets_encript_svg}
                  ${vtex_pci_svg}
                  <div class="logo-avanti">
                    ${logo_svg}
                  </div>
                  ${vtex_svg}
                </figure>
              </div>
            </section>
        </section>
      `;
  }
}

customElements.define("footer-app", Footer);
