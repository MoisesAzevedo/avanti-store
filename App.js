import "./pages/home/home.js";

class App extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <home-app></home-app>
    `;
  }
}

//registra a tag personalizada
customElements.define("root-app", App);
