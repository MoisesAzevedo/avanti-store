import { down_arrow_svg } from "../../../img/icons/dow-arrow.js";

class MenuTree extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [baseStyles, mobileStyles] = await Promise.all([
      fetch(new URL("../../../shadow-base.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./MenuTree.mobile.css", import.meta.url)).then((res) =>
        res.text()
      )
    ]);

    let data = [
      {
        title: "Title 1",
        content: ["<p>TEST</p>"]
      },
      {
        title: "Title 2",
        content: ["<p>TEST 2</p>"]
      }
    ];

    // Sobrescreve com o que vier via atributo (se existir)
    const attrData = this.getAttribute("itemContent");
    if (attrData) {
      try {
        data = JSON.parse(attrData);
      } catch (e) {
        console.error("Atributo itemContent inválido:", e);
      }
    }

    const sectionContent = data
      .map(
        ({ title, content }) => `
          <div class="expanded">
            <div class="title-arrow">
                <h5>${title}</h5>
                <figure>${down_arrow_svg}</figure>
            </div>
            <div class="item">
                ${content.join("")}
            </div>            
          </div>
        `
      )
      .join("");

    this.shadowRoot.innerHTML = `
      <style>
        ${baseStyles}
        ${mobileStyles}
      </style>
      <section class="container">
        <div class="content">
          ${sectionContent}
        </div>
      </section>
    `;

    const expandeds = this.shadowRoot.querySelectorAll(".expanded");

    expandeds.forEach((expanded) => {
      const titleArrow = expanded.querySelector(".title-arrow");
      const item = expanded.querySelector(".item");
      const arrow = titleArrow.querySelector("figure");

      item.style.maxHeight = "0px"; // initial state

      titleArrow.addEventListener("click", () => {
        const isOpen = item.classList.contains("show");

        // close the others
        expandeds.forEach((otherExpanded) => {
          const otherItem = otherExpanded.querySelector(".item");
          const otherArrow = otherExpanded.querySelector(".title-arrow figure");

          if (otherItem !== item) {
            otherItem.classList.remove("show");
            otherItem.style.maxHeight = "0px";
            otherArrow.classList.remove("rotate-up");
          }
        });

        if (!isOpen) {
          item.classList.add("show");
          item.style.maxHeight = item.scrollHeight + "px";
          arrow.classList.add("rotate-up");

          // Scrolla até o título da seção
          titleArrow.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          item.classList.remove("show");
          item.style.maxHeight = "0px";
          arrow.classList.remove("rotate-up");
        }
      });
    });
  }
}

customElements.define("menu-tree", MenuTree);
