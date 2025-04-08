class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // encapsula o estilo
  }

  //uso de shadow DOM para tornar o uso do css modular
  async connectedCallback() {
    const response = await fetch(new URL("./Header.css", import.meta.url));
    const css = await response.text();
    const user_name = "Tiago";

    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <section class="header-container">
     
        <div class="content"> 
          <div class="actions" >
            <img src="../../img/logo.svg" ></img>
           
            <div class="search-bar">
             <input></input>
             <img src="../../img/icons/search.svg"></img>
            </div>
           
            <div class="cart-and-user">
              <img src="../../img/icons/person.svg"></img>
              <div class="hello-user">
              <p>Olá,</p>
              <p>${user_name}!</p>
              </div>
              <div class="cart-button">
                <img src="../../img/icons/cart.svg"></img>
              </div>
            </div>
          </div>  
          <div class="menu"></div>  
        </div>
      </section>
    `;
  }
}

customElements.define("header-app", Header);
