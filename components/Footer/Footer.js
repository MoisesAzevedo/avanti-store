import { logo_svg } from "@img/logo.js";
import { instagram_svg } from "@img/icons/instagram.js";
import { facebook_svg } from "@img/icons/facebook.js";
import { youtube_svg } from "@img/icons/youtube.js";
import { tiktok_svg } from "@img/icons/tiktok.js";

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

    const urls = {
      about: "https://penseavanti.com.br/quem-somos/",
      store:
        "https://penseavanti.com.br/?utm_source=avanti_marketing&utm_medium=direct&utm_campaign=site",
      privacy: "https://penseavanti.com.br/politica-de-privacidade/",
      home: "https://penseavanti.com.br/",
      talk: "https://penseavanti.com.br/quem-somos/#form-contact"
    };

    const contact = {
      phone: "(00) 1234-5678",
      email: "contato@penseavanti.com.br",
      hour: {
        mon_sun_start: "07h00",
        mon_sun_end: "23h00",
        non_working_start: "07h00",
        non_working_end: "21h00"
      }
    };

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
                                ${instagram_svg}
                                ${facebook_svg}
                                ${youtube_svg}
                                ${tiktok_svg} 
                             </div>
                        </figure>
                        <ul class="links">
                            <li class="institutional">
                                <h4>Institucional</h4>
                                <h5><a href="${urls.about}" target="_blank" rel="noopener noreferrer">Sobre Nós</a></h5>
                                <h5><a href="${urls.store}" target="_blank" rel="noopener noreferrer">Nossas Lojas</a></h5>
                                <h5><a href="${urls.privacy}" target="_blank" rel="noopener noreferrer">Privacidade e Segurança</a></h5>
                                <h5><a href="${urls.home}" target="_blank" rel="noopener noreferrer">Termos e Condições</a></h5>
                            </li>
                            <li class="help">
                                <h4>Central de Ajuda</h4>
                                <h5><a href="${urls.talk}" target="_blank" rel="noopener noreferrer">Fale Conosco</a></h5>
                                <h5><a href="${urls.home}" target="_blank" rel="noopener noreferrer">Frete e Entregas</a></h5>
                                <h5><a href="${urls.home}" target="_blank" rel="noopener noreferrer">Trocas e Devoluções</a></h5>
                                <h5><a href="${urls.home}" target="_blank" rel="noopener noreferrer">Formas de Pagamento</a></h5>                            
                                <h5><a href="${urls.home}" target="_blank" rel="noopener noreferrer">FAQ</a></h5>                            
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
                                    <h5>Segunda a Sábado: ${contact.hour.mon_sun_start} às ${contact.hour.mon_sun_end}</h5>
                                    <h5>Domingos e Feriados: ${contact.hour.non_working_start} às ${contact.hour.non_working_end}</h5>
                                </div>                                
                                 
                            </li>
                        </ul>
                    </div>
                    <div class="payment"/><div>
                </div>
            </section>
            <section class="certificate">
                <div class="wrapper">
                
                </div>
            </section>
        </section>
      `;
  }
}

customElements.define("footer-app", Footer);
