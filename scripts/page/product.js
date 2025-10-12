import { getLanguage, translations } from "../core/lang.js";
import { getDishFromId } from "../core/dishes.js";
import { getCategoryTitle} from "../core/categoryCore.js";
import { getCategory, renderTitle } from '../core/renderer.js';

function getDish() {
  const url = new URL(location.href);
  const dishId = url.searchParams.get("dish") || undefined;
  console.log(dishId)
  if (!dishId) return undefined;
  return getDishFromId(dishId);
}

export function renderDish() { renderDishDescription(getDish()); }

export function renderDishDescription(dish) {
  console.log(dish)
  if (dish === undefined) return;
  const descriptionContainer = document.querySelector('.dish-content');
  if (!descriptionContainer) return;
  descriptionContainer.innerHTML = '';
  let lang = getLanguage();
  let add_to_cart = translations['add_to_cart'][lang] || 'Add to cart';
  let dishName = translations[dish.id][lang] || 'Unnamed Dish';
  let dishDesc = translations[dish.description][lang] || 'No description';
  const image = document.getElementById("dish-img");
  if (image) {
    image.setAttribute("src", dish.image);
    image.setAttribute("alt", dishName)
  }
  const dishBlock = document.createElement('p');
  dishBlock.className = 'content';
  const formattedPrice = dish.price ? dish.price.toFixed(2) : '0.00';
  let ingredients = ''
  dish.ingredients.forEach(ingredient => {
    ingredients += `<span class="dish ingredient tag">${translations[ingredient][lang]}</span>`
  });
  
  let allergies = ''
  dish.allergies.forEach(allergy => {
    allergies += `<span class="dish allergy tag">${translations[allergy][lang]}</span>`
  });
  dishBlock.innerHTML = `
    <h1 id="dish-title" class="dish-title">${dishName} </h1>
        <p class="dish-desc">
        ${dishDesc}
        </p>

        <div class="dish-ctas">
        <button class="btn primary add-to-cart"
                data-id="${dish.id}"
                data-price="${dish.price}"
                aria-label="加入購物車：香煎豆腐定食，價格 14.90 歐元">
                ${add_to_cart} • ${formattedPrice}€
                
        </button>
        </div>
        


         <!-- 分出自己一段動態生成 用for 現在的這個.ingredients是liste 但不要liste -->
        <div class="dish-tags" aria-label="此餐點包含的食材">
          ${ingredients}${allergies}
        </div>
  `;
  descriptionContainer.appendChild(dishBlock)
}

renderDish();

function RenderDishImage() {
  if (dish === undefined) return;
  const imageContainer = document.querySelector('.dish-image');
  if (!imageContainer) return;

}

getCategory();
renderTitle(getCategoryTitle())