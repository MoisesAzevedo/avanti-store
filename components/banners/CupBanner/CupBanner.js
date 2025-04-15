class CupBanner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [baseStyles, desktopStyles, mobileStyles] = await Promise.all([
      fetch(new URL("../../../shadow-base.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./CupBanner.desktop.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./CupBanner.mobile.css", import.meta.url)).then((res) =>
        res.text()
      )
    ]);

    this.shadowRoot.innerHTML = `
        <style>
          ${baseStyles}
          ${desktopStyles}
          ${mobileStyles}
        </style>

        
        <section class="container">
            <div class="content">
              <div class="image">
                <img src="img/images/tilted-cup.png"></img>
              </div>
              <div class="text">
                <h1 class="title">CANECA AVANTI</h1>
                <p class="p1">
                  A Caneca AVANTI é a combinação perfeita de estilo e funcionalidade para 
                  o seu dia a dia. Com um design moderno e sofisticado, ela se destaca 
                  em qualquer ambiente, seja no escritório ou em casa. Fabricada com 
                  materiais de alta qualidade, a Caneca AVANTI garante durabilidade e 
                  resistência, acompanhando você em inúmeros momentos de relaxamento e 
                  produtividade. Seu formato ergonômico proporciona um encaixe confortável 
                  nas mãos, tornando a experiência de saborear sua bebida favorita ainda 
                  mais prazerosa.
                </p>

                <p class="p2">
                  Seja para um café revigorante pela manhã, um chá relaxante à tarde ou um 
                  chocolate quente aconchegante à noite, a Caneca AVANTI é a escolha ideal 
                  para complementar seus rituais diários. Adicione um toque de elegância e 
                  requinte aos seus momentos de pausa e desfrute de cada gole com muito 
                  mais estilo e satisfação. Não perca a oportunidade de adquirir a sua 
                  Caneca AVANTI agora mesmo e eleve a sua experiência de degustação a um 
                  novo patamar de prazer e sofisticação!
                </p>
              </div>
            </div>
        </section>
      `;
  }
}

customElements.define("cup-banner", CupBanner);
