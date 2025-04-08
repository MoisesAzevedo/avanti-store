class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div>
      <h1>hello world</h1>  
      </div>
    `;
  }
}

customElements.define("header-app", Header);
