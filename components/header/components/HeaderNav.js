import { burg_menu_svg } from "../../../img/icons/burg-menu.js";

// Importando os dois CSS via fetch
export async function generateNav() {
  const [desktopCSS, mobileCSS] = await Promise.all([
    fetch(new URL("./HeaderNav.desktop.css", import.meta.url)).then((res) =>
      res.text()
    ),
    fetch(new URL("./HeaderNav.mobile.css", import.meta.url)).then((res) =>
      res.text()
    )
  ]);

  const combinedStyles = `<style>${desktopCSS + mobileCSS}</style>`;

  const submenus = {
    Novidades: "<ul><li>Lançamentos</li><li>Tendências</li></ul>",
    Roupas: "<ul><li>Camisas</li><li>Vestidos</li><li>Calças</li></ul>",
    Calçados: "<ul><li>Tênis</li><li>Sandálias</li><li>Botas</li></ul>",
    Acessórios: "<ul><li>Relógios</li><li>Óculos</li></ul>",
    Bolsas: "<ul><li>Bolsas de Mão</li><li>Mochilas</li></ul>",
    Beleza: "<ul><li>Maquiagem</li><li>Perfumes</li></ul>",
    Casa: "<ul><li>Decoração</li><li>Cama, Mesa e Banho</li></ul>",
    Esporte: "<ul><li>Roupas Esportivas</li><li>Equipamentos</li></ul>",
    Infantil: "<ul><li>Roupas de Bebê</li><li>Brinquedos</li></ul>",
    Promoções: "<ul><li>Até 50%</li><li>Liquidação</li></ul>"
  };

  return {
    styles: "", // deixa vazio porque já vamos embutir os estilos no HTML
    html: `
      ${combinedStyles}
      <div class="nav">
        <div class="menu-wrapper">
          <div class="burg-menu">
            ${burg_menu_svg}
            <div class="all-categories"><p>Todas as Categorias</p></div>
          </div>
          <div class="home-menu">
            <div class="home-menu-container">Olá mundo</div>
          </div>
        </div>

        <div class="categories">
          ${Object.entries(submenus)
            .map(
              ([category, submenuHtml]) => `
                <div class="menu-wrapper">
                  <div class="category-label"><p>${category}</p></div>
                  <div class="home-menu">
                    <div class="home-menu-container">${submenuHtml}</div>
                  </div>
                </div>`
            )
            .join("")}
        </div>
      </div>
    `
  };
}
