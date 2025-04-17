import { categoryNames } from "../names.js";
import { subcategoryNames } from "../names.js";
import "../../../../banners/BannerNewArrives/BannerNewArrives.js";

class Furniture extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [baseStyles, customStyles] = await Promise.all([
      fetch(new URL("../../../../../shadow-base.css", import.meta.url)).then(
        (res) => res.text()
      ),
      fetch(new URL("./Furniture.desktop.css", import.meta.url)).then((res) =>
        res.text()
      )
    ]);

    const category = categoryNames.FURNITURE;
    const subcategory = subcategoryNames.FURNITURE;

    const subcategoryGroup = [];
    const chunkSize = 8;

    for (let i = 0; i < subcategory.length; i += chunkSize) {
      subcategoryGroup.push(subcategory.slice(i, i + chunkSize));
    }

    this.shadowRoot.innerHTML = `
      <style>
        ${baseStyles}
        ${customStyles}
      </style>
      <div class="container">

        <section class=""> 
          <h4 class="title">${category}</h4>
          <div class="subcategory"> 
            <div class="column"> 
              ${Object.entries(subcategoryGroup[0])
                .map(
                  ([key, submenuData]) => ` 
                    <div class="item"> 
                      <p> ${submenuData}</p>
                    </div>
                  `
                )
                .join("")}
            </div>     
            <div class="column"> 
              ${Object.entries(subcategoryGroup[1])
                .map(
                  ([key, submenuData]) => ` 
                    <div class="item"> 
                      <p> ${submenuData}</p>
                    </div>
                  `
                )
                .join("")}
            </div>  
            <div class="column"> 
              ${Object.entries(subcategoryGroup[2])
                .map(
                  ([key, submenuData]) => ` 
                    <div class="item"> 
                      <p> ${submenuData}</p>
                    </div>
                  `
                )
                .join("")}
            </div>  
          </div>
          <banner-new-arrives></banner-new-arrives>
        </seciton>
    `;
  }
}

customElements.define("furniture-category", Furniture);
