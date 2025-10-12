import { getLanguage, translations, LANG } from "./lang.js";
import { attachFilterEvent, getFilteredDishes } from '../page/filter.js';
import { cart } from './cart.js';
import { CAT_DEF } from "./renderer.js";

export function bindButtons(animation = true) {
  let cartButtons = document.querySelectorAll('.add-to-cart');
  cartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const id = button.dataset.id;
      const price = Number(button.dataset.price);
      const item = { id: id, price: price }; // 預設加 1
      cart.add(item);

      if (animation) {
        const t = button.textContent;
        button.textContent = 'Added';
        button.disabled = true;
        setTimeout(() => {
          button.textContent = t;
          button.disabled = false;
        }, 900);
      }
    });
  });

  let removeButtons = document.querySelectorAll('.remove-product');
  removeButtons.forEach(button => {
    console.log(button)
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const id = button.dataset.id;
      const price = Number(button.dataset.price);
      const item = { id, price }; // 預設加 1
      cart.remove(item);
    });
  });

  let quantities = document.querySelectorAll('.itemQty');
  quantities.forEach(button => {
    cart.addListener(button)
    button.addEventListener('cartchange', (e) => {
      const id = button.dataset.id;
      if (id != e.detail.id) return;
      button.innerText = e.detail.qty
    });
  });
}


export function renderCategoryDishesFilter() {
  let filtered = getFilteredDishes(CAT_DEF.data);
  renderCategoryDishes(filtered);
}

export function getCategoryTitle() {
  return translations[CAT_DEF.id][LANG] || 'Unnamed Category';
}

attachFilterEvent(renderCategoryDishesFilter);

// Ajoute les plats de dishes dans la catégorie affichée
function renderCategoryDishes(dishes) {
  const categoryContainer = document.querySelector('.item-list');
  if (!categoryContainer) return;
  categoryContainer.innerHTML = '';
  let lang = getLanguage();
  let see_more = translations['see_more'][lang] || 'See more';
  let add_to_cart = translations['add_to_cart'][lang] || 'Add to cart';
  const supprimer = translations['supprimer'][lang] || 'Delete';
  dishes.forEach(dish => {
    let itemQty = cart.count(dish.id);
    let dishName = translations[dish.id][lang] || 'Unnamed Dish';
    const dishElem = document.createElement('li');
    dishElem.className = 'item';
    // Format price to two digits after the decimal point
    const formattedPrice = dish.price ? dish.price.toFixed(2) : '0.00';
    dishElem.innerHTML = `
      <img class="item-img" src="${dish.image || ''}" alt="${dishName}">
      <div class="item-content">
      <h3 class="item-title">${dishName}</h3>
      <button 
        class="btn primary add-to-cart" 
        data-id="${dish.id}" 
        data-name="${dishName}" 
        data-price="${dish.price}" 
        data-image="${dish.image || ''}">
        ${add_to_cart} • ${formattedPrice}€
      </button>
      <a class="btn ghost see-more" href="./product.html?dish=${dish.id}" aria-label="查看更多：香煎豆腐定食">
        ${see_more}
      </a>
      </div>
      <div class="qtyAndRemove">
        <button data-id="${dish.id}" class="btn ghost itemQty changecart">
          ${itemQty} 
        </button>
        <button data-id="${dish.id}" class="btn ghost remove-product">
          ${supprimer}
        </button>
      </div>


    `;
    categoryContainer.appendChild(dishElem);
  });
}

export function renderfilterTriger () {
  const filterTrigerTitle = document.querySelector('.btn.filter-trigger');
  if (!filterTrigerTitle) return;
  let lang = getLanguage();
  let filter = translations['filter'][lang] || 'filter';
  filterTrigerTitle.innerText = filter;
}
renderfilterTriger();

// 小工具
// function labelAllergens(lang){ return translations['allergies'][lang] || translations['allergies'].FR; }

// function formatEUR(n){ return new Intl.NumberFormat('fr-FR',{style:'currency',currency:'EUR'}).format(n||0); }
// function escapeHtml(s){ return String(s).replace(/[&<>"']/g, m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m])); }