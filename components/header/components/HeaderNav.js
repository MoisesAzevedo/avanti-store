import { burg_menu_svg } from "@img/icons/burg-menu.js";
import { categories } from "./categories/categories.js";
import { all_categories } from "./categories/AllCategories/all-categories-import.js";

class NavMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [desktopStyles, mobileStyles] = await Promise.all([
      fetch(new URL("./HeaderNav.desktop.css", import.meta.url)).then((res) =>
        res.text()
      ),
      fetch(new URL("./HeaderNav.mobile.css", import.meta.url)).then((res) =>
        res.text()
      )
    ]);

    this.shadowRoot.innerHTML = `
      <style>
        ${desktopStyles}
        ${mobileStyles}
      </style>
     
      
      <nav class="nav">
       ${Object.entries(all_categories)
         .map(
           ([key, submenuData]) => `
        <div class="menu-wrapper">
          <div class="burg-menu"s>
            ${burg_menu_svg}
            <div class="all-categories"> <p> ${submenuData.name} </p> </div>
          </div>
          <div class="home-menu-container">
            <div class="home-menu">${submenuData.item}</div>
          </div>
        </div>
        `
         )
         .join("")}

        <div class="categories">
          ${Object.entries(categories)
            .slice(0, 11)
            .map(
              ([key, submenuData]) => `
           
                <div class="menu-wrapper" ">
                  <div class="category-label"><p>${submenuData.name}</p></div>
                  <div class="home-menu-container  ">
                    <div class="home-menu">${submenuData.item}</div>
                  </div>
                </div>`
            )
            .join("")}
        </div>
      </nav>
    `;
  }
}

customElements.define("nav-menu", NavMenu);
