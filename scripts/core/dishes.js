import { translations } from './lang.js';

export const dishes = [
  {
    id: "dish1",
    image: "/photo/dish1.jpg",
    ingredients: ["tofu bio", "miso", "riz complet", "légumes de saison"],
    allergies:["soja", "sésame (traces)"],
    price: 14.90,
    description: "desc1",
  },
  {
    id: "dish2",
    image: "/photo/dish2.jpg",
    ingredients:["nattō", "sauce shōyu", "riz", "concombre", "algues"],
    allergies:["soja", "gluten"],
    price: 13.50,
    description: "desc2"
  },
  {
    id: "dish3",
    image: "/photo/dish3.jpg",
    ingredients:["soba", "goma dare", "cébette", "graines de sésame"],
    allergies:["gluten", "sésame"],
    price: 12.80,
    description: "desc3"
  },
  {
    id: "dish4",
    image: "/photo/dish4.jpg",
    ingredients:["kabocha", "carotte", "pomme de terre", "riz"],
    price: 14.20,
    description: "desc4"
  },
  {
    id: "dish5",
    image: "/photo/dish5.jpg",
    ingredients:["riz", "umeboshi", "algues nori", "sésame"],
    allergies:["sésame"],
    price: 9.80,
    description: "desc5"
  },
  {
    id: "dish6",
    image: "/photo/dish6.jpg",
    ingredients:["dashi végétal", "miso", "tofu", "wakame", "cébette"],
    allergies: ["soja"],
    price: 10.50,
    description: "desc6"
  },
  {
    id: "dish7",
    image: "/photo/dish7.jpg",
    ingredients:["tempeh", "sauce teriyaki", "brocoli", "riz"],
    allergies:["soja", "gluten", "sésame (traces)"],
    price: 13.90,
    description: "desc7"
  },
  {
    id: "dish8",
    image: "/photo/dish8.jpg",
    ingredients:["bouillon soja", "nouilles ramen", "champignons", "pak choï"],
    allergies: ["soja", "gluten", "sésame"],
    price: 12.70,
    description: "desc8"
  },
  {
    id: "dish9",
    image: "/photo/dish9.jpg",
    ingredients: ["tofu", "doubanjiang", "poivre du Sichuan", "cébette"],
    allergies: ["soja", "gluten (selon sauce)"],
    price: 12.90,
    description: "desc9"
  },
  {
    id: "dish10",
    image: "/photo/dish10.jpg",
    ingredients:["riz", "thé vert", "algues", "sésame", "prune salée"],
    allergies: ["sésame"],
    price: 10.90,
    description: "desc10"
  }
];

export const sides = [
{
  id: "dish11",
  image: "/photo/dish11.jpg",
  ingredients: ["chou", "carotte", "champignons", "pâte à gyoza"],
  allergies: ["gluten", "soja"],
  price: 7.50,
  description: "desc11"
},
{
  id: "dish12",
  image: "/photo/dish12.jpg",
  ingredients: ["edamame", "sel de mer"],
  allergies: ["soja"],
  price: 5.00,
  description: "desc12"
},
{
  id: "dish13",
  image: "/photo/dish13.jpg",
  ingredients: ["algues wakamé", "sésame", "vinaigrette japonaise"],
  allergies: ["sésame"],
  price: 6.20,
  description: "desc13"
},
{
  id: "dish14",
  image: "/photo/dish14.jpg",
  ingredients: ["bouillon végétal", "shiitake", "ciboule"],
  allergies: [],
  price: 4.80,
  description: "desc14"
},
{
  
  id: "dish15",
  image: "/photo/dish15.jpg",
  ingredients: ["aubergine", "miso", "huile de sésame"],
  allergies: ["soja", "sésame"],
  price: 7.90,
  description: "desc15"
},]


export const categories = [
  {
    id: "dishes",
    image: "file:///Users/lulu/Documents/%E6%96%87%E4%BB%B6%20-%20%E5%9A%95%E5%9A%95%E7%9A%84MacBook%20Pro/France/2024/UPEC/M2/CV/Profolio/carte%20interactive/photo/b48dc80019f39fc5f1b9bfb5e013ccb6.jpg",
    data: dishes
  },
  {
    id: "sides",
    data: sides,
    image: "file:///Users/lulu/Documents/%E6%96%87%E4%BB%B6%20-%20%E5%9A%95%E5%9A%95%E7%9A%84MacBook%20Pro/France/2024/UPEC/M2/CV/Profolio/carte%20interactive/photo/side1.jpg"
  },

  //   desserts:      { title: {FR:"Desserts", EN:"Desserts", ZH:"甜點"}, data: desserts }
];

export function getDishFromId(dishId) {
  for (const dish of dishes) {
    if (dish.id == dishId) return dish;
  }
  for (const side of sides) {
    if (side.id === dishId) return side;
  }
  return undefined;
}

function buildSetFromList(list, param, set = undefined) {
  if (set === undefined) set = new Set();
  list.forEach(item => {
    (item[param] || []).forEach(parameter => set.add(parameter));
  });
  return set;
}

function translateSet(set) {
  return Array.from(set).map(item => ({
    key: item,
    label: translations[item] || item
  }));
}

function buildList(param, categories) {
  const set = new Set();
  for (const category of categories) {
    console.log(category)
    buildSetFromList(category, param, set);
  }
  return translateSet(set);
}

export function buildAllergiesList(...categories) { return buildList('allergies', categories); }
export function buildIngredientsList(...categories) { return buildList('ingredients', categories); }
