class Promotion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // encapsula o estilo
  }

  async connectedCallback() {
    const [globalStyles, desktopStyle, mobileStyle] = await Promise.all([
      fetch(new URL("../../shadow-base.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./Promotion.desktop.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./Promotion.mobile.css", import.meta.url)).then((res) =>
        res.text()
      )
    ]);

    this.shadowRoot.innerHTML = `
        <style>${globalStyles} ${desktopStyle} ${mobileStyle}</style>
        <section class="promotion-container">
            <div class="text">
                <p>Ganhe </p>  
                <div class="diferent-background">R$10,00</div> 
                <p> de desconto no seu primeiro pedido. Utilize o cupom</p>
                <p class="light-text">DESCONTO10</p>
            </div>
            
             <div class="text-mobile">
                <div class="line">
                  <p>Ganhe </p>     
                  <div class="diferent-background">R$10,00</div> 
                  <p> de desconto no seu primeiro pedido. </p>
                </div>
                <div class="line">
                  <p> Utilize o cupom</p>
                  <p class="light-text">DESCONTO10</p>
                </div>
            </div>
        </section>
      `;
  }
}

customElements.define("promotion-app", Promotion);
