import { categoryNames } from "./names.js";
import "./NewArrives/NewArrives.js";
import "./HomeCategory/HomeCategory.js";
import "./Clothes/Clothes.js";
import "./Electro/Electro.js";
import "./Beauty/Beauty.js";
import "./Toys/Toys.js";
import "./Stationery/Stationery.js";
import "./Pets/Pets.js";
import "./Sports/Sports.js";
import "./Kids/Kids.js";
import "./Sale/Sale.js";
import "./Market/Market.js";
import "./Furniture/Furniture.js";
import "./Automotive/Automotive.js";
import "./Books/Books.js";

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
  home: { name: categoryNames.HOME, item: "<home-category></home-category>" },
  clothes: {
    name: categoryNames.CLOTHES,
    item: "<clothes-category></clothes-category>"
  },
  electro: {
    name: categoryNames.ELECTRO,
    item: "<electro-category></electro-category>"
  },
  beauty: {
    name: categoryNames.BEAUTY,
    item: "<beauty-category></beauty-category>"
  },
  toys: { name: categoryNames.TOYS, item: "<toys-category></toys-category>" },
  stationery: {
    name: categoryNames.STATIONERY,
    item: "<stationery-category></stationery-category>"
  },
  pets: {
    name: categoryNames.PETS,
    item: "<pets-category></pets-category>"
  },
  sports: {
    name: categoryNames.SPORTS,
    item: "<sports-category></sports-category>"
  },
  kids: { name: categoryNames.KIDS, item: "<kids-category></kids-category>" },
  sale: { name: categoryNames.SALE, item: "<sale-category></sale-category>" },
  market: {
    name: categoryNames.MARKET,
    item: "<market-category></market-category>"
  },
  furniture: {
    name: categoryNames.FURNITURE,
    item: "<furniture-category></furniture-category>"
  },
  automotive: {
    name: categoryNames.AUTOMOTIVE,
    item: "<automotive-category></automotive-category>"
  },
  books: {
    name: categoryNames.BOOKS,
    item: "<Books-category></Books-category>"
  }
};
