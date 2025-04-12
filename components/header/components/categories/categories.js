import { categoryNames } from "./names.js";
import "./NewArrives/NewArrives.js";
/* import { clothes } from "./clothes.js";
import { shoes } from "./shoes.js";
import { accessories } from "./accessories.js";
import { bags } from "./bags.js";
import { beauty } from "./beauty.js";
import { home } from "./home.js";
import { sports } from "./sports.js";
import { kids } from "./kids.js";
import { promotions } from "./promotions.js"; */

/* export const categories = {
  new_arrives: { name: "Novidades", item: newArrives }

 
  clothes: { name: "Roupas", item: clothes },
  shoes: { name: "Calçados", item: shoes },
  accessories: { name: "Acessórios", item: accessories },
  bags: { name: "Bolsas", item: bags },
  beauty: { name: "Beleza", item: beauty },
  home: { name: "Casa", item: home },
  sports: { name: "Esporte", item: sports },
  kids: { name: "Infantil", item: kids },
  promotions: { name: "Promoções", item: promotions } 
  
  launches: { name: "Lançamentos", item: launches },
  trends: { name: "Tendências", item: trends },
  mens_fashion: { name: "Moda Masculina", item: mensFashion },
  womens_fashion: { name: "Moda Feminina", item: womensFashion },
  outlet: { name: "Outlet", item: outlet }
  
  
 
}; */

// categories.js

export const categories = {
  new_arrives: {
    name: categoryNames.NEW_ARRIVES,
    item: "<new-arrives></new-arrives>"
  },
  clothes: { name: categoryNames.CLOTHES, item: "<p>TESTANDO 3</p>" },
  shoes: { name: categoryNames.SHOES, item: "<p>TESTANDO 4</p>" },
  accessories: { name: categoryNames.ACCESSORIES, item: "<p>TESTANDO 5</p>" },
  bags: { name: categoryNames.BAGS, item: "<p>TESTANDO 6</p>" },
  beauty: { name: categoryNames.BEAUTY, item: "<p>TESTANDO 7</p>" },
  home: { name: categoryNames.HOME, item: "<p>TESTANDO 8</p>" },
  sports: { name: categoryNames.SPORTS, item: "<p>TESTANDO 9</p>" },
  kids: { name: categoryNames.KIDS, item: "<p>TESTANDO 10</p>" },
  promotions: { name: categoryNames.PROMOTIONS, item: "<p>TESTANDO 11</p>" },
  launches: { name: categoryNames.LAUNCHES, item: "<p>TESTANDO 12</p>" },
  trends: { name: categoryNames.TRENDS, item: "<p>TESTANDO 13</p>" },
  mens_fashion: {
    name: categoryNames.MENS_FASHION,
    item: "<p>TESTANDO 14</p>"
  },
  womens_fashion: {
    name: categoryNames.WOMENS_FASHION,
    item: "<p>TESTANDO 15</p>"
  },
  outlet: { name: categoryNames.OUTLET, item: "<p>TESTANDO 16</p>" }
};
