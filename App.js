import "./pages/home/home.js";

class App extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <home-app></home-app>
    `;
  }
}

//registered a personalized tag
customElements.define("root-app", App);
