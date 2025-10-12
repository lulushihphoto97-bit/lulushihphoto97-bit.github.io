import { getLanguage, setLanguage, translations } from "./lang.js";
import { categories } from "./dishes.js";

export function renderTitle(title) {
  const titleContainer = document.querySelector(".h2-container");
  if (!titleContainer) return;
  titleContainer.innerHTML = `<h2>${title}</h2>`;
}

export function renderTopBar() {
  console.log("TOPBAR");
  const topBar = document.querySelector('.top-bar');
  if (!topBar) return;
  let lang = getLanguage();
  let cartLabel = translations['cart'][lang] || 'Cart';
  let langLabel = translations['language'][lang] || 'Language';
  let goBackLabel = translations['go back'][lang] || 'Go back';
  let helpLabel = translations['help'][lang] || 'Help'; 
  const barElem = document.createElement('div');
  barElem.className = 'topbar-container';
  // topBar.innerHTML = ''; // Clear existing content
  barElem.innerHTML = `
    <header class="topbar" role="banner">
      <div class="topbar-left">
        <button class="btn go-back" aria-label="${goBackLabel}" onclick="window.history.back();">← ${goBackLabel}</button>
      </div>
      <nav class="topbar-right" aria-label="Actions">
        <a href="./panier.html" class="btn">
          ${cartLabel} <span class="badge" aria-label="articles dans le panier">0</span>
        </a>

        <div class="dropdown">
          <button class="btn">${langLabel} ▾</button>
          <div class="dropdown-content lang-select" role="menu" aria-label="Choisir la langue">
            <a aria-label="fr" role="menuitem">Français</a>
            <a aria-label="en" role="menuitem">English</a>
            <a aria-label="zh" role="menuitem">中文</a>
          </div>
        </div>

        <!-- Help -->
        <div>
          <a href="./help.html"class="btn">${helpLabel}</a>
        </div>
      </nav>
    </header>
  `;
  topBar.appendChild(barElem);

  // 更新購物車數量徽章
  function updateCartBadge() {
    const badge = topBar.querySelector('.badge');
    if (badge) {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const itemCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
      badge.textContent = itemCount;
      badge.style.display = itemCount > 0 ? 'inline-block' : 'none';
    }
  }
  updateCartBadge();
  bindLanguageSelection();

  // 監聽購物車變化事件
  document.addEventListener('cartchange', updateCartBadge);
}

export function bindLanguageSelection(){
  // 語言切換
  const langSelect = document.querySelector('.lang-select');
  if (langSelect) {
    let langButtons = langSelect.querySelectorAll('a');
    for (const element of langButtons) {
        element.addEventListener('click', (e) => {
            setLanguage(element.ariaLabel)
        });
    }
  }
}


export function getCategoryFromDishId(dishId) {
  if (dishId === undefined) return undefined;
  const isIn = (data, id) => {
    for (const item of data) {
      if (item.id == id) return true;
    }
  }

  for (const category of categories) {
    if(isIn(category.data, dishId)) return category.id
  }
  return undefined;
}


const url = new URL(location.href);
export const DISH = url.searchParams.get("dish") || undefined;
export const CAT = url.searchParams.get("cat") || getCategoryFromDishId(DISH);
export const CAT_DEF = getCategory() || undefined;

export function getCategory() {
  for (let cat of categories) {
    if (cat.id === CAT) return cat;
  }
  return categories[0];
}