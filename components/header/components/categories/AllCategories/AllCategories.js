import { right_arrow_svg } from "@img/icons/right-arrow.js";
import { categories } from "../categories.js";

class allCategoriesPlus extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [desktopStyles, defaultStyles, globalStyles] = await Promise.all([
      fetch(new URL("./AllCategories.desktop.css", import.meta.url)).then(
        (res) => res.text()
      ),
      fetch(new URL("../default.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("../../../../../shadow-base.css", import.meta.url)).then(
        (res) => res.text()
      )
    ]);

    this.shadowRoot.innerHTML = `
      <style>
        ${desktopStyles}
        ${defaultStyles}
        ${globalStyles}
      </style>
     <div class="container">
    <div class="wrapper"> 
      <section class="list-container">
        <div class="list-overflow">
          <ul class="list">
            ${Object.entries(categories)
              .map(
                ([key, submenuData]) => `
                  <div class="list-wrapper">
                     <div class="list-item">
                       <li>${submenuData.name}</li>
                       <li class="arrow">${right_arrow_svg}</li>
                     </div>
                     <section class="categories-items-container">
                        <div class="categories-items">
                           ${submenuData.item}                     
                        </div>
                     </section>
                  </div>
                `
              )
              .join("")}
          </ul>
        </div>
      </section>
  
    </div>
   
  </div>
    `;
    const listItems = this.shadowRoot.querySelectorAll(".list-item");

    //mouseouver to .list-item
    listItems.forEach((item) => {
      item.addEventListener("mouseover", () => {
        const allContainers = this.shadowRoot.querySelectorAll(
          ".categories-items-container"
        );

        //hidden all categories-item-container
        allContainers.forEach((el) => {
          el.style.visibility = "";
          el.style.pointerEvents = "";
        });

        //select the current categories-item
        const container = item
          .closest(".list-wrapper")
          ?.querySelector(".categories-items-container");

        if (container) {
          container.style.visibility = "visible";
          container.style.pointerEvents = "auto";
        }

        //reset the color of all list-items
        listItems.forEach((el) => {
          el.style.color = "black";
          el.style.fontWeight = "100";
        });

        item.style.color = "var(--primary)";
        item.style.fontWeight = "700";
        item.style.cursor = "pointer";
        item.style.transition = "var(--hover-transition)";
      });
    });
  }
}

customElements.define("all-categories", allCategoriesPlus);
